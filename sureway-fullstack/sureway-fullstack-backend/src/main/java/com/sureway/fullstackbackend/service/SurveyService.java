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

    public void saveSurvey(Survey surveyData) {

        //DEBUG
        System.out.println("Survey name: " + surveyData.getName());
        System.out.println("Survey resultA: " + surveyData.getResultA());
        System.out.println("Survey resultB: " + surveyData.getResultB());
        System.out.println("Survey resultC: " + surveyData.getResultC());
        System.out.println("Survey resultD: " + surveyData.getResultD());
        System.out.println("Survey resultE: " + surveyData.getResultE());
        System.out.println("Survey number of questions: " + surveyData.getNumberOfQuestions());

        // Create a new Survey object
        Survey survey = new Survey();
        survey.setName(surveyData.getName());
        survey.setResultA(surveyData.getResultA());
        survey.setResultB(surveyData.getResultB());
        survey.setResultC(surveyData.getResultC());
        survey.setResultD(surveyData.getResultD());
        survey.setResultE(surveyData.getResultE());

        // Create and associate questions with the new survey
        for (int i = 0; i < surveyData.getNumberOfQuestions(); i++) {
            Question questionData = surveyData.getQuestions().get(i);

            Question question = new Question();
            question.setQuestion(questionData.getQuestion());
            question.setAnswerA(questionData.getAnswerA());
            question.setAnswerB(questionData.getAnswerB());
            question.setAnswerC(questionData.getAnswerC());
            question.setAnswerD(questionData.getAnswerD());
            question.setSurvey(survey); // Associate question with the new survey

            survey.getQuestions().add(question);
        }

        surveyRepository.save(survey); // Save the survey entity and its related entities to the database
    }
}
