package com.example.demo.entitites;

import java.util.List;

import javax.persistence.*;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

@Entity
@Table(name="breedtype")
public class Breedtype {

	@Id
	@Column

	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int breedtypeid;
	
	@Column
	private String breedname;
	
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="typeid", referencedColumnName = "typeid")
	private TypeId typeid;
	
	//@JsonProperty(access = Access.WRITE_ONLY)
	//List<TypeId> typeid;

	public Breedtype() {
		super();
	}

	
	
	public Breedtype(int breedtypeid, String breedname, TypeId typeid) {
		super();
		this.breedtypeid = breedtypeid;
		this.breedname = breedname;
		this.typeid = typeid;
	}

	public Breedtype(String breedname, TypeId typeid) {
		super();
		this.breedname = breedname;
		this.typeid = typeid;
	}



	public int getBreedtypeid() {
		return breedtypeid;
	}



	public void setBreedtypeid(int breedtypeid) {
		this.breedtypeid = breedtypeid;
	}



	public String getBreedname() {
		return breedname;
	}



	public void setBreedname(String breedname) {
		this.breedname = breedname;
	}



	public TypeId getTypeid() {
		return typeid;
	}



	public void setTypeid(TypeId typeid) {
		this.typeid = typeid;
	}



	@Override
	public String toString() {
		return "Breedtype [breedtypeid=" + breedtypeid + ", breedname=" + breedname +", typeid=" + typeid +"]";
	}

	
	
	
}