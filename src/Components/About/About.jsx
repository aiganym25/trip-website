import React from "react";
import "./about.scss";

import img8 from "../../assets/img8.jpg";
import img9 from "../../assets/img9.jpg";

import video from "../../assets/video-ocean.mp4";
const About = () => {
  return (
    <section className="about section">
      <div className="secContaier">
        <h3 className="title">Why Hikings?</h3>

        <div className="mainContent container grid">
          <div className="singleItem">
            <img src={img8} alt="Image Name"></img>
            <h3>100+ Mountains</h3>
            <p>
              Building stronger muscles and bones. Improving your sense of
              balance. Improving your heart health. Decreasing the risk of
              certain respiratory problems.
            </p>
          </div>
          <div className="singleItem">
            <img src={img9} alt="Image Name"></img>
            <h3>1000+ Hikings</h3>
            <p>
              Building stronger muscles and bones. Improving your sense of
              balance. Improving your heart health. Decreasing the risk of
              certain respiratory problems.
            </p>
          </div>
        </div>

        <div className="videoCard container">
          <div className="cardContent grid">
            
            <div className="cardText">
              <h2>Wonderful House experience there</h2>
              <p>
                The adventure subranking is based on an equally weighted average
                of scores from five country
              </p>
            </div>

            <div className="cardVideo">
              <video src= {video} autoPlay loop muted></video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
