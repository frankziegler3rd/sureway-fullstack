package com.sureway.fullstackbackend.controller;

import com.sureway.fullstackbackend.model.User;
import com.sureway.fullstackbackend.repository.UserRepository;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.List;

@CrossOrigin
@RestController
public class UserController {

    private static final Logger logger = LoggerFactory.getLogger(UserController.class);

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @CrossOrigin
    @PostMapping("/register")
    public User newUser(@RequestBody User newUser) {
        String hashPass = passwordEncoder.encode(newUser.getPassword());
        newUser.setPassword(hashPass);
        logger.info("Registration successful");
        return userRepository.save(newUser);
    }

    @CrossOrigin
    @GetMapping("/check-username")
    public ResponseEntity<Boolean> checkUsernameAvailability(@RequestParam String username) {
        User existingUser = userRepository.findByUsername(username);
        ResponseEntity<Boolean> isAvailable = ResponseEntity.ok(false);
        if(existingUser == null) {
            isAvailable = ResponseEntity.ok(true);
        }
        return isAvailable;
    }

    @CrossOrigin
    @GetMapping("/check-email")
    public ResponseEntity<Boolean> checkEmailAvailability(@RequestParam String email) {
        User existingUser = userRepository.findByEmail(email);
        ResponseEntity<Boolean> isAvailable = ResponseEntity.ok(false);
        if(existingUser == null) {
            isAvailable = ResponseEntity.ok(true);
        }
        return isAvailable;
    }
}
