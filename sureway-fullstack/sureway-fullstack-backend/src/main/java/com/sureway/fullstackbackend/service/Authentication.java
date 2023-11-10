package com.sureway.fullstackbackend.service;

import com.sureway.fullstackbackend.model.User;
import com.sureway.fullstackbackend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Service
public class Authentication {

    private static final Logger logger = LoggerFactory.getLogger(Authentication.class);

    @Autowired
    private UserRepository userRepo;
    @Autowired
    private PasswordEncoder passwordEncoder;

    public boolean authenticate(String username, String password) {
        logger.info("Authenticating.");

        User user = userRepo.findByUsername(username);
        boolean passwordMatch = false;
        if(user != null && passwordEncoder.matches(password, user.getPassword())) {
            logger.info("User authenticated.");
            logger.info("User-provided password:", passwordEncoder.encode(password));
            logger.info("Stored hash password:", user.getPassword());
            passwordMatch = true;
        } else {
            logger.info("User invalid.");
        }
        return passwordMatch;
    }
}
