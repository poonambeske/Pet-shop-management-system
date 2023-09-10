package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.example.demo.entitites.Pet;
import com.example.demo.repository.PetRespository;

@Service
public class PetService {

	@Autowired
	PetRespository petrepo;
	
	public List<Pet> getByTypeId(int typeid)
	{
		return petrepo.getByTypeId(typeid);
		
	}
	
	public List<Pet> getAll()
	{
		return petrepo.getAll();
	}
	
	public List<Pet> getByCustomerid(int cid){
		return petrepo.getByCustomerid(cid);
	}
		
	public Pet addData(Pet pt)
	{
		return petrepo.save(pt);
	}
	public void deletebypet(Pet pid )
	{
		 petrepo.delete(pid);
	}
	
	public void updateData(int price, Pet pid)
	{
		petrepo.updateData(price, pid);
	}

	public List<Pet> getAllPets() {
		// TODO Auto-generated method stub
		return petrepo.findAll();
	}
	
	
}
