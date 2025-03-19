import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./RegistrationPage.css";

const RegistrationPage = () => {
    
  const [formData, setFormData] = useState({
    passportOffice: "",
    givenName: "",
    surname: "",
    dob: "",
    email: "",
    loginId: "",
    password: "",
    confirmPassword: "",
    hintQuestion: "",
    hintAnswer: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Registration Successful!");
    navigate("/"); 
  };
  
  return (
    <div className="registration-page">
      <h2>User Registration</h2>
      <p>
        <strong>Important Information:</strong> Passport application can be processed at any PSK/POPSK/PSLK WITHIN INDIA irrespective of your residential address.
      </p>
      <ul>
        <li>
          <a href="#check-availability">Click here to check the appointment availability at all PSK/POPSK/PSLK.</a>
        </li>
        <li>
          <a href="#apply-anywhere">Click here to know more about Apply Anywhere in India scheme for Passport Services.</a>
        </li>
      </ul>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Passport Office *</label>
          <select
            name="passportOffice"
            value={formData.passportOffice}
            onChange={handleChange}
            required
          >
            <option value="">Select ---</option>
            <option value="CPV Delhi">CPV Delhi</option>
            <option value="CPV Delhi">Indore</option>
            <option value="CPV Delhi">Ujjain</option>
            <option value="CPV Delhi">Bhopal</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="form-group">
          <label>Given Name (Max 45 Characters) *</label>
          <input
            type="text"
            name="givenName"
            value={formData.givenName}
            onChange={handleChange}
            maxLength={45}
            required
          />
        </div>

        <div className="form-group">
          <label>Surname (Max 45 Characters)</label>
          <input
            type="text"
            name="surname"
            value={formData.surname}
            onChange={handleChange}
            maxLength={45}
          />
        </div>

        <div className="form-group">
          <label>Date of Birth (DD/MM/YYYY) *</label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Email Id (Max 35 Characters) *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            maxLength={35}
            required
          />
        </div>

        <div className="form-group">
          <label>Login Id *</label>
          <input
            type="text"
            name="loginId"
            value={formData.loginId}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Password *</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Confirm Password *</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Hint Question *</label>
          <select
            name="hintQuestion"
            value={formData.hintQuestion}
            onChange={handleChange}
            required
          >
            <option value="">Select ---</option>
            <option value="What is your pet's name?">What is your pet's name?</option>
            <option value="What is your mother's maiden name?">What is your mother's maiden name?</option>
          </select>
        </div>

        <div className="form-group">
          <label>Hint Answer *</label>
          <input
            type="text"
            name="hintAnswer"
            value={formData.hintAnswer}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-actions">
          <button type="submit">Register</button>
          <button type="button" onClick={() => navigate("/")}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationPage;