import React, { useState } from "react";
import axios from "axios";

function CreateSurvey() {
  const [surveyData, setSurveyData] = useState({
    title: "",
    questions: [],
    results: ["", "", "", "", ""],
  });

  const handleTitleChange = (event) => {
    setSurveyData({ ...surveyData, title: event.target.value });
  };

  const handleQuestionChange = (event, index) => {
    const { name, value } = event.target;
    const questions = [...surveyData.questions];
    questions[index][name] = value;
    setSurveyData({ ...surveyData, questions });
  };

  const handleAnswerChange = (event, questionIndex, answerIndex) => {
    const { value } = event.target;
    const questions = [...surveyData.questions];
    questions[questionIndex].answers[answerIndex] = value;
    setSurveyData({ ...surveyData, questions });
  };

  const handleResultChange = (event, resultIndex) => {
    const { value } = event.target;
    const results = [...surveyData.results];
    results[resultIndex] = value;
    setSurveyData({ ...surveyData, results });
  };

  const handleAddQuestion = () => {
    const questions = [...surveyData.questions, { question: "", answers: ["", "", "", ""] }];
    setSurveyData({ ...surveyData, questions });
  };

  const handleRemoveQuestion = (index) => {
    const questions = [...surveyData.questions];
    questions.splice(index, 1);
    setSurveyData({ ...surveyData, questions });
  };

  const handleSubmit = async (e) => {
    // Submit survey data to backend API

    e.preventDefault(); // Prevent form from refreshing page to check logs
    console.log('Survey Data:', surveyData); // Contains Title, Results, Questions with held array of answers inside
    try {
      const response = await axios.post('http://localhost:8080/create-survey', surveyData);
      console.log('Survey submitted:', response.data);
      // Handle success, show a success message, or perform other actions
    } catch (error) {
      console.error('Error submitting survey:', error);
      // Handle error, show an error message, etc.
    }
  };

  return (
    <div>
      <h1>Create Survey</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Survey Title:
          <input type="text" value={surveyData.title} onChange={handleTitleChange} />
        </label>
        {surveyData.questions.map((question, index) => (
          <div key={index}>
            <label>
              Question:
              <input type="text" name="question" value={question.question} onChange={(event) => handleQuestionChange(event, index)} />
            </label>
            {question.answers.map((answer, answerIndex) => (
              <div key={answerIndex}>
                <label>
                  {`Answer ${String.fromCharCode(65 + answerIndex)}`}:
                  <input type="text" value={answer} onChange={(event) => handleAnswerChange(event, index, answerIndex)} />
                </label>
              </div>
            ))}
            <button type="button" onClick={() => handleRemoveQuestion(index)}>Remove Question</button>
          </div>
        ))}
        <button type="button" onClick={handleAddQuestion}>Add Question</button>
        
        {/* Add input fields for results */}
        {surveyData.results.map((result, resultIndex) => (
          <div key={resultIndex}>
            <label>
              {`Result ${String.fromCharCode(65 + resultIndex)}`}:
              <input type="text" value={result} onChange={(event) => handleResultChange(event, resultIndex)} />
            </label>
          </div>
        ))}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CreateSurvey;

