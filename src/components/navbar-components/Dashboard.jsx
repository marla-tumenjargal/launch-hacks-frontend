import React from "react";
import "../styles/style.css";

import { BottomHeroOne, LandingPageOne, LandingPageTwo, LandingPageThree } from "../../assets"
import CenteredProductFeature from "./CenteredProductFeature";

const Dashboard = () => {
  const handleClickRegister = () => {
    return console.log("Button Clicked!");
  };

  const handleClickLogIn = () => {
    return console.log("Log in Clicked");
  };

  return (
    <div>
      <div className="hero-container">
        <div className="hero-content">
          <div className="text-content">
            <h1 className="subtitle" style={{ marginBottom: '30px' }}> GeoQuiz </h1>
            <p className="description" style={{ marginBottom: '50px' }}>
              An AI-powered platform aimed at exploring our world through geography trivia, educational resources, and interactive quizzes. GeoQuiz is an all-in-one platform that provides an invaluable opportunity for students and geography lovers to expand their knowledge on geography. 
            </p>

            {/* <div className="button-container-hero">
              <button onClick={handleClickRegister} className="styled-button-one" style={{ marginRight: '10px' }}>
                Register
              </button>
              <button onClick={handleClickLogIn} className="styled-button-two">
                Log In
              </button>
            </div> */}
          </div>
        </div>
        <div className="image-content" style={{ width: '800px' }}>
    <img src={BottomHeroOne} alt="Hero-image" style={{ borderRadius: '15px', width: '100%', height: 'auto' }} />
</div>


      </div>


      <div className="padding" />

      <div className="additional-text-one hero-container">
        <div className="hero-content">
          <div className="text-content">
            <h2> What We Offer </h2>
            <p className="description-1">
            Multiple Choice Questions (MCQs) provide options for you to choose the correct answer. Free Response Questions (FRQs) allow you to express your understanding in your own words. With Map Pinpoint questions, you can test your geographical knowledge by identifying specific locations on a map. Whether you prefer options, free expression, or map-based challenges, we have something for everyone to engage and learn.
            </p>
            <div className="button-container-hero-2">
              <button onClick={handleClickRegister} className="styled-button-three" style={{ marginRight: '10px' }}>
                MCQ
              </button>
              {/* <button onClick={handleClickLogIn} className="styled-button-three" style={{ marginRight: '10px' }}>
                Free Response
              </button> */}
              <button onClick={handleClickLogIn} className="styled-button-three">
                Map Pin Point
              </button>
            </div>
          </div>
        </div>
      </div>


      <CenteredProductFeature />

      {/*First Landing */}
      <div className="hero-container">
        <div className="hero-content">
          <div className="text-content">
            <h1 className = "subtitle-3">
              Answer geography multiple choice questions 
            </h1>
          </div>
        </div>
        <div className="image-content">
        <img src={LandingPageOne} alt="Hero-image" style={{ borderRadius: '15px', width: '100%', height: 'auto' }} />
        </div>
      </div>

      {/*Second Landing */}
      <div className="hero-container">
        <div className="image-content">
          <img src={LandingPageTwo} alt="Hero-image" />
        </div>
        <div className="hero-content">
          <div className="text-content">
            <h1 className = "subtitle-3">Answer geography map pinpoint questions </h1>
            
          </div>
        </div>
      </div>

      {/* Third Landing */}
      <div className="hero-container">
        <div className="hero-content">
          <div className="text-content">
            <h1 className = "subtitle-3">Access educational resources from National Competitions, Khan Academy, and so much more </h1>
             
          </div>
        </div>
        <div className="image-content">
          <img src={LandingPageThree} alt="Hero-image" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;