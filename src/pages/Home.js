import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/pizza.jpeg";
import BannerImage2 from "../assets/nus01.png";
import "../styles/Home.css";

function Home() {
  return (
    (
      <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
        <div className="headerContainer">
          <h1> Joo's Pizzeria </h1>
          <p> Ho Chiak and Shiok!</p>
          <p> Dine In and Takeway</p>
          <Link to="/menu">
            <button> ORDER NOW </button>
          </Link>
        </div>
      </div>
    ),
    (
      <div
        className="aboutBottom"
        style={{ backgroundImage: `url(${BannerImage2})` }}
      >
        <div className="headerContainer">
          <h1> NUS Branch </h1>
          <p> Opening Soon!</p>
        </div>
      </div>
    )
  );
}

export default Home;
