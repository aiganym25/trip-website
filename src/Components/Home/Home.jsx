import React from "react";
import "./home.scss";
const Home = () => {
  return (
    <section className="home">
      <div className="secContainer container">
        <div className="homeText">
          <h1 className="title">Plan Your Trip With Travel Dot</h1>
          <p className="subTitle">
            Travel to your favoirite city with respectful of the environment
          </p>
          <button className="btn">Explore now</button>
        </div>
        <div className="homeCard grid">
          <div className="locationDiv">
            <label htmlFor="location"> Location</label>
            <input type="text" placeholder="Dream Destination"></input>
          </div>
          <div className="distDiv">
            <label htmlFor="distance"> Distance</label>
            <input type="text" placeholder="11/Meters"></input>
          </div>
          <div className="priceDiv">
            <label htmlFor="price"> Price Range</label>
            <input type="text" placeholder="$140-$500"></input>
          </div>
          <button className="btn">Search</button>
        </div>
      </div>
    </section>
  );
};

export default Home;
