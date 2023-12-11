package com.sureway.fullstackbackend.service;

import com.sureway.fullstackbackend.model.Question;
import com.sureway.fullstackbackend.model.Survey;
import com.sureway.fullstackbackend.repository.SurveyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

// Responsible for saving survey data to the database
@Service
public class SurveyService {

    @Autowired
    private SurveyRepository surveyRepository;

    public void setSurveyQuestions(Survey surveyData) {
        for (Question question : surveyData.getQuestions()) {
            question.setSurvey(surveyData); // Set the survey for the question (Survey_id)
        }

        surveyRepository.save(surveyData); // Save the survey entity and its related entities to the database
    }
}
