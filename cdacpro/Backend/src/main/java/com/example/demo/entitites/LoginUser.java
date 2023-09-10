package com.example.demo.entitites;

import java.time.LocalDateTime;

import javax.persistence.*;

@Entity
@Table(name="loginuser")
public class LoginUser {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int loginid;
	@Column(unique = true)
	private String email;
	@Column
	private String password;
	
	private String token;
	@Column(columnDefinition = "TIMESTAMP")
	private LocalDateTime tokenCreationDate;
	
	@Column
	private String usertype;
	@Column
	private String status;
	
	public LoginUser() {
		super();
		// TODO Auto-generated constructor stub
	}

//	public LoginUser(String email, String password, String usertype, String status) {
//		super();
//		this.email = email;
//		this.password = password;
//		this.usertype = usertype;
//		this.status = status;
//	}
	
	
	

	

	public LoginUser(String email, String password, String token, LocalDateTime tokenCreationDate,
		String usertype, String status) {
	
	this.email = email;
	this.password = password;
	this.token = token;
	this.tokenCreationDate = tokenCreationDate;
	this.usertype = usertype;
	this.status = status;
}

	public String getStatus() {
		return status;
	}
	
	public void setStatus(String status) {
		this.status = status;
	}

	public int getLoginid() {
		return loginid;
	}

	public void setLoginid(int loginid) {
		this.loginid = loginid;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getUsertype() {
		return usertype;
	}

	public void setUsertype(String usertype) {
		this.usertype = usertype;
	}
	
	

	public String getToken() {
		return token;
	}

	public void setToken(String token) {
		this.token = token;
	}

	public LocalDateTime getTokenCreationDate() {
		return tokenCreationDate;
	}

	public void setTokenCreationDate(LocalDateTime tokenCreationDate) {
		this.tokenCreationDate = tokenCreationDate;
	}

	@Override
	public String toString() {
		return "LoginUser [loginid=" + loginid + ", email=" + email + ", password=" + password + ", token=" + token
				+ ", tokenCreationDate=" + tokenCreationDate + ", usertype=" + usertype + ", status=" + status + "]";
	}

//	@Override
//	public String toString() {
//		return "LoginUser [loginid=" + loginid + ", email=" + email + ", password=" + password + ", usertype="
//				+ usertype + "]";
//	}
	
	
	
	
	
	
	
}
