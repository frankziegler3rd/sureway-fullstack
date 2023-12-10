import React, { useState } from "react";
import axios from "axios";

function CreateSurvey() {
  const [surveyData, setSurveyData] = useState({
    title: "",
    questions: [],
    resultA: "",
    resultB: "",
    resultC: "",
    resultD: "",
    resultE: "",
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
    const resultKey = `result${String.fromCharCode(65 + resultIndex)}`;
    setSurveyData({ ...surveyData, [resultKey]: value });
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
    e.preventDefault();
    console.log('Survey Data:', surveyData);
    try {
      const response = await axios.post('http://localhost:8080/create-survey', surveyData);
      console.log('Survey submitted:', response.data);
    } catch (error) {
      console.error('Error submitting survey:', error);
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
        
        {/* Add input fields for results */}
        {['A', 'B', 'C', 'D', 'E'].map((resultLetter, resultIndex) => (
          <div key={resultIndex}>
            <label>
              {`Result ${resultLetter}`}:
              <input type="text" value={surveyData[`result${resultLetter}`]} onChange={(event) => handleResultChange(event, resultIndex)} />
            </label>
          </div>
        ))}

        {/* Add, delete question buttons */}
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
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
export default CreateSurvey;

