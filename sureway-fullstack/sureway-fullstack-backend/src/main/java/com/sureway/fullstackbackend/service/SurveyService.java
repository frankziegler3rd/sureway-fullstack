package com.sureway.fullstackbackend.service;
import  com.sureway.fullstackbackend.model.Question;
import  com.sureway.fullstackbackend.model.Survey;
import  com.sureway.fullstackbackend.repository.SurveyRepository;
import  org.springframework.beans.factory.annotation.Autowired;
import  org.springframework.stereotype.Service;




// Responsible for saving survey data to the database
@Service
public class SurveyService {

    @Autowired
    private SurveyRepository surveyRepository;

    public void saveSurvey(Survey surveyData) {

        // Saves survey title
        Survey survey = new Survey();
        survey.setName(surveyData.getName());

        // Mapping questions and answers
        for (Question questionData : surveyData.getQuestions()) {
            Question question = new Question();
            question.setQuestion(questionData.getQuestion());
            question.setSurvey(survey); // Associate question with the new survey

            survey.getQuestions().add(question);
        }

        surveyRepository.save(survey); // Save the survey entity and its related entities to the database
    }
}
