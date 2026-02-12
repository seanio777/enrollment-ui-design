import React, { useState } from 'react';
import './App.css';

function App() {
  const [selectedCollege, setSelectedCollege] = useState("");

  const programs = {
    "College of Engineering and Architecture": ["BS Architecture", "BS Chemical Engineering", "BS Civil Engineering", "BS Computer Engineering", "BS Electrical Engineering", "BS Electronics Engineering", "BS Industrial Engineering", "BS Mechanical Engineering"],
    "College of Computer Studies": ["BS Computer Science", "BS Data Science and Analytics", "BS Entertainment and Multimedia Computing", "BS Information Technology"],
    "College of Business Education": ["BS Accountancy", "BS Accounting Information System", "BS Business Administration", "Financial Management", "Human Resource Management", "Logistics and Supply Chain Management", "Marketing Management"],
    "College of Arts": ["Bachelor of Arts in English Language", "Bachelor of Arts in Political Science"]
  };

  return (
    <div className="container">
      <header>
        <h2>ADEi University Digital Registrar Overhaul</h2>
        <p>Student Enrollment Portal</p>
      </header>

      <form onSubmit={(e) => { e.preventDefault(); alert("Registration Submitted!"); }}>
        
        {/* Section 1: Personal Information */}
        <fieldset>
          <legend>1. Personal Information</legend>
          <div className="grid-name">
            <div>
              <label>First Name</label>
              <input type="text" required placeholder="First Name" />
            </div>
            <div>
              <label>Middle Name</label>
              <input type="text" placeholder="Middle Name" />
            </div>
            <div>
              <label>Last Name</label>
              <input type="text" required placeholder="Last Name" />
            </div>
            <div>
              <label>Suffix</label>
              <input type="text" placeholder="Jr./III" />
            </div>
          </div>

          <div className="grid-3-col">
            <div>
              <label>Date of Birth</label>
              <input type="date" required onKeyDown={(e) => e.preventDefault()} />
            </div>
            <div>
              <label>Gender</label>
              <select required>
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Non-binary">Non-binary</option>
              </select>
            </div>
            <div>
              <label>Nationality</label>
              <select required>
                <option value="">Select Nationality</option>
                <option value="Filipino">Filipino</option>
                <option value="Others">Others</option>
              </select>
            </div>
          </div>
        </fieldset>

        {/* Section 2: Contact Details Section */}
        <fieldset>
          <legend>2. Contact Details Section</legend>
          <div className="grid-3-col">
            <div>
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" required placeholder="example@email.com" /> [cite: 47, 124]
            </div>
            <div>
              <label htmlFor="mobile">Mobile Number</label>
              <input type="tel" id="mobile" required placeholder="09XXXXXXXXX" /> [cite: 48, 125]
            </div>
            <div>
              <label htmlFor="landline">Landline</label>
              <input type="tel" id="landline" placeholder="8XXX-XXXX" /> [cite: 49, 126]
            </div>
          </div>

          <div className="grid-address">
            <div className="full-width">
              <label>Street Address</label>
              <input type="text" required placeholder="House No., Street, Subdivision" /> [cite: 50, 127]
            </div>
            <div>
              <label>Barangay</label>
              <input type="text" required /> [cite: 50, 127]
            </div>
            <div>
              <label>City</label>
              <input type="text" required /> [cite: 50, 127]
            </div>
            <div>
              <label>Province</label>
              <input type="text" required /> [cite: 50, 127]
            </div>
            <div>
              <label>Zip Code</label>
              <input type="text" required /> [cite: 50, 127]
            </div>
          </div>
        </fieldset>

        {/* Section 3: Academic History Section */}
        <fieldset>
          <legend>3. Academic History Section</legend>
          
          {/* Grade School */}
          <div className="academic-subgroup">
            <h3>Grade School</h3>
            <div className="grid-academic">
              <input type="text" required placeholder="Grade School Name" /> [cite: 52, 129]
              <input type="number" min="1900" max="2026" required placeholder="Year" /> [cite: 53, 130]
              <input type="text" className="full-width" required placeholder="School Address" /> [cite: 55, 129]
            </div>
          </div>

          {/* Junior High School */}
          <div className="academic-subgroup">
            <h3>Junior High School</h3>
            <div className="grid-academic">
              <input type="text" required placeholder="Junior High School Name" /> [cite: 56, 129]
              <input type="number" min="1900" max="2026" required placeholder="Year" /> [cite: 57, 130]
              <input type="text" className="full-width" required placeholder="School Address" /> [cite: 59, 129]
            </div>
          </div>

          {/* Senior High School */}
          <div className="academic-subgroup">
            <h3>Senior High School</h3>
            <div className="grid-academic-shs">
              <input type="text" required placeholder="Senior High School Name" /> [cite: 60, 129]
              <input type="number" min="1900" max="2026" required placeholder="Year" /> [cite: 61, 130]
              <input type="number" step="0.01" required placeholder="GWA (e.g. 1.25)" /> [cite: 62, 131]
              <input type="text" className="full-width" required placeholder="School Address" /> [cite: 63, 129]
            </div>
          </div>
        </fieldset>

        {/* Section 4: Enrollment Choices */}
        <fieldset>
          <legend>4. Enrollment Choices</legend>
          <div className="radio-group">
            <label>Campus:</label>
            <input type="radio" name="campus" value="Manila" required /> Manila
            <input type="radio" name="campus" value="QC" required /> Quezon City
          </div>

          <label>College Department</label>
          <select 
            value={selectedCollege} 
            onChange={(e) => setSelectedCollege(e.target.value)} 
            required
          >
            <option value="">-- Select College --</option>
            {Object.keys(programs).map(c => <option key={c} value={c}>{c}</option>)}
          </select>

          <label>Degree Program</label>
          <select required disabled={!selectedCollege}>
            <option value="">-- Select Program --</option>
            {selectedCollege && programs[selectedCollege].map(p => <option key={p} value={p}>{p}</option>)}
          </select>
        </fieldset>

        <button type="submit">Submit Registration</button>
      </form>
    </div>
  );
}

export default App;