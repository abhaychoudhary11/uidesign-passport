import React from "react";
import { useNavigate } from "react-router-dom";
import Slider from 'react-slick';
import './HeroSection.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroSection = () => {
  const navigate = useNavigate();

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-options">
          <button 
            className="cta-button" 
            style={{ backgroundColor: "#db2c2c", color: "white" }}
            onClick={() => navigate("/register")}
          >
            <i className="fas fa-user-plus"></i> New User Registration
          </button>
          <button className="cta-button" style={{ backgroundColor: "#4CAF50", color: "white" }}>
            <i className="fas fa-lock"></i> Existing User Login
          </button>
          <button 
            className="cta-button" 
            style={{ backgroundColor: "#009688", color: "white" }} 
            onClick={() => navigate("/check-appointment")}
          >
            <i className="fas fa-calendar-check"></i> Check Appointment Availability
          </button>
          <button 
            className="cta-button" 
            style={{ backgroundColor: "#d28808", color: "white" }} 
            onClick={() => navigate("/track-application")}  
          >
            <i className="fas fa-file-alt"></i> Track Application Status
          </button>
        </div>

        <div className="slider-container">
          <Slider {...sliderSettings}>
            <div>
              <img src="https://www.passportindia.gov.in/AppOnlineProject/images/5years/slide8.JPG" alt="Ad 1" className="slider-image" />
            </div>
            <div>
              <img src="https://www.passportindia.gov.in/AppOnlineProject/images/5years/slide5.JPG" alt="Ad 2" className="slider-image" />
            </div>
            <div>
              <img src="https://www.passportindia.gov.in/AppOnlineProject/images/5years/slide7.JPG" alt="Ad 3" className="slider-image" />
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
