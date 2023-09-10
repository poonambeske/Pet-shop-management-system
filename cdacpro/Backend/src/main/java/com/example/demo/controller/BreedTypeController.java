package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entitites.Breedtype;
import com.example.demo.service.BreedtypeService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class BreedTypeController {

	@Autowired
	BreedtypeService bserv;
	
	@GetMapping("/showdata/{id}")
	public List<Breedtype> getAll(@PathVariable("id") int typeid)
	{
		return bserv.getAll(typeid);
	}
	
	@GetMapping("/allbreeds")
	public List<Breedtype> getBreeds(){
		return bserv.getAll();
	}
	@PostMapping("/savebreed")
	public Breedtype save(@RequestBody Breedtype b)
	{ 
		return bserv.addData(b);
	}
	
}
