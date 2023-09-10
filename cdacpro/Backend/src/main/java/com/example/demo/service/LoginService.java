package com.example.demo.service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.UUID;
import java.time.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.demo.entitites.LoginUser;
import com.example.demo.repository.CustomerRepository;
import com.example.demo.repository.LoginRepository;


@Service
public class LoginService {

	@Autowired
	LoginRepository lrepo;

	@Autowired
	CustomerRepository crepo;
	
	PasswordEncoder passwordEncoder;
	
	private static final long EXPIRE_TOKEN_AFTER_MINUTES = 30;
	
	public LoginService(LoginRepository lrepo, CustomerRepository crepo, PasswordEncoder passwordEncoder) {
		super();
		this.lrepo = lrepo;
		this.crepo = crepo;
		this.passwordEncoder = new BCryptPasswordEncoder();
	}

	
	
	public LoginUser addData(LoginUser l)
	{
		l.setPassword(passwordEncoder.encode(l.getPassword()));
		return lrepo.save(l);
	}
	
	public Object checkLogin(String email,String password)
	{
		//LoginUser l = lrepo.checkLogin(email, password).get(0);
		//LoginUser l = lrepo.findByEmailAndPassword(email, password);
		LoginUser l = lrepo.findByEmail(email);
		String role =  l.getUsertype();
		String status = l.getStatus();
		Object o = null;
		if(status.equals("active")) {
			if(role.equals("customer"))
			{
				if (passwordEncoder.matches(password, l.getPassword())) {
				o = crepo.getCustomer(l);
				}
			}
			
			else if(role.equals("admin"))
			{
				//if (passwordEncoder.matches(password, l.getPassword())) {
				o = lrepo.getAdmin();
				//}
			}
		}
		
		return o;
		
	}
	
	public List<LoginUser> getAll()
	{
		return lrepo.findAll();
	}

	public void updateStatus(String status, LoginUser loginid) {
		lrepo.updateStatus(status, loginid);
		
	}
	
	public String forgotPassword(String email) {

		Optional<LoginUser> userOptional = Optional
				.ofNullable(lrepo.findByEmail(email));

		if (!userOptional.isPresent()) {
			return "Invalid email id.";
		}

		LoginUser user = userOptional.get();
		user.setToken(generateToken());
		user.setTokenCreationDate(LocalDateTime.now());

		user = lrepo.save(user);

		return user.getToken();
	}

	public String resetPassword(String token, String password) {

		Optional<LoginUser> userOptional = Optional
				.ofNullable(lrepo.findByToken(token));

		if (!userOptional.isPresent()) {
			return "Invalid token.";
		}

		LocalDateTime tokenCreationDate = userOptional.get().getTokenCreationDate();

		if (isTokenExpired(tokenCreationDate)) {
			return "Token expired.";

		}

		LoginUser user = userOptional.get();

		user.setPassword(passwordEncoder.encode(password));
		user.setToken(null);
		user.setTokenCreationDate(null);

		lrepo.save(user);

		return "Your password successfully updated.";
	}

	/**
	 * Generate unique token. You may add multiple parameters to create a strong
	 * token.
	 * 
	 * @return unique token
	 */
	private String generateToken() {
		StringBuilder token = new StringBuilder();

		return token.append(UUID.randomUUID().toString())
				.append(UUID.randomUUID().toString()).toString();
	}

	/**
	 * Check whether the created token expired or not.
	 * 
	 * @param tokenCreationDate
	 * @return true or false
	 */
	private boolean isTokenExpired(final LocalDateTime tokenCreationDate) {

		LocalDateTime now = LocalDateTime.now();
		Duration diff = Duration.between(tokenCreationDate, now);

		return diff.toMinutes() >= EXPIRE_TOKEN_AFTER_MINUTES;
	}
	
	
	
	
}
