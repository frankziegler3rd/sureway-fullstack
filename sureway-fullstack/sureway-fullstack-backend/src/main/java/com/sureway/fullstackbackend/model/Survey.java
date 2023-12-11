package com.sureway.fullstackbackend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.GenerationType;
import jakarta.persistence.ManyToOne;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "survey")
public class Survey {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "survey_id",
            updatable = false,
            nullable = false)
    private Integer survey_id;

    //Survey title
    @Column(name = "name",
            nullable = false)
    private String name;

    @Column(name = "number_of_questions")
    private Integer numberOfQuestions;
    
    //Survey results based on final answers
    @Column(name = "result_a")
    private String resultA;
    @Column(name = "result_b")
    private String resultB;
    @Column(name = "result_c")
    private String resultC;
    @Column(name = "result_d")
    private String resultD;

    // Inconclusive result
    @Column(name = "result_e")
    private String resultE;

    @ManyToOne
    @JoinColumn(name = "user_id", updatable = false)
    private User user;
    

    // // The questions in the survey for the data object
    @OneToMany(mappedBy = "survey", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Question> questions = new ArrayList<>();

    public Survey() {

    }

    public Survey(String name, Integer numberOfQuestions, ArrayList<Question> questions, String resultA, String resultB, String resultC, String resultD, String resultE) {
        this.name = name;
        this.numberOfQuestions = numberOfQuestions;
        this.questions = questions;
        this.resultA = resultA;
        this.resultB = resultB;
        this.resultC = resultC;
        this.resultD = resultD;
        this.resultE = resultE;
    }

    public String getName() {
        return name;
    }

        public void setName(String name) {
        this.name = name;
    }

    public Integer getNumberOfQuestions() {
        return numberOfQuestions;
    }

    public void setQuestions(List<Question> questions) {
        this.questions = questions;
    }

    public void setNumberOfQuestions(Integer numberOfQuestions) {
        this.numberOfQuestions = numberOfQuestions;
    }

    public String getResultA() {
        return resultA;
    }

    public void setResultA(String resultA) {
        this.resultA = resultA;
    }

    public String getResultB() {
        return resultB;
    }

    public void setResultB(String resultB) {
        this.resultB = resultB;
    }

    public String getResultC() {
        return resultC;
    }

    public void setResultC(String resultC) {
        this.resultC = resultC;
    }

    public String getResultD() {
        return resultD;
    }

    public void setResultD(String resultD) {
        this.resultD = resultD;
    }

    public String getResultE() {
        return resultE;
    }

    public void setResultE(String resultE) {
        this.resultE = resultE;
    }

    public Integer getSurvey_id() {
        return survey_id;
    }


    public void addQuestion(Question question) {
        questions.add(question);
        question.setSurvey(this);
    }

    public void removeQuestion(Question question) {
        questions.remove(question);
        question.setSurvey(null);
    }

    public List<Question> getQuestions() {
        return questions;
    }
}