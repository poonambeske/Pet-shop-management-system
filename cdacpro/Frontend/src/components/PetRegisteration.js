import React, { Component } from 'react'
import { Button, Container, Form } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import CustomerregistrationAPI from '../services/CustomerregistrationAPI';
import PetownerregistrationAPI from '../services/PetownerregistrationAPI';
import CustNavBar from './CustNavBar'

export default class PetRegisteration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // value: '1',
            //selectbreed: '',
            typelist: [],
            breedlist: [],
            pettypeid: null,
            breedid: null,
            price: null,
            image: null,
            age: null,
            custid: null,
            message: null
        };
        this.reloadpettypelist = this.reloadpettypelist.bind(this);
        this.breedtypelist = this.breedtypelist.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleChange1 = this.handleChange1.bind(this);
        //this.handleSubmit = this.handleSubmit.bind(this);
        //  this.handleSubmit1 = this.handleSubmit1.bind(this);
        this.onChange = this.onChange.bind(this);
        this.ownerreg = this.ownerreg.bind(this);

    }

    handleChange(event) {
        this.setState({
            pettypeid: event.target.value
        });
        this.breedtypelist(event.target.value);
    }

    handleChange1(event) {
        this.setState({
            breedid: event.target.value
        });
    }

    /*handleSubmit(event) {
        alert('Your favorite flavor is: ' + this.state.value);
        event.preventDefault();
        this.setState({
            pettypeid: this.state.value
        })
        this.breedtypelist(this.state.value);
    }*/

    /* handleSubmit1(event) {
         alert('Your favorite flavor is: ' + this.state.selectbreed);
         event.preventDefault();
         console.log(this.state.selectbreed);
         this.setState({
             breedid: this.state.selectbreed
         })
     }*/

    componentDidMount() {
        let cust = JSON.parse(sessionStorage.getItem("customer"));
        this.setState({
            custid: cust.cid
        });
        this.reloadpettypelist();

    }

    /* if (sessionStorage.getItem("role") == null) {
       window.location = "/"
   }*/

    reloadpettypelist() {
        CustomerregistrationAPI.fetchAllpettype().then((resp) => {
            this.setState({
                typelist: resp.data
            })
            console.log(resp.data);
        });
    }

    breedtypelist(id) {
        CustomerregistrationAPI.fetchAllbreedtype(id).then((resp) => {
            this.setState({
                breedlist: resp.data
            })
            console.log(resp.data);
        });
    }


    ownerreg = e => {

        e.preventDefault();

        var formData = new FormData();
        formData.append("image", document.getElementById("image").files[0])
        formData.append("breedtypeid", this.state.breedid)
        formData.append("typeid", this.state.pettypeid)
        formData.append("cid", this.state.custid)
        formData.append("age", this.state.age)
        formData.append("price", this.state.price)

        /* let user = {
             breedtypeid: this.state.breedid,
             typeid: this.state.pettypeid,
             cid: this.state.custid,
             image: this.state.image,
             age: this.state.age,
             price: this.state.price
         };
 
         var imagefile = new FormData();
          imagefile.append('image', document.getElementById("image").files[0]);*/

        if (this.state.age === '') {
            toast.error("Please enter age", { autoClose: 2000, position: toast.POSITION.TOP_RIGHT })
            return false;
        }
        if (this.state.price === '') {
            toast.error("Please enter price", { autoClose: 2000, position: toast.POSITION.TOP_RIGHT })
            return false;
        }

        fetch('http://localhost:5010/savePet',
            {
                method: "POST", body: formData
            })
            .then((res) => {
                //console.log(res);
                return res.json();
            }).then((res) => {
                this.setState({
                    message: 'registration successful.',
                    pettypeid: '',
                    breedid: '',
                    image: '',
                    age: '',
                    price: ''
                });
                console.log(res);
                toast.success(this.state.message);
            });

        /*  PetownerregistrationAPI.petreg(user).then(() => {
              this.setState({
                  message: 'registration successful.',
                  age: '',
                  price: ''
              });
              console.log(user);
  
              toast.success(this.state.message);
          }).catch(error => {
              this.setState({ message: 'Registration failed.' });
              toast.error(this.state.message, { autoClose: 2000, position: toast.POSITION.TOP_RIGHT });
              //err.response.data => DTO on the server side : ErrorResponse
              console.log(error);
          });*/
    }
    onChange = e => this.setState({ [e.target.name]: e.target.value });

    render() {
        return (
            <div>
                <CustNavBar />
                <h2 className="text-light">Pet Registration</h2>
                <Container className='rounded bg-dark pt-2' style={{ width: "30vw" }}><div>
                    {this.state.typelist.length === 0 ? <h4>Nothing in database</h4> :
                        <Form >
                            <Form.Label className='text-light'>
                                Select type of pet:
                                <Form.Select value={this.state.pettypeid} onChange={this.handleChange}>
                                    <option selected disabled>---select---</option>
                                    {this.state.typelist.map((typelist) => (<option key={typelist.typeid} value={typelist.typeid}>{typelist.typename}</option>))}
                                </Form.Select>
                            </Form.Label>
                        </Form>
                    }
                    {this.state.breedlist.length === 0 ? <h6>No pets in database</h6> :
                        <Form >
                            <Form.Label className='text-light'>
                                Select type of breed:
                                <Form.Select value={this.state.breedid} onChange={this.handleChange1}>
                                    <option selected disabled>---select---</option>
                                    {this.state.breedlist.map((breedlist) => (<option key={breedlist.breedtypeid} value={breedlist.breedtypeid}>{breedlist.breedname}</option>))}
                                </Form.Select>
                            </Form.Label>
                        </Form>
                    }</div>
                    <Form className="container bg-dark pt-2">
                        <Form.Group className="mb-4" controlId="formBasicPassword">
                            <Form.Control className="text-center" id="image" name="image" type="file" value={this.state.image} onChange={this.onChange} placeholder="choose image" />
                        </Form.Group>
                        <Form.Group className="mb-4" controlId="formBasicPassword">
                            <Form.Control className="text-center" name="age" type="number" value={this.state.age} onChange={this.onChange} placeholder="Enter Age" />
                        </Form.Group>
                        <Form.Group className="mb-4" controlId="formBasicPassword">
                            <Form.Control className="text-center" name="price" type="number" value={this.state.price} onChange={this.onChange} placeholder="Price" />
                        </Form.Group>
                        <h5 className="text-light">{this.state.message}</h5>
                        <Button className="mb-4" onClick={this.ownerreg} variant="primary" >
                            Register
                        </Button>
                        <ToastContainer />
                    </Form>
                </Container>
            </div>
        )
    }
}
