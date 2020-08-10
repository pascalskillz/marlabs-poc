package com.pascalskillz.controller;

import com.pascalskillz.model.User;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

@RestController
@CrossOrigin
public class UserRestController {

    /*@GetMapping("/login")
    public boolean login(@RequestBody User user){
        return user.getEmail().equalsIgnoreCase("user@gmail.com")
                && user.getPassword().equals("password");
    }*/

    /*@GetMapping("/login")
    public Principal login(Principal user){
        return user;
    }*/

    @GetMapping("/login")
    public String login(){
        System.out.println("login called");
        return "login successful";
    }
}
