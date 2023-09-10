package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.example.demo.entitites.Orders1;

@Repository
public interface Orders1Repository extends JpaRepository<Orders1,Integer> {

	@Query(value="select * from orders1 where cid = ?1",nativeQuery = true)
	public List<Orders1> getDetails(int cid);
	
	/*@Modifying
	@Query(value="delete from orders1 where order_id = ?1",nativeQuery = true)
	public void remove(int order_id);*/
}
