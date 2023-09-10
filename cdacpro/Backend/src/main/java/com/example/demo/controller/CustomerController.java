package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entitites.Customer;
import com.example.demo.entitites.CustomerReg;
import com.example.demo.entitites.LoginUser;
import com.example.demo.repository.LoginRepository;
import com.example.demo.service.CustomerService;
import com.example.demo.service.LoginService;


//@CrossOrigin(origins = "http://localhost:3000")
@CrossOrigin(origins = "*")
@RestController
public class CustomerController {

	@Autowired
	CustomerService cservice;
	
	@Autowired
	LoginService lservice;
	
	@Autowired
	LoginRepository lrepo;
	
	@PostMapping("/custreg")
	public Customer registerCustomer(@RequestBody CustomerReg c)
	{
		LoginUser lu = lrepo.findByEmail(c.getEmail());
		Customer cu = null;
		if(lu == null) {
		LoginUser l = new LoginUser(c.getEmail(),c.getPassword(),c.getToken(),c.getTokenCreationDate(),"customer","active");
		LoginUser insert = lservice.addData(l);
		Customer cus = new Customer(c.getFname(),c.getLname(),c.getAddress(),c.getContactno(),insert);
		cu = cservice.addData(cus);
		}
		return cu;
	}
	
	/*@GetMapping("/getbyemail")
	public Customer getByEmailId(@RequestParam("email") String email)
	{
		return cservice.getByEmailId(email);
	}*/
}
