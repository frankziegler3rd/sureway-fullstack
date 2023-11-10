package com.sureway.fullstackbackend.service;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.stereotype.Component;
import java.util.Date;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Component
public class JWTTokenProvider {
    // Secret key to sign and verify JWT tokens
    private static final Logger logger = LoggerFactory.getLogger(JWTTokenProvider.class);
    private String secretKey = "YourSecretKey";
    public String generateToken(String username) {
        Date now = new Date();
        Date expiryDate = new Date(now.getTime() + 86400000); // 1 day

        String token = Jwts.builder()
                .setSubject(username)
                .setIssuedAt(now)
                .setExpiration(expiryDate)
                .signWith(SignatureAlgorithm.HS512, secretKey)
                .compact();

        logger.info("Generated token for user: {} - Token: {}", username, token);

        return token;
    }

}
