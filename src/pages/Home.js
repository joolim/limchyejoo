import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/pizza.jpeg";
import BannerImage2 from "../assets/nus01.png";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage2})` }}>
      <div className="headerContainer">
        <h1> Joo's NUS opening. 5 July 2021 Pizza </h1>
        <p>Ho Chiak and Shiok!</p>
        <br></br>
        <Link to="/menu">
          <button> ORDER NOW </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
