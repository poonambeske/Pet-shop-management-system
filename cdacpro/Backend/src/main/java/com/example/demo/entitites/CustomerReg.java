package com.example.demo.entitites;

import java.time.LocalDateTime;

public class CustomerReg {

	private String email;
	private String password;
	private String fname;
	private String lname;
	private String address;
	private String contactno;
	private String token;
	private LocalDateTime tokenCreationDate;
	
	public CustomerReg() {
		super();
		// TODO Auto-generated constructor stub
	}
	
//	public CustomerReg(String email, String password, String fname, String lname, String address, String contactno) {
//		super();
//		this.email = email;
//		this.password = password;
//		this.fname = fname;
//		this.lname = lname;
//		this.address = address;
//		this.contactno = contactno;
//	}
	
	
	
	
	public CustomerReg(String email, String password, String fname, String lname, String address, String contactno,
			String token, LocalDateTime tokenCreationDate) {
		super();
		this.email = email;
		this.password = password;
		this.fname = fname;
		this.lname = lname;
		this.address = address;
		this.contactno = contactno;
		this.token = token;
		this.tokenCreationDate = tokenCreationDate;
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
	public String getFname() {
		return fname;
	}
	public void setFname(String fname) {
		this.fname = fname;
	}
	public String getLname() {
		return lname;
	}
	public void setLname(String lname) {
		this.lname = lname;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getContactno() {
		return contactno;
	}
	public void setContactno(String contactno) {
		this.contactno = contactno;
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
		return "CustomerReg [email=" + email + ", password=" + password + ", fname=" + fname + ", lname=" + lname
				+ ", address=" + address + ", contactno=" + contactno + ", token=" + token + ", tokenCreationDate="
				+ tokenCreationDate + "]";
	}
	
	
	
	
//	@Override
//	public String toString() {
//		return "CustomerReg [email=" + email + ", password=" + password + ", fname=" + fname + ", lname=" + lname
//				+ ", address=" + address + ", contactno=" + contactno + "]";
//	}
	
	
	
}
