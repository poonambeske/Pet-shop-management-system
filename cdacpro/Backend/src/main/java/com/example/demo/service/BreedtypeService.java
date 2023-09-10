package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entitites.Breedtype;
import com.example.demo.repository.BreedTypeRepository;

@Service
public class BreedtypeService {

	@Autowired
	BreedTypeRepository brepo;
	
	
	public List<Breedtype> getAll(int typeid)
	{
		return brepo.getById(typeid); 
	}
	
	public List<Breedtype> getAll() {
		return brepo.findAll();
	}
	
	public Breedtype addData(Breedtype b)
	{
		return brepo.save(b);
	}
	
	public Breedtype getById(int id) {
		Optional<Breedtype> b= brepo.findById(id);
		Breedtype t=null;
		try {
			t=b.get();
		} catch (Exception e) {
			// TODO: handle exception
			t=null;
			
		}
		return t;
				
	}
}
