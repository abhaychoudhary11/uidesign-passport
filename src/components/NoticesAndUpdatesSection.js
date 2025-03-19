import React from 'react';
import './NoticesAndUpdatesSection.css';

const NoticesAndUpdatesSection = () => {
  return (
    <section className="notices-updates">
      <div className="notices">
        <h2>Notices and Updates</h2>
        <table>
          <thead>
            <tr>
              <th>Latest News</th>
              <th>Circular</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Normal/Tatkaal appointment opening time</td>
              <td>New</td>
            </tr>
            <tr>
              <td>Message from EAM on Passport Seva Divas [English]</td>
              <td>New</td>
            </tr>
            <tr>
              <td>Press release regarding PCC Appointment availability in POPSKs.</td>
              <td>New</td>
            </tr>
            <tr>
              <td>
                For all PSKs under jurisdiction of RPO Vijayawada and Vishakhapatnam, normal appointments booked for 08.06.2022, 15.08.2022 & 22.06.22 have been postponed due to special PCC drive being conducted by RPO. Please refer RPO page for more details.
              </td>
              <td>New</td>
            </tr>
            <tr>
              <td>RFP for selection of implementation agency for Strategic Control Team for Passport Seva Programme</td>
              <td>New</td>
            </tr>
            <tr>
              <td>Applicants can book the appointments to the nearest Operational PSK/POPSK as per the attached schedule (Operational PSK and POPSK List.)</td>
              <td>New</td>
            </tr>
            <tr>
              <td>List of Indian Missions/Post Integrated with Passport Seva System</td>
              <td>New</td>
            </tr>
            <tr>
              <td>Press release regarding temporary Suspension of Operations at PSK Kottayam</td>
              <td>New</td>
            </tr>
            <tr>
              <td>Tender for selection of multiple banks to provide Payment Gateway Services for collection of revenue</td>
              <td>New</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="vertical-parallel-layout">
        <div className="steps-to-apply">
          <h2>Steps to Apply</h2>
          <h3>Online Services</h3>
          <ul>
            <li><a href="https://example.com/ordinary-passport">Ordinary Passport</a></li>
            <li><a href="https://example.com/diplomatic-passport">Diplomatic/Official Passport</a></li>
            <li><a href="https://example.com/police-clearance">Police Clearance Certificate</a></li>
            <li><a href="https://example.com/identity-certificate">Identity Certificate</a></li>
            <li><a href="https://example.com/surrender-certificate">Surrender Certificate</a></li>
            <li><a href="https://example.com/background-verification">Background Verification for GEP</a></li>
            <li><a href="https://example.com/loc-permit">LoC Permit</a></li>
          </ul>
        </div>

        <div className="associated-links">
          <h2>Associated Links</h2>
          <h3>HRM & Training</h3>
          <ul>
            <li><a href="https://example.com/passport-ebook">Passport India E-Book</a></li>
            <li><a href="https://example.com/passport-documentary">Passport Seva Documentary - A Story of Service Transformation</a></li>
            <li><a href="https://example.com/passport-video">Passport Seva Video</a></li>
            <li><a href="https://example.com/photo-gallery">Photo Gallery</a></li>
            <li><a href="https://example.com/passport-patrika">Passport Patrika</a></li>
            <li><a href="https://example.com/citizen-experience">Citizen Experience</a></li>
            <li><a href="https://example.com/awards">Awards and Recognitions</a></li>
            <li><a href="https://example.com/dignitary-feedback">Dignitary Feedback</a></li>
          </ul>
        </div>

        <div className="value-added-services">
          <h2>Value Added Services</h2>
          <ul>
            <li><a href="https://example.com/passport-app">Passport Seva App</a></li>
            <li><a href="https://example.com/passport-police-app">Passport Police App</a></li>
          </ul>
        </div>
      </div>

      <div className="passport-service-index">
        <h2 style={{ color: "red" }}>Passport Service Index  </h2>
        <p>Applications Processed: <strong><mark>291,203</mark></strong></p>
        <p>Passports Issued: <strong><mark>237,776</mark></strong></p>
      </div>

      <div className="case-studies">
        <h3>Case Studies</h3>
        <p>
          <a
            href="https://portal2.passportindia.gov.in/AppOnlineProject/pdf/Jewels.pdf"
            style={{ color: "black" }}
            target="_blank"
            rel="noreferrer"
          >
            21 Jewels of Digital
          </a>
        </p>
      </div>

      <div className="safe-migration">
        <h3>Safe and Legal Migration</h3>
        <p>
          <a
            href="https://www.youtube.com/watch?v=WzJL_23h2DU"
            style={{ color: "black" }}
            target="_blank"
            rel="noreferrer"
          >
            Go Safe Go Trained
          </a>
        </p>
        <p>
          <a
            href="https://portal2.passportindia.gov.in/AppOnlineProject/pdf/Banner_Final.pdf"
            style={{ color: "black" }}
            target="_blank"
            rel="noreferrer"
          >
            Advisory for Indians going on Work Abroad
          </a>
        </p>
      </div>
    </section>
  );
};

export default NoticesAndUpdatesSection;