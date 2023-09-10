package com.example.demo.repository;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entitites.Pet;

@Transactional
@Repository
public interface PetRespository extends JpaRepository<Pet, Integer> {

	@Query(value="select p.pid,p.image,p.price,p.age,p.breedtypeid,p.cid from pet p where p.breedtypeid in (select b.breedtypeid from breedtype b where b.typeid = ?1) ",nativeQuery = true)
	//@Query(value="select p.pid,p.price,p.bdate,b.breedname from pet p inner join breedtype b on b.breedtypeid = p.breedtypeid inner join pettype pe on pe.typeid = b.typeid where pe.typeid = ?1",nativeQuery = true)
	
	public List<Pet> getByTypeId(int typeid);
	
	/*@Query("SELECT p FROM Pet p JOIN p.breedtypeid b JOIN d.typeid t "+"WHERE p.typeid = ?1")
	public List<Pet> getByTypeId(int typeid);*/
	
	@Query(value="select p.pid,p.image,p.price,p.age,p.breedtypeid,p.cid from pet p inner join breedtype b on b.breedtypeid = p.breedtypeid ",nativeQuery = true)
	public List<Pet> getAll();
	
	
	@Query(value="select p.* from pet p inner join breedtype b on b.breedtypeid = p.breedtypeid inner join pettype t on t.typeid=b.breedtypeid where p.cid= ?1 ;",nativeQuery = true)
	public List<Pet> getByCustomerid(int cid);
	
	@Modifying
	@Query(value="delete from pet where pid= ?1;", nativeQuery = true)
	public void deletebypid(Pet pid);

	@Modifying
	@Query(value="update pet set price =?1 where pid=?2", nativeQuery = true)
	public void updateData(int price, Pet pid);
	
}
