import React from "react";
import MultiplePizzas from "../assets/multiplePizzas.jpeg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
          Ho chiak! Ho chiak! Ho chiak! Ho chiak! Ho chiak! Ho chiak! Ho chiak!
          Ho chiak! Ho chiak! Ho chiak! Ho chiak! Ho chiak! Ho chiak! Ho chiak!
          Ho chiak! The quick brown fox jumps over the lazy dog. The quick brown
          fox jumps over the lazy dog. The quick brown fox jumps over the lazy
          dog. The quick brown fox jumps over the lazy dog. The quick brown fox
          jumps over the lazy dog. The quick brown fox jumps over the lazy dog.
          The quick brown fox jumps over the lazy dog.
        </p>
      </div>
    </div>
  );
}

export default About;
