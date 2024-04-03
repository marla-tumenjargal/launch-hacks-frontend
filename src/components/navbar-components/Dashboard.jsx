import React from "react";
import "../styles/style.css";

import { BottomHeroOne } from "../../assets"
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
            <h1 className="subtitle" style={{ marginBottom: '30px' }}> Website Title </h1>
            <p className="description" style={{ marginBottom: '50px' }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta illum tempora,
              quo explicabo aperiam natus dolorum aliquid debitis eos ratione officiis vel,
              quidem tempore quam ea perferendis autem hic voluptatibus eligendi.
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
        <div className="image-content">
          <img src={BottomHeroOne} alt="Hero-image" />
        </div>
      </div>


      <div className="padding" />

      <div className="additional-text-one hero-container">
        <div className="hero-content">
          <div className="text-content">
            <h2> Trivia Questions </h2>
            <p className="description-1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
              ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              aboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className="button-container-hero-2">
              <button onClick={handleClickRegister} className="styled-button-three" style={{ marginRight: '10px' }}>
                MCQ
              </button>
              <button onClick={handleClickLogIn} className="styled-button-three" style={{ marginRight: '10px' }}>
                Free Response
              </button>
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
            <h1>
              Sed ut perspiciatis unde omnis iste natus
            </h1>
            <p>
              qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
            </p>
          </div>
        </div>
        <div className="image-content">
          <img src={BottomHeroOne} alt="Hero-image" />
        </div>
      </div>

      {/*Second Landing */}
      <div className="hero-container">
        <div className="image-content">
          <img src={BottomHeroOne} alt="Hero-image" />
        </div>
        <div className="hero-content">
          <div className="text-content">
            <h1>Csed ut perspiciatis unde omnis iste natus</h1>
            <p>
              {" "}
              qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
              {" "}
            </p>
          </div>
        </div>
      </div>

      {/* Third Landing */}
      <div className="hero-container">
        <div className="hero-content">
          <div className="text-content">
            <h1>Keep a record of important events with annotations</h1>
            <p>
              Take timestamped notes right alongside your transcript to keep
              track of the most important sections for future reference.
            </p>
          </div>
        </div>
        <div className="image-content">
          <img src={BottomHeroOne} alt="Hero-image" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;