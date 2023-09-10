import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <div className="container">
                <h3 className="text-light py-3">About Us</h3>
                <div className='justify-content-center'>
                    <p className='text-light'>
                        Online pet shop system is a platform which provides customers a facility to buy pets in online and sellers to sell without any hassle. It is a web-based system and it will save valuable time and effort of customers and sellers.</p>
                    <p className='text-light'>Some additional features are- system allows the customers to search for product. The system displays all the pets details such as petid, name, price and age of pet etc. After searching in the system, it will display the list of available product and allows customer to choose a particular product. Then the system checks for the availability of pet in the shop. After the whole process the customers add to cart the product and buy. The important reason is to make-work easy.
                    </p>
                    <p className=" text-light">Regards, from creators:
                        <li>Kiran Jagtap</li>
                        <li>Abhilash Patil</li>
                        <li>Abhishek Kendre</li>
                        <li>Sachin Kamble</li>
                        <li>Shubham Rawalkar</li>
                        <li>Gaurav Patil</li>
                    </p>
                </div>


            </div>
        );
    }
}