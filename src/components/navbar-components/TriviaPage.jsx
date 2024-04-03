import React, { useState } from 'react';
import "../styles/style.css";
import MCQuestion from '../question-types/MCQuestion';

const Contact = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [fetchedQuestion, setFetchedQuestion] = useState(null);

  const startQuiz = async () => {
    try {
      const response = await fetch("http://localhost:8080/v1/trivia/mcq/hi");
      const data = await response.json();
      console.log("Fetched question:", data);
      setFetchedQuestion(data);
      setShowPopup(true);
    } catch (error) {
      console.error('Error fetching question:', error);
    }
  };

  const handleNextQuestion = async () => {
    try {
      const response = await fetch("http://localhost:8080/v1/trivia/mcq/hi");
      const data = await response.json();
      console.log("Fetched next question:", data);
      setFetchedQuestion(data);
    } catch (error) {
      console.error('Error fetching next question:', error);
    }
  };

  console.log("Fetched question state:", fetchedQuestion);

  return (
    <div>
      <div className="hero-container">
        <div className="hero-content-contact">
          <div className="text-content">
            <h1 className="subtitle" style={{ marginBottom: '30px' }}> Start your geographic trivia quiz! </h1>
            <p className="description" style={{ marginBottom: '50px' }}>
              Test your geography knowledge with this multiple choice quiz!
            </p>

            <div className="button-container-hero">
              {showPopup ? (
                <button onClick={handleNextQuestion} className="styled-button-one" style={{ marginRight: '10px' }}>
                  Next
                </button>
              ) : (
                <button onClick={startQuiz} className="styled-button-one" style={{ marginRight: '10px' }}>
                  Start a trivia quiz!
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {showPopup && fetchedQuestion && (
        <MCQuestion
          question={fetchedQuestion.question}
          answer={fetchedQuestion.correct}
          answers={fetchedQuestion.choices} // Assuming choices is an array of answer choices
          handleClosePopup={handleNextQuestion}
        />
      )}
    </div>
  );
}

export default Contact;
