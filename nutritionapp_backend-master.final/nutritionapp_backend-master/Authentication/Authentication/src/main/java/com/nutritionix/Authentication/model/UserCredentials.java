package com.nutritionix.Authentication.model;

import org.springframework.stereotype.Component;

//import lombok.AllArgsConstructor;
//import lombok.Data;
//import lombok.NoArgsConstructor;


@Component
public class UserCredentials {
	
	String username;
	String password;
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
	public UserCredentials(String username, String password) {
		super();
		this.username = username;
		this.password = password;
	}
	public UserCredentials() {
		super();
		// TODO Auto-generated constructor stub
	}
	
}
