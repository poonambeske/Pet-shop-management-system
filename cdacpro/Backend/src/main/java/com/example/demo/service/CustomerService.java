package com.example.demo.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entitites.Customer;
import com.example.demo.repository.CustomerRepository;



@Service
public class CustomerService {
	
	@Autowired
	CustomerRepository crepo;

	public Customer addData(Customer c)
	{
		return crepo.save(c);
	}
	
	public Customer getById(int cid) {
		Optional<Customer> c= crepo.findById(cid);
		Customer o=null;
		try {
			o=c.get();
		} catch (Exception e) {
			// TODO: handle exception
			o=null;
			
		}
		return o;
				
	}
}
