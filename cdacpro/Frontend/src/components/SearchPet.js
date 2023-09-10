
import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap';
import CustomerregistrationAPI from '../services/CustomerregistrationAPI';
import CustNavBar from './CustNavBar';
import PetDisplay from './PetDisplay';

export default class SearchPet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ptype: null,
            typelist: [],
            petlist: [],
            pets: [],
            flag: true,
            message: null
        };
        this.reloadpettypelist = this.reloadpettypelist.bind(this);
        this.petlist = this.petlist.bind(this);
        this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
        this.onAddtocart = this.onAddtocart.bind(this);
        this.getallpetlist = this.getallpetlist.bind(this);
    }

    handleChange(event) {
        this.setState({
            ptype: event.target.value,
            flag: false
        });
        this.petlist(event.target.value);
        console.log(this.state.ptype);
    }

    componentDidMount() {
        this.getallpetlist();
        this.reloadpettypelist();
        if (sessionStorage.getItem("role") == null) {
            window.location = "/"
        }
    }

    getallpetlist() {
        CustomerregistrationAPI.getallpets().then((resp) => {
            // this.setState({ petlist: resp.data })
            this.setState({ petlist: resp.data });

        })
    }

    reloadpettypelist() {
        CustomerregistrationAPI.fetchAllpettype().then((resp) => {
            this.setState({
                typelist: resp.data
            })
            console.log(resp.data);
        });
    }

    petlist(val) {
        CustomerregistrationAPI.fetchAllpets(val).then((resp) => {
            this.setState({
                pets: resp.data
            })
            console.log(resp.data);
        });
    }

    onAddtocart = pet => {
        console.log(pet);
        let cust = JSON.parse(sessionStorage.getItem("customer"));
        let custid = cust.cid;
        let cart = {
            pid: pet.pid,
            totalprice: pet.price,
            breed: pet.breedtypeid.breedname,
            cid: custid
        };
        CustomerregistrationAPI.addcartitems(cart)
            .then(res => {
                this.setState({ message: "Order added successfully." })
                console.log(this.state.message, 'pet ID: ', cart.pid);
                this.setState({
                    pets: this.state.pets.filter(pets => pets.pid !== cart.pid),
                    petlist: this.state.petlist.filter(pets => pets.pid !== cart.pid)
                });
            })
    }

    render() {
        return (
            <> <div>
                <CustNavBar />
                <h3 className='text-light'>Search Pets</h3><br></br>
                {this.state.typelist.length === 0 ? "" :
                    <Form className='mt-2'>
                        <Form.Label className='text-light'>
                            Select type of pet:
                            <Form.Select value={this.state.ptype} onChange={this.handleChange}>
                                <option selected disabled>---select pet type---</option>
                                {this.state.typelist.map((typelist) => (<option key={typelist.typeid} value={typelist.typeid}>{typelist.typename}</option>))}
                            </Form.Select>
                        </Form.Label>
                    </Form>
                }
            </div>
                <div className="container my-4">
                    {this.state.pets.length === 0 ? " " :
                        <div> <h3 className='text-light'>All Registered Pets List</h3>

                            <table className="table text-light table-bordered">
                                <thead className="bg-dark text-light">
                                    <tr>
                                        <th className="visually-hidden">Id</th>
                                        <th>PetId</th>
                                        <th>Image</th>
                                        <th>Breed</th>
                                        <th>Age</th>
                                        <th>Price(Rs)</th>
                                        <th>Pet Type </th>
                                        <th> </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.pets.map(
                                            users =>
                                                <tr key={users.pid}>
                                                    <PetDisplay users={users} message={this.state.message} setState={this.setState} state={this.state}
                                                        forceUpdate={this.forceUpdate}>


                                                    </PetDisplay>
                                                    <td><Button onClick={() => { this.onAddtocart(users) }}>add to cart</Button></td>

                                                </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                    }
                </div>{this.state.flag ?
                    <div className="container my-4">
                        {this.state.petlist.length === 0 ? <h4>No Pets in Store</h4> :
                            <div> <h3 className='text-light'>All Registered Pets List</h3>

                                <table className="table text-light table-bordered">
                                    <thead className="bg-dark text-light">
                                        <tr>
                                            <th className="visually-hidden">Id</th>
                                            <th>PetId</th>
                                            <th>Image</th>
                                            <th>Breed</th>
                                            <th>Age</th>
                                            <th>Price(Rs)</th>
                                            <th>Pet type</th>
                                            <th> </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            this.state.petlist.map(
                                                users =>
                                                    <tr key={users.pid}>
                                                        <PetDisplay users={users} message={this.state.message} setState={this.setState} state={this.state}
                                                            forceUpdate={this.forceUpdate}>


                                                        </PetDisplay>
                                                        <td><Button onClick={() => { this.onAddtocart(users) }}>add to cart</Button></td>

                                                    </tr>
                                            )
                                        }
                                    </tbody>
                                </table>
                            </div>
                        }
                    </div> : ''}
            </>

        )
    }
}
