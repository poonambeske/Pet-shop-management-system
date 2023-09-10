package com.example.demo.entitites;



import javax.persistence.*;


@Entity
@Table(name="pet")
public class Pet {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int pid;
	
	@Column
	@Lob
	byte[] image;
	
	@Column
	private Float price;
	
	@Column
	private int age;
	
	@OneToOne(cascade= CascadeType.PERSIST)
	@JoinColumn(name="breedtypeid")
	Breedtype breedtypeid;
	
	
	@OneToOne(cascade= CascadeType.PERSIST)
	@JoinColumn(name="cid")
	Customer cid;

	/**
	 * 
	 */
	public Pet() {
		super();
		// TODO Auto-generated constructor stub
	}


	public int getPid() {
		return pid;
	}

	public void setPid(int pid) {
		this.pid = pid;
	}

	public Breedtype getBreedtypeid() {
		return breedtypeid;
	}

	public void setBreedtypeid(Breedtype breedtypeid) {
		this.breedtypeid = breedtypeid;
	}

	public Float getPrice() {
		return price;
	}

	public void setPrice(Float price) {
		this.price = price;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public Customer getCid() {
		return cid;
	}

	public Pet(byte[] image, Float price, int age) {
		super();
		this.image = image;
		this.price = price;
		this.age = age;
		
	}
	
	public Pet(byte[] image,Float price, int age,Breedtype breedtypeid,  Customer cid) {
		super();
		this.image = image;
		this.breedtypeid = breedtypeid;
		this.price = price;
		this.age = age;
		this.cid = cid;
	}

	public void setCid(Customer cid) {
		this.cid = cid;
	}
	
	public byte[] getImage() {
		return image;
	}

	public void setImage(byte[] image) {
		this.image = image;
	}

	@Override
	public String toString() {
		return "Pet [pid=" + pid + ", image=" + image + ", price=" + price + ", age=" + age + ", breedtypeid="
				+ breedtypeid + ", cid=" + cid + "]";
	}
	 
	
	
	
}
