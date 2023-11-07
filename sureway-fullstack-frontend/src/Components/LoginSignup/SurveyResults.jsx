import React from 'react';
import { useLocation } from 'react-router-dom';


const SurveyResults = () => {
    const location = useLocation();
    const surveyResult = location.state.surveyResult;

    console.log(location.state); // Log the state to see if it's correctly passed
    return (
      <div>
        <h1>Survey Results</h1>
        <p>{surveyResult}</p>
      </div>
    );
  };
  
export default SurveyResults;