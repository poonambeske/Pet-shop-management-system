package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entitites.TypeId;

@Repository
public interface TypeIdRepository extends JpaRepository<TypeId,Integer> {

}
