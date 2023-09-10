package com.example.demo.repository;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entitites.LoginUser;

@Repository
public interface LoginRepository extends JpaRepository<LoginUser,Integer> {

	@Query("select l from LoginUser l where l.email = :email and l.password = :password")
	public List<LoginUser> checkLogin(String email,String password);
	
	public LoginUser findByEmailAndPassword(String email, String password);
	
	public LoginUser findByEmail(String email);
	
	@Query("select l from LoginUser l where l.usertype ='admin'")
	public Object getAdmin();

	@Modifying
	@Transactional
	@Query(value="update loginuser set status =?1 where loginid=?2", nativeQuery = true)
	public void updateStatus(String status, LoginUser loginid);

	LoginUser findByToken(String token);
}
