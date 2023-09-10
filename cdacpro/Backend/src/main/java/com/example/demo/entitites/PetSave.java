package com.example.demo.entitites;

import java.sql.Date;

import org.springframework.web.multipart.MultipartFile;

public class PetSave {
	int breedtypeid;
	MultipartFile image;
	int age;
    Float price;
    int typeid;
    int cid;
	public PetSave() {
		super();
		// TODO Auto-generated constructor stub
	}
	public PetSave(int breedtypeid, MultipartFile image, int age, Float price,int typeid,int cid) {
		super();
		this.breedtypeid = breedtypeid;
		this.image = image;
		this.age = age;
		this.price = price;
		this.typeid=typeid;
		this.cid=cid;
	}
	public int getBreedtypeid() {
		return breedtypeid;
	}
	public int getCid() {
		return cid;
	}
	public void setCid(int cid) {
		this.cid = cid;
	}
	public void setBreedtypeid(int breedtypeid) {
		this.breedtypeid = breedtypeid;
	}
	public MultipartFile getImage() {
		return image;
	}
	public void setImage(MultipartFile image) {
		this.image = image;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public Float getPrice() {
		return price;
	}
	public void setPrice(Float price) {
		this.price = price;
	}
	
	public int getTypeid() {
		return typeid;
	}
	public void setTypeid(int typeid) {
		this.typeid = typeid;
	}
	@Override
	public String toString() {
		return "PetSave [breedtypeid=" + breedtypeid + ", image=" + image  + ", age="
				+ age + ", price=" + price + ", typeid=" + typeid + "]";
	}
	
	
	
	
	
    
}
