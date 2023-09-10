package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entitites.Breedtype;

@Repository
public interface BreedTypeRepository extends JpaRepository<Breedtype,Integer> {

	@Query(value="select * from breedtype where typeid = ?1" ,nativeQuery = true)
	public List<Breedtype> getById(int typeid);
}
