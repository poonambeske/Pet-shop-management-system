package com.example.demo.entitites;

import javax.persistence.*;

@Entity
@Table(name="orders1")
public class Orders1 {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int order_id;
	
	@Column
	private int pid;
	
	@Column
	private Float totalprice;
	
	@Column
	private String breed;
	
	@Column
	private int quantity;
	
	@Column
	private int cid;


	public Orders1() {
		super();
		// TODO Auto-generated constructor stub
	}


	public Orders1(int pid, Float totalprice, String breed, int quantity, int cid) {
		super();
		this.pid = pid;
		this.totalprice = totalprice;
		this.breed = breed;
		this.quantity = quantity;
		this.cid = cid;
	}


	public int getOrder_id() {
		return order_id;
	}


	public void setOrder_id(int order_id) {
		this.order_id = order_id;
	}


	public int getPid() {
		return pid;
	}


	public void setPid(int pid) {
		this.pid = pid;
	}


	public Float getTotalprice() {
		return totalprice;
	}


	public void setTotalprice(Float totalprice) {
		this.totalprice = totalprice;
	}


	public String getBreed() {
		return breed;
	}


	public void setBreed(String breed) {
		this.breed = breed;
	}

	

	public int getQuantity() {
		return quantity;
	}


	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}


	public int getCid() {
		return cid;
	}


	public void setCid(int cid) {
		this.cid = cid;
	}


	@Override
	public String toString() {
		return "Orders1 [order_id=" + order_id + ", pid=" + pid + ", totalprice=" + totalprice + ", breed=" + breed
				+ ", quantity=" + quantity + ", cid=" + cid + "]";
	}


	


	
	
	
}
