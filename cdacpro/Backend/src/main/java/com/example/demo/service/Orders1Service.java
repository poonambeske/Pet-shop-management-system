package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entitites.Orders1;
import com.example.demo.repository.Orders1Repository;

@Service 
public class Orders1Service {
	
	@Autowired
	Orders1Repository orrepo;

	public void saveTr(Orders1 o)
	{
		orrepo.save(o);
	}
	
	public List<Orders1> getDetails(int cid)
	{
		return orrepo.getDetails(cid);
	}
	
	public void removeItems(Orders1 order_id)
	{
		orrepo.delete(order_id);;
	}

	public void removeAll() {
		// TODO Auto-generated method stub
		orrepo.deleteAll();
	}
}
