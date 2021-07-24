import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/pizza.jpeg";
import BannerImage2 from "../assets/nus01.png";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage2})` }}>
      <div className="headerContainer">
        <h1> Joo's Pizza </h1>
        <p>Ho Chiak Mama Mia!</p>
        <br></br>
        <Link to="/menu">
          <button> PLACE ORDER </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
