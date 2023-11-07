import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Survey.css'; 

const Survey = () => {
  // Use the useHistory hook to navigate to the results page
  const navigate = useNavigate();
  const [answers, setAnswers] = useState({
    q1: '',
    q2: '',
    q3: '',
    q4: '',
    q5: '',
    q6: '',
    q7: '',
    q8: '',
    q9: '',
    q10: ''
  });

  // Message that will be used to display survey results
  const [showMessage, setShowMessage] = useState(false);
  // Store Survey Result
  const [surveyResult, setSurveyResult] = useState('');
  
 

  const handleInputChange = (question, answer) => {
    setAnswers({
      ...answers,
      [question]: answer
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the submitted answers, e.g., send them to an API or process them as needed
    console.log('Survey answers submitted:', answers);

    const optionCounts = {
      A: 0,
      B: 0,
      C: 0,
      D: 0,
    };

    for (const question in answers) {
      const answer = answers[question];
      if (answer) {
        optionCounts[answer]++;
      }
    }

    // Find the most selected option letter
  // Find the most selected option letter
  const mostSelectedOption = Object.keys(optionCounts).reduce((a, b) =>
    optionCounts[a] > optionCounts[b] ? a : b
  );
    // Set the Result
  let surveyResult = '';
  switch (mostSelectedOption) {
    case 'A':
      surveyResult = "Based on your interest in scientific subjects, problem-solving skills, and analytical thinking, majors like Physics, Engineering, Computer Science, or Mathematics might be suitable for you.";
      break;
    case 'B':
      surveyResult = "Based on your interest in literature, arts, and creativity, majors like Literature, Fine Arts, Graphic Design, or Creative Writing might be suitable for you.";
      break;
    case 'C':
      surveyResult = "Based on your interest in social studies, humanities, and critical thinking, majors like History, Political Science, Sociology, or Philosophy might be suitable for you.";
      break;
    case 'D':
      surveyResult = "Based on your diverse interests and skills, majors like Liberal Arts, Business Administration, Communications, or Psychology might be suitable for you.";
      break;
    default:
      surveyResult = "Based on your answers, we couldn't determine a suitable major for you. Please consult with a career advisor for more guidance.";
  }

  // Display Survey Results
  setSurveyResult(surveyResult);
  setShowMessage(true);

  // navigate to the results page passing surveyResult as state
  navigate('results', { state: { surveyResult: surveyResult } });
};

  return (
    <div className="survey-container">
      <h1 className="survey-title">College Major Survey</h1>  
      <div className="question-box"> 
      <div className="question">1. What subjects do you enjoy the most in school?</div>
      <div className="options-container">
        <div className={`option ${answers.q1 === 'A' ? 'selected' : ''}`} onClick={() => handleInputChange('q1', 'A')}>A) Science and Math</div>
          <div className={`option ${answers.q1 === 'B' ? 'selected' : ''}`} onClick={() => handleInputChange('q1', 'B')}>B) Literature and Arts</div>
          <div className={`option ${answers.q1 === 'C' ? 'selected' : ''}`} onClick={() => handleInputChange('q1', 'C')}>C) Social Studies and Humanities</div>
          <div className={`option ${answers.q1 === 'D' ? 'selected' : ''}`} onClick={() => handleInputChange('q1', 'D')}>D) I like a mix of different subjects</div>
        </div> 
      </div>

      <div className="question-box">
      <div className="question">2. Which activities do you find most engaging?</div>
      <div className="options-container">        
        <div className={`option ${answers.q2 === 'A' ? 'selected' : ''}`} onClick={() => handleInputChange('q2', 'A')}>A) Solving puzzles and problems</div>
          <div className={`option ${answers.q2 === 'B' ? 'selected' : ''}`} onClick={() => handleInputChange('q2', 'B')}>B) Creating artworks or writing stories</div>
          <div className={`option ${answers.q2 === 'C' ? 'selected' : ''}`} onClick={() => handleInputChange('q2', 'C')}>C) Debating or discussing social issues</div>
          <div className={`option ${answers.q2 === 'D' ? 'selected' : ''}`} onClick={() => handleInputChange('q2', 'D')}>D) Participating in various activities</div>
        </div>
      </div>

      <div className="question-box">
      <div className="question">3. What type of books do you prefer reading?</div>
      <div className="options-container"> 
        <div className={`option ${answers.q3 === 'A' ? 'selected' : ''}`} onClick={() => handleInputChange('q3', 'A')}>A) Science Fiction or Mystery</div>
          <div className={`option ${answers.q3 === 'B' ? 'selected' : ''}`} onClick={() => handleInputChange('q3', 'B')}>B) Fiction and Fantasy</div>
          <div className={`option ${answers.q3 === 'C' ? 'selected' : ''}`} onClick={() => handleInputChange('q3', 'C')}>C) Biographies and History</div>
          <div className={`option ${answers.q3 === 'D' ? 'selected' : ''}`} onClick={() => handleInputChange('q3', 'D')}>D) I read a variety of genres</div>
      </div>
      </div>

      <div className="question-box">
      <div className="question">4. What kind of movies or TV shows do you enjoy?</div>
      <div className="options-container">
        <div className={`option ${answers.q4 === 'A' ? 'selected' : ''}`} onClick={() => handleInputChange('q4', 'A')}>A) Documentaries or Scientific shows</div>
        <div className={`option ${answers.q4 === 'B' ? 'selected' : ''}`} onClick={() => handleInputChange('q4', 'B')}>B) Dramas and Romantic movies</div>
        <div className={`option ${answers.q4 === 'C' ? 'selected' : ''}`} onClick={() => handleInputChange('q4', 'C')}>C) Historical dramas or Political documentaries</div>
        <div className={`option ${answers.q4 === 'D' ? 'selected' : ''}`} onClick={() => handleInputChange('q4', 'D')}>D) Comedy or Action movies</div>
      </div>
      </div>

      <div className="question-box">
      <div className="question">5. What do you like to do in your free time?</div>
      <div className="options-container">
        <div className={`option ${answers.q5 === 'A' ? 'selected' : ''}`} onClick={() => handleInputChange('q5', 'A')}>A) Engage in scientific experiments or programming</div>
        <div className={`option ${answers.q5 === 'B' ? 'selected' : ''}`} onClick={() => handleInputChange('q5', 'B')}>B) Paint, write, or create crafts</div>
        <div className={`option ${answers.q5 === 'C' ? 'selected' : ''}`} onClick={() => handleInputChange('q5', 'C')}>C) Volunteer or participate in social causes</div>
        <div className={`option ${answers.q5 === 'D' ? 'selected' : ''}`} onClick={() => handleInputChange('q5', 'D')}>D) Hang out with friends, try different activities</div>
      </div>
      </div>

      <div className="question-box">
      <div className="question">6. Which career sounds the most appealing?</div>
      <div className="options-container">
        <div className={`option ${answers.q6 === 'A' ? 'selected' : ''}`} onClick={() => handleInputChange('q6', 'A')}>A) Scientist or Engineer</div>
        <div className={`option ${answers.q6 === 'B' ? 'selected' : ''}`} onClick={() => handleInputChange('q6', 'B')}>B) Artist or Writer</div>
        <div className={`option ${answers.q6 === 'C' ? 'selected' : ''}`} onClick={() => handleInputChange('q6', 'C')}>C) Social Worker or Political Analyst</div>
        <div className={`option ${answers.q6 === 'D' ? 'selected' : ''}`} onClick={() => handleInputChange('q6', 'D')}>D) Entrepreneur or Event Planner</div>
      </div>
      </div>

      <div className="question-box">
      <div className="question">7. What do you value the most in a job?</div>
      <div className="options-container">
        <div className={`option ${answers.q7 === 'A' ? 'selected' : ''}`} onClick={() => handleInputChange('q7', 'A')}>A) Problem-solving and innovation</div>
        <div className={`option ${answers.q7 === 'B' ? 'selected' : ''}`} onClick={() => handleInputChange('q7', 'B')}>B) Creativity and self-expression</div>
        <div className={`option ${answers.q7 === 'C' ? 'selected' : ''}`} onClick={() => handleInputChange('q7', 'C')}>C) Making a difference in people's lives</div>
        <div className={`option ${answers.q7 === 'D' ? 'selected' : ''}`} onClick={() => handleInputChange('q7', 'D')}>D) Flexibility and social interactions</div>
        </div>
      </div>

      <div className="question-box">
      <div className="question">8. Which historical figure do you admire the most?</div>
      <div className="options-container">
        <div className={`option ${answers.q8 === 'A' ? 'selected' : ''}`} onClick={() => handleInputChange('q8', 'A')}>A) Albert Einstein</div>
        <div className={`option ${answers.q8 === 'B' ? 'selected' : ''}`} onClick={() => handleInputChange('q8', 'B')}>B) Leonardo da Vinci</div>
        <div className={`option ${answers.q8 === 'C' ? 'selected' : ''}`} onClick={() => handleInputChange('q8', 'C')}>C) Mahatma Gandhi</div>
        <div className={`option ${answers.q8 === 'D' ? 'selected' : ''}`} onClick={() => handleInputChange('q8', 'D')}>D) Oprah Winfrey</div>
        </div>
      </div>

      <div className="question-box">
      <div className="question">9.  What do you consider your strongest trait?</div>
      <div className="options-container">
        <div className={`option ${answers.q9 === 'A' ? 'selected' : ''}`} onClick={() => handleInputChange('q9', 'A')}>A) Analytical and Logical Thinking</div>
        <div className={`option ${answers.q9 === 'B' ? 'selected' : ''}`} onClick={() => handleInputChange('q9', 'B')}>B) Imagination and Creativity</div>
        <div className={`option ${answers.q9 === 'C' ? 'selected' : ''}`} onClick={() => handleInputChange('q9', 'C')}>C) Empathy and Compassion</div>
        <div className={`option ${answers.q9 === 'D' ? 'selected' : ''}`} onClick={() => handleInputChange('q9', 'D')}>D) Adaptability and Communication Skills</div>
        </div>
      </div>

      <div className="question-box">
      <div className="question">10. What is your preferred work environment?</div>
      <div className="options-container">
        <div className={`option ${answers.q10 === 'A' ? 'selected' : ''}`} onClick={() => handleInputChange('q10', 'A')}>A) Laboratory or Research Center</div>
        <div className={`option ${answers.q10 === 'B' ? 'selected' : ''}`} onClick={() => handleInputChange('q10', 'B')}>B) Art Studio or Writing Space</div>
        <div className={`option ${answers.q10 === 'C' ? 'selected' : ''}`} onClick={() => handleInputChange('q10', 'C')}>C) Non-profit Organizations or Government Agencies</div>
        <div className={`option ${answers.q10 === 'D' ? 'selected' : ''}`} onClick={() => handleInputChange('q10', 'D')}>D) Dynamic office with various tasks</div>
        </div>
      </div>


      <button className="submit-button" onClick={handleSubmit}>Submit</button>
      {showMessage && ( // Display Survey Results
        <div className="message">   
        {surveyResult}   
          {/* You can also display the user's answers here */}
        </div>
      )}
    </div>
  );
};

export default Survey;
