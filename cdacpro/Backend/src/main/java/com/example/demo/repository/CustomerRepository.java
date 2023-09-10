package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entitites.Customer;
import com.example.demo.entitites.LoginUser;

@Repository
public interface CustomerRepository extends JpaRepository<Customer,Integer> {

	@Query("select c from Customer c where loginid = ?1")
	public Customer getCustomer(LoginUser l);
	
	
}
