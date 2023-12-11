package com.sureway.fullstackbackend.controller;

import com.sureway.fullstackbackend.model.Survey;
import com.sureway.fullstackbackend.repository.SurveyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.sureway.fullstackbackend.service.SurveyService;
import com.sureway.fullstackbackend.model.Question;
import com.sureway.fullstackbackend.repository.QuestionRepository;


@CrossOrigin
@RestController
public class SurveyController {

    @Autowired
    private SurveyService surveyService; // Your Survey repository

    @PostMapping("/create-survey")
    public ResponseEntity<String> createSurvey(@RequestBody Survey surveyData) {
        // Save surveyData to the database using your repository
        // Example:
        surveyService.setSurveyQuestions(surveyData);
        return ResponseEntity.ok("Survey data saved successfully");
    }
}
