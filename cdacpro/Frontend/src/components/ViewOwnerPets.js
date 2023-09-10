import React, { Component } from 'react'
import { Button, Modal } from 'react-bootstrap';
import PetownerregistrationAPI from '../services/PetownerregistrationAPI';
import CustNavBar from './CustNavBar';
import PetDisplay from './PetDisplay';

export default class ViewOwnerPets extends Component {
    constructor(props) {
        super(props)

        this.state = {
            users: [],
            price: null,
            upid: null,
            show: false,
            imgUrl: "",
            data: [],
            image: [],
            toggle: false,
            message: null
        }
        this.reloadUsersList = this.reloadUsersList.bind(this);
        this.onDeletePet = this.onDeletePet.bind(this);
        this.handleshow = this.handleshow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.setState = this.setState.bind(this)
        this.loadImg = this.loadImg.bind(this);
        this.forceUpdate = this.forceUpdate.bind(this)
    }

    loadImg() {
        let cust = JSON.parse(sessionStorage.getItem("customer"));
        let custid = cust.cid;
        PetownerregistrationAPI.fetchAllOwnerPets(custid)
            .then(response =>
                /*  response.data.map((p)=>{
                      this.setState({data:[...this.data,p.image]});
  
                  })*/
                // console.log(response.data)
                this.setState({ data: response.data })
            );
        //  console.log(this.data);



    }

    componentDidMount() {
        this.reloadUsersList();
        if (sessionStorage.getItem("role") == null) {
            window.location = "/"
        }
    }

    /* reloadUsersList() {
         let cust = JSON.parse(sessionStorage.getItem("customer"));
         let custid = cust.cid;
         PetownerregistrationAPI.fetchAllOwnerPets(custid)
             .then((resp) => {
                 this.setState({
                     users: resp.data,
                     message: "Owner pets rendered successfully"
                 })
                 console.log(this.state.message);
             });
     }*/

    reloadUsersList() {
        let cust = JSON.parse(sessionStorage.getItem("customer"));
        let custid = cust.cid;

        PetownerregistrationAPI.fetchAllOwnerPets(custid)
            .then((resp) => {
                // const base64 = btoa(
                //     new Uint8Array(resp.data).reduce(
                //       (data, byte) => data + String.fromCharCode(byte),
                //       ''
                //     )

                //   )
                console.log(resp.data)
                var arr = []

                console.log(arr)
                this.setState(state => {
                    // console.log(arr )
                    return {
                        users: resp.data,
                        message: "Owner pets rendered successfully",
                        //image: arr

                    }

                })
                var count = 0;
                var arr = []


                resp.data.forEach(item => {
                    //const getImg = async () => {
                    fetch(`data:image/jpeg;base64,${item.image}`)
                        .then(v => v.blob())
                        .then(imageblob => {

                            const reader = new FileReader();
                            reader.readAsDataURL(imageblob);
                            reader.onloadend = () => {
                                const base64data = reader.result;
                                count++
                                arr.push(base64data)
                                if (count == resp.data.length) {
                                    this.setState(state => {
                                        return {
                                            image: arr
                                        }
                                    })

                                }


                            };
                        }
                        )
                    // const response = await fetch(`data:image/jpeg;base64,${item.image}`);
                    // const imageBlob = await response.blob();
                    // const reader = new FileReader();
                    // reader.readAsDataURL(imageBlob);
                    // reader.onloadend = () => {
                    //     const base64data = reader.result;
                    //     //arr.push(base64data)
                    // };
                }

                    //arr.push(item.image)
                    //   getImg()
                    //  }
                )
                console.log(this.state.message);
            });
    }

    onDeletePet = pid => {
        if (window.confirm("Are you sure you want to delete this pet?")) {
            PetownerregistrationAPI.deleteOwnedPet(pid)
                .then(res => {
                    this.setState({ message: 'Pet deleted successfully.' });
                    console.log(this.state.message, 'Pet ID: ', pid);
                    this.setState({ users: this.state.users.filter(users => users.pid !== pid) });
                })
        } else
            console.log("request cancelled");
    }

    handleClose() {
        this.setState({ show: false })
    }

    handleshow(value) {
        this.setState({ show: true, upid: value })
        alert("show loaded" + value)
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    saveChanges(val, upid) {
        console.log(val, upid);
        PetownerregistrationAPI.updateOwnedPet(val, upid)
            .then(res => {
                this.setState({
                    message: 'Pet updated successfully.',
                    price: ''
                });
                console.log(this.state.message, 'Pet ID: ', upid);
                this.reloadUsersList();
            })
        this.setState({ show: false })
    }

    render() {
        return (
            <div>
                <CustNavBar />
                {this.state.users.length === 0 ? <h3>No Pets Sold yet</h3> :
                    <div> <h3 className='text-light'>Your Pets For Sell</h3>

                        <table className="table text-light table-bordered">
                            <thead className="bg-dark text-light">
                                <tr>
                                    <th className="visually-hidden">Id</th>
                                    <th>PId</th>
                                    <th>Image</th>
                                    <th>Breed</th>
                                    <th>Age</th>
                                    <th>Price</th>
                                    <th>Pet Type</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.users.map(
                                        users =>
                                            <tr key={users.pid}>
                                                <PetDisplay users={users} message={this.state.message} setState={this.setState} state={this.state}
                                                    forceUpdate={this.forceUpdate}>
                                                </PetDisplay>
                                                <td><Button onClick={() => { this.handleshow(users.pid) }}>update</Button><Button onClick={() => { this.onDeletePet(users.pid) }}>delete</Button></td>
                                                <td> </td>
                                            </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                }<Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Updating price for Pid: {this.state.upid}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <input type="number" className="form-control" placeholder="Enter Price " name="price" value={this.state.price} onChange={this.onChange} required />
                        <Button variant="primary" onClick={() => { this.saveChanges(this.state.price, this.state.upid) }}>
                            Save Changes
                        </Button>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                        </Button>

                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}
