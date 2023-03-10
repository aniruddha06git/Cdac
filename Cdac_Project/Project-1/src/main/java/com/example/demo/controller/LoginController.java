package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.entities.Login;
import com.example.demo.service.LoginService;

@CrossOrigin
@RestController
public class LoginController {
	@Autowired
	LoginService lservice;
	@GetMapping("/getlogin")
	public List<Login> getlogin()
	{
		return lservice.getlogin();
	}
	@PostMapping("/checklogin")
	public Object checkLogin(@RequestBody Login l)
	{
		return lservice.checkLogin(l.getUname(),l.getPwd());
	}
	@PostMapping("/savelogin")
	public Login save(@RequestBody Login l)
	{
		return lservice.save(l);
	}
}

