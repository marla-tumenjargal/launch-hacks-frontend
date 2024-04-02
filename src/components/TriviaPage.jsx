import React, { useState } from 'react';
import './style.css';
import MCQuestion from './question-types/MCQuestion'; 
const Contact = () => {
  const [showPopup, setShowPopup] = useState(false);
  const exampleAnswers = ["None. They'll just beat the room for being black.", "about 25 I dont really know lel", "An infinite amount, they're all too short", "1 you stupid idiot"]


  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div>
      <div className="hero-container">
        <div className="hero-content-contact">
          <div className="text-content">
            <h1 className="subtitle" style={{ marginBottom: '30px' }}> Start your geographic trivia quiz! </h1>
            <p className="description" style={{ marginBottom: '50px' }}>
              Descriptive Text on the Quiz: Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta illum tempora,
              quo explicabo aperiam natus dolorum aliquid debitis eos ratione officiis vel,
              quidem tempore quam ea perferendis autem hic voluptatibus eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta illum tempora,
              quo explicabo aperiam natus dolorum aliquid debitis eos ratione officiis vel,
              quidem tempore quam ea perferendis autem hic voluptatibus eligendi. 
            </p>

            <div className="button-container-hero">
              <button onClick={() => setShowPopup(true)} className="styled-button-one" style={{ marginRight: '10px' }}>
                Start a trivia quiz!
              </button>
            </div>
          </div>
        </div>
      </div>

      {showPopup && (
          <div className="popup-content">
          <MCQuestion question="How many cops does it take to change a light bulb?" answer="None. They'll just beat the room for being black." answers={exampleAnswers}/>
          </div>
      )}
    </div>
  );
}

export default Contact;
