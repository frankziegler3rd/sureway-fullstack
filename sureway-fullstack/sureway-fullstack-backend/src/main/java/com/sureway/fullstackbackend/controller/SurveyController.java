package com.sureway.fullstackbackend.controller;

import com.sureway.fullstackbackend.model.Survey;
import com.sureway.fullstackbackend.repository.SurveyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
public class SurveyController {

    @Autowired
    private SurveyRepository surveyRepository; // Your Survey repository

    @PostMapping("/create-survey")
    public ResponseEntity<String> saveSurvey(@RequestBody Survey surveyData) {
        // Save surveyData to the database using your repository
        // Example:
        surveyRepository.save(surveyData);
        return ResponseEntity.ok("Survey data saved successfully");
    }
}

