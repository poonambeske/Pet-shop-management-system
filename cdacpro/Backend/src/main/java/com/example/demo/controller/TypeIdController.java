package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entitites.TypeId;
import com.example.demo.service.TypeIdService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class TypeIdController {

	@Autowired
	TypeIdService tservice;
	
	@GetMapping("/typename")
	public List<TypeId> getAll()
	{
		return tservice.getAll();
	}
	
}
