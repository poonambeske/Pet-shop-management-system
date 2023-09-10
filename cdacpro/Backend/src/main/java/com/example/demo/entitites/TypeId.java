package com.example.demo.entitites;

import java.util.Set;

import javax.persistence.*;

@Entity
@Table(name="pettype")
public class TypeId {

	@Id
	@Column
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int typeid;
	
	@Column
	private String typename;
	

	public TypeId() {
		super();
	}

	public TypeId(int typeid, String typename) {
		super();
		this.typeid = typeid;
		this.typename = typename;
	}
	
	
	public int getTypeid() {
		return typeid;
	}

	public void setTypeid(int typeid) {
		this.typeid = typeid;
	}

	public String getTypename() {
		return typename;
	}

	public void setTypename(String typename) {
		this.typename = typename;
	}

	@Override
	public String toString() {
		return "TypeId [typeid=" + typeid + ", typename=" + typename + "]";
	}
	
	
	
}
	