import React, { useState } from "react";
import "./AppointmentAvailability.css";

const AppointmentAvailability = () => {
  const [selectedOffice, setSelectedOffice] = useState("");
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(false);

  const passportOffices = [
    "Ujjain",
    "Indore",
    "Bhopal",
    "Mumbai",
    "Delhi",
    "Pune",
    "Jabalpur",
    "Ahmedabad",
  ];

  const sampleAppointments = {
    "Ujjain": ["10:00 AM - 10:30 AM", "2:00 PM - 2:30 PM"],
    Indore: ["11:30 AM - 12:00 PM", "3:00 PM - 3:30 PM"],
    Bhopal: ["9:00 AM - 9:30 AM", "1:30 PM - 2:00 PM"],
    Mumbai: ["10:30 AM - 11:00 AM", "4:00 PM - 4:30 PM"],
    Delhi: ["9:30 AM - 10:00 AM", "2:30 PM - 3:00 PM"],
    Pune: ["10:15 AM - 10:45 AM", "3:15 PM - 3:45 PM"],
    Jabalpur: ["11:00 AM - 11:30 AM", "5:00 PM - 5:30 PM"],
    Ahmedabad: ["12:00 PM - 12:30 PM", "4:30 PM - 5:00 PM"],
  };

  const checkAvailability = () => {
    setLoading(true);

    setTimeout(() => {
      setAppointments(sampleAppointments[selectedOffice] || []);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="appointment-container">
      <h2>Check Appointment Availability</h2>
      <p>Select your preferred passport office to check available slots.</p>

      <div className="form-group">
        <label>Passport Office *</label>
        <select
          value={selectedOffice}
          onChange={(e) => setSelectedOffice(e.target.value)}
          required
        >
          <option value="">Select ---</option>
          {passportOffices.map((office, index) => (
            <option key={index} value={office}>
              {office}
            </option>
          ))}
        </select>
      </div>

      <button className="check-button" onClick={checkAvailability} disabled={!selectedOffice}>
        Check Availability
      </button>

      {loading && <p className="loading-text">Checking availability...</p>}

      {appointments.length > 0 && !loading && (
        <div className="appointment-results">
          <h3>Available Slots:</h3>
          <ul>
            {appointments.map((slot, index) => (
              <li key={index}>{slot}</li>
            ))}
          </ul>
        </div>
      )}

      {appointments.length === 0 && !loading && selectedOffice && (
        <p className="no-slots">No available slots for {selectedOffice}.</p>
      )}
    </div>
  );
};

export default AppointmentAvailability;
