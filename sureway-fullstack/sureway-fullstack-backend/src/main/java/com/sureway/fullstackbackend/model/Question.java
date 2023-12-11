package com.sureway.fullstackbackend.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.GenerationType;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.FetchType;
import jakarta.persistence.JoinColumn;

@Entity
@Table(name = "question")
public class Question {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "question_id",
            updatable = false,
            nullable = false)
    private Integer question_id;

    // The question text
    @Column(name = "question")
    private String question;

    //The four answers to the question
    @Column(name = "answer_a")
    private String answerA;
    @Column(name = "answer_b")
    private String answerB;
    @Column(name = "answer_c")
    private String answerC;
    @Column(name = "answer_d")
    private String answerD;

    // Reference to survey this question belongs to
    @ManyToOne(fetch = FetchType.LAZY)
    // Name of the foreign key
    @JoinColumn(name = "survey_id")
    private Survey survey;

    //Constructors
    public Question() {
    }

    // return all question data as a string
    @Override
    public String toString() {
        return String.format("Question[question_id=%d, question='%s', answerA='%s', answerB='%s', answerC='%s', answerD='%s']", 
        question_id, question, answerA, answerB, answerC, answerD);
    }

    //Contructor used to save question into the database
    public Question(String question, String answerA, String answerB, String answerC, String answerD) {
        this.question = question;
        this.answerA = answerA;
        this.answerB = answerB;
        this.answerC = answerC;
        this.answerD = answerD;
    }

    public String getQuestion() {
        return question;
    }

    public void setQuestion(String question) {
        this.question = question;
    }


    public String getAnswerA() {
        return answerA;
    }

    public String getAnswerB() {
        return answerB;
    }

    public String getAnswerC() {
        return answerC;
    }

    public String getAnswerD() {
        return answerD;
    }

    public void setAnswerA (String answer) {
        this.answerA= answer;
    }

      public void setAnswerB (String answer) {
        this.answerB = answer;
    }
      public void setAnswerC (String answer) {
        this.answerC = answer;
    }
      public void setAnswerD (String answer) {
        this.answerD = answer;
    }

    public Integer getQuestionId() {
        return question_id;
    }
    public void setSurvey(Survey survey) {
        this.survey = survey;
    }
}
