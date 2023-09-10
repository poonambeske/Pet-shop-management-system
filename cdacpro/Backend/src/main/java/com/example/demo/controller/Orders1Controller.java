package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entitites.Orders1;
import com.example.demo.service.Orders1Service;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class Orders1Controller {

	@Autowired
	Orders1Service odserv;
	
	@PostMapping("/savetr")
	public int saveOrder(@RequestBody Orders1 o)
	{
		try {
			Orders1 or = new Orders1(o.getPid(),o.getTotalprice(),o.getBreed(),1,o.getCid());
			odserv.saveTr(or);
		}
		catch(Exception e)
		{
			return 0;
		}
		return 1;
	}
	
	
	@GetMapping("/showall/{cid}")
	public List<Orders1> getDetails(@PathVariable("cid") int cid)
	{
		return odserv.getDetails(cid);
	}
	
	@GetMapping("delete/{order_id}")
	public void removeItems(@PathVariable("order_id") Orders1 order_id)
	{
		odserv.removeItems(order_id);
	}
	
	@GetMapping("/delete")
	public void removeAll()
	{
		odserv.removeAll();
	}
}
