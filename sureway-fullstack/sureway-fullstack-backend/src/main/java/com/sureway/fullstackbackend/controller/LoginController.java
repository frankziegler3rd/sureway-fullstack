package com.sureway.fullstackbackend.controller;
import com.sureway.fullstackbackend.model.LoginRequest;
import com.sureway.fullstackbackend.model.LoginResponse;
import com.sureway.fullstackbackend.service.Authentication;
import com.sureway.fullstackbackend.service.JWTTokenProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@RestController
@CrossOrigin
public class LoginController {

    private static final Logger logger = LoggerFactory.getLogger(LoginController.class);
    @Autowired
    private Authentication authenticator; // Authenticate deez nuts!
    // Ha! Got em!!!

    @Autowired
    private JWTTokenProvider tokenProvider;

    @CrossOrigin
    @PostMapping("/login")
    public ResponseEntity<LoginResponse> loginAuthentication(@RequestBody LoginRequest loginRequest) {
        String username = loginRequest.getUsername();
        String password = loginRequest.getPassword();
        boolean isAuthenticated = authenticator.authenticate(username, password);
        if(isAuthenticated) {
            String authToken = tokenProvider.generateToken(username);
            logger.info("Generated token for user: {} - Token: {}", username, authToken);
            return ResponseEntity.ok(new LoginResponse("Login successful", authToken));
        }
        else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(new LoginResponse("Login failed", null));
        }
    }
}
