package com.sureway.fullstackbackend.repository;

import com.sureway.fullstackbackend.model.Question;
import org.springframework.data.jpa.repository.JpaRepository;


public interface QuestionRepository extends JpaRepository<Question, Integer> {
    
}
