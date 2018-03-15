package cn.springmvc.model;

/**
 * 用户表
 
 */
public class User {

	public User(){};
	private int id;
	private String username;
	private String password;
	private String e_position;
	private double e_number;
	public String getE_position() {
		return e_position;
	}
	public void setE_position(String e_position) {
		this.e_position = e_position;
	}
	public double getE_number() {
		return e_number;
	}
	public void setE_number(double e_number) {
		this.e_number = e_number;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
}
