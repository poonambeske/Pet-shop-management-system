package com.example.demo.controller;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entitites.Breedtype;
import com.example.demo.entitites.Customer;
import com.example.demo.entitites.Pet;

import com.example.demo.entitites.PetSave;
import com.example.demo.service.BreedtypeService;
import com.example.demo.service.CustomerService;
import com.example.demo.service.PetService;
import com.example.demo.service.TypeIdService;

@CrossOrigin(origins = "*", allowedHeaders = "*")
//@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class PetController {

	@Autowired
	PetService petserv;
	
	@Autowired
	BreedtypeService bservice;
	
	@Autowired
	CustomerService cservice;
	
	
	@GetMapping("/getbyid/{id}")
	public List<Pet> getByTypeId(@PathVariable("id") int typeid)
	{
		return petserv.getByTypeId(typeid);
	}
	
	/*@GetMapping("/all")
	public List<Pet> getAll()
	{
		return petserv.getAll();
	}**/
	
	@GetMapping("/getPets")
	public List<Pet> getByCustomerid(@RequestParam("cid") int cid){
		return petserv.getByCustomerid(cid);
	}
	
	@GetMapping("/deletebypid")
	public void deleteByPid(@RequestParam("pid") Pet pid) {
		petserv.deletebypet(pid);
	}
	
	@PostMapping("/savePet")
	public Pet saveData( PetSave s) throws IOException
    {
		//Breedtype b1 = new Breedtype(s.getBreedname());
		Breedtype b=bservice.getById(s.getBreedtypeid());
		Customer c=cservice.getById(s.getCid());
		Pet p = new Pet(s.getImage().getBytes(),s.getPrice(),s.getAge(),b,c);
		return petserv.addData(p);
	}
	
	@GetMapping("/updatePet")
	public void updateData(@RequestParam("price") int price,@RequestParam("pid") Pet pid)
	{
		petserv.updateData(price, pid);
	}
	
	@GetMapping("/getallpets")
	public List<Pet> getAllPets()
	{
		return petserv.getAllPets();
	}
}
