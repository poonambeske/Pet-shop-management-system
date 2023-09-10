package com.example.demo.entitites;


import javax.persistence.*;

@Entity
@Table(name="customer")
public class Customer {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int cid;
	@Column
	private String fname;
	@Column
	private String lname;
	
	@Column
	private String address;
	@Column
	private String contactno;
	
	
	
	@OneToOne(cascade= CascadeType.ALL)
	@JoinColumn(name="loginid")
	LoginUser loginid;
	
	
	public Customer() {
		super();
		// TODO Auto-generated constructor stub
	}


	/**
	 * @param fname
	 * @param lname
	 * @param address
	 * @param contactno
	 * @param loginid
	 */
	public Customer(String fname, String lname, String address, String contactno, LoginUser loginid) {
		super();
		this.fname = fname;
		this.lname = lname;
		this.address = address;
		this.contactno = contactno;
		this.loginid = loginid;
	}


	public int getCid() {
		return cid;
	}


	public void setCid(int cid) {
		this.cid = cid;
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


	public LoginUser getLoginid() {
		return loginid;
	}


	public void setLoginid(LoginUser loginid) {
		this.loginid = loginid;
	}


	@Override
	public String toString() {
		return "Customer [cid=" + cid + ", fname=" + fname + ", lname=" + lname + ", address=" + address
				+ ", contactno=" + contactno + ", loginid=" + loginid + "]";
	}
	
	
	
}
