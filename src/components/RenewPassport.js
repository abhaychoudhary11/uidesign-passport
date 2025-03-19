import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./RenewPassport.css";

const RenewPassport = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    passportNumber: "",
    dob: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Passport Renewal Request Submitted:\nFull Name: ${formData.fullName}\nPassport Number: ${formData.passportNumber}\nDOB: ${formData.dob}\nEmail: ${formData.email}\nPhone: ${formData.phone}`);
  };

  return (
    <div className="renew-container">
      <div className="renew-box">
        <h2>Renew Your Passport</h2>
        <p className="mandatory-text">Fields marked with * are mandatory</p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Full Name *</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
            />
          </div>

          <div className="form-group">
            <label>Passport Number *</label>
            <input
              type="text"
              name="passportNumber"
              value={formData.passportNumber}
              onChange={handleChange}
              placeholder="Enter passport number"
              required
            />
          </div>

          <div className="form-group">
            <label>Date of Birth *</label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Email *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email address"
              required
            />
          </div>

          <div className="form-group">
            <label>Phone Number *</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter phone number"
              required
            />
          </div>

          <button type="submit" className="renew-button">Submit Renewal Request</button>
        </form>

        <button onClick={() => navigate("/")} className="back-button">Back to Home</button>
      </div>
    </div>
  );
};

export default RenewPassport;