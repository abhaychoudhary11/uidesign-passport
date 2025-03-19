import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ServicesSection.css';

const ServicesSection = () => {
  const navigate = useNavigate(); // ✅ Hook for navigation

  return (
    <section className="services-section">
      <h2>Our Services</h2>
      <div className="services-grid">
        <div className="service-card">
          <h3>Apply for Passport</h3>
          <p>Start your passport application process online.</p>
        </div>
        <div className="service-card">
          <h3>Track Application</h3>
          <p>Check the status of your passport application.</p>
        </div>
        <div className="service-card" onClick={() => navigate("/renew-passport")} style={{ cursor: "pointer" }}> 
          <h3>Re-New Passport</h3>
          <p>Schedule or reschedule your passport appointment.</p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
