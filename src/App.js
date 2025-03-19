import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import NoticesAndUpdatesSection from "./components/NoticesAndUpdatesSection";
import Footer from "./components/Footer";
import RegistrationPage from "./components/RegistrationPage"; 
import AppointmentAvailability from "./components/AppointmentAvailability";
import TrackApplication from "./components/TrackApplication";
import RenewPassport from "./components/RenewPassport";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Navigation />
        <Routes>
          <Route path="/" element={
            <>
              <HeroSection />
              <ServicesSection />
              <NoticesAndUpdatesSection />
            </>
          } />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/check-appointment" element={<AppointmentAvailability />} />
          <Route path="/track-application" element={<TrackApplication />} />
          <Route path="/renew-passport" element={<RenewPassport />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
