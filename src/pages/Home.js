import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/pizza.jpeg";
import BannerImage2 from "../assets/nus01.png";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage2})` }}>
      <div className="headerContainer">
        <h1 style="color:red"> Joo's Pizzeria </h1>
        <p style="color:red">Ho Chiak and Shiok!</p>
        <p style="color:red"> Dine In and Takeway</p>
        <br></br>
        <p style="color:red"> NUS Branch Opening Soon!</p>
        <Link to="/menu">
          <button> ORDER NOW </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
