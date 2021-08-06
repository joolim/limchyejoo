import React from "react";
import { Link } from "react-router-dom";
// import BannerImage from "../assets/pizza.jpeg";
import BannerImage2 from "../assets/nus01.png";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage2})` }}>
      <div className="headerContainer">
        <h1> de.Al Trader </h1>
        <p>Algo Trading with Quantconnect</p>
        <br></br>
        <Link to="/menu">
          <button> PLACE ORDER </button>
        </Link>
        <Link to="/broker">
          <button> BROKERAGES </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
