package com.sureway.fullstackbackend.repository;

import com.sureway.fullstackbackend.model.Survey;


import org.springframework.data.jpa.repository.JpaRepository;


public interface SurveyRepository extends JpaRepository<Survey, Integer> {
}
