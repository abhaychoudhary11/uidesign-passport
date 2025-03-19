import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./TrackApplication.css";

const TrackApplication = () => {
  const navigate = useNavigate();
  const [applicationType, setApplicationType] = useState("");
  const [fileNumber, setFileNumber] = useState("");
  const [dob, setDob] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Tracking Application for:\nApplication Type: ${applicationType}\nFile Number: ${fileNumber}\nDate of Birth: ${dob}`);
  };

  return (
    <div className="container">
      <h2>Track Application Status</h2>
      <p className="mandatory-text">Fields marked with asterisk (*) are mandatory</p>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Select Application Type *</label>
          <select value={applicationType} onChange={(e) => setApplicationType(e.target.value)} required>
            <option value="">----- Select -----</option>
            <option value="passport">Passport / PCC / IC / GEP</option>
            <option value="rti">RTI</option>
            <option value="diplomatic">Diplomatic / Official Application</option>
            <option value="surrender">Surrender Certificate</option>
            <option value="appeal">Appeal Application</option>
          </select>
        </div>

        <div className="form-group">
          <label>File Number *</label>
          <input
            type="text"
            value={fileNumber}
            onChange={(e) => setFileNumber(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Date of Birth *</label>
          <input
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="track-button">Track Status</button>
      </form>

      <button onClick={() => navigate("/")} className="back-button">Back to Home</button>
    </div>
  );
};

export default TrackApplication;
