package com.example.demo.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entitites.TypeId;
import com.example.demo.repository.TypeIdRepository;

@Service
public class TypeIdService {

	@Autowired
	TypeIdRepository trepo;
	
	public List<TypeId> getAll()
	{
		return trepo.findAll();
	}
	
}
