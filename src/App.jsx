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

      <form onSubmit={(e) => { e.preventDefault(); alert("Registration Submitted Successfully!"); }}>
        
        {/* Section 1: Personal Information Section */}
        <fieldset>
          <legend>1. Personal Information</legend>
          
          {/* Name Grid: Requirement 140 - 4 columns for Name */}
          <div className="grid-name">
            <div>
              <label htmlFor="firstName">First Name</label>
              <input type="text" id="firstName" required placeholder="First Name" />
            </div>
            <div>
              <label htmlFor="middleName">Middle Name</label>
              <input type="text" id="middleName" placeholder="Middle Name" />
            </div>
            <div>
              <label htmlFor="lastName">Last Name</label>
              <input type="text" id="lastName" required placeholder="Last Name" />
            </div>
            <div>
              <label htmlFor="suffix">Suffix</label>
              <input type="text" id="suffix" placeholder="e.g., Jr., III" />
            </div>
          </div>

          <div className="grid-3-col">
            {/* Date of Birth: Requirement 119 - Click-only calendar */}
            <div>
              <label htmlFor="dob">Date of Birth</label>
              <input 
                type="date" 
                id="dob" 
                required 
                onKeyDown={(e) => e.preventDefault()} 
              />
            </div>

            {/* Gender: Requirement 120 - Dropdown */}
            <div>
              <label htmlFor="gender">Gender</label>
              <select id="gender" required>
                <option value="">-- Select Gender --</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Non-binary">Non-binary</option>
              </select>
            </div>

            {/* Nationality: Requirement 121 - Dropdown */}
            <div>
              <label htmlFor="nationality">Nationality</label>
              <select id="nationality" required>
                <option value="">-- Select Nationality --</option>
                <option value="Filipino">Filipino</option>
                <option value="American">American</option>
                <option value="Chinese">Chinese</option>
                <option value="Others">Others</option>
              </select>
            </div>
          </div>

          {/* Religion: Requirement 122 - Boxes */}
          <div>
            <label htmlFor="religion">Religion</label>
            <input type="text" id="religion" required placeholder="Enter Religion" />
          </div>
        </fieldset>

        {/* Section 2: Contact Details */}
        <fieldset>
          <legend>2. Contact Details Section</legend>
          <div className="grid-3-col">
            <div>
              <label>Email Address</label>
              <input type="email" required placeholder="example@email.com" />
            </div>
            <div>
              <label>Mobile Number</label>
              <input type="tel" required placeholder="09XXXXXXXXX" />
            </div>
            <div>
              <label>Landline</label>
              <input type="tel" placeholder="8XXX-XXXX" />
            </div>
          </div>
          <div className="grid-address">
            <div className="full-width">
              <label>Street Address</label>
              <input type="text" required placeholder="House No., Street, Subdivision" />
            </div>
            <div>
              <label>Barangay</label>
              <input type="text" required placeholder="Barangay" />
            </div>
            <div>
              <label>City</label>
              <input type="text" required placeholder="City" />
            </div>
            <div>
              <label>Province</label>
              <input type="text" required placeholder="Province" />
            </div>
            <div>
              <label>Zip Code</label>
              <input type="text" required placeholder="Zip Code" />
            </div>
          </div>
        </fieldset>

        {/* Section 3: Academic History */}
        <fieldset>
          <legend>3. Academic History Section</legend>
          <div className="academic-subgroup">
            <h3>Grade School</h3>
            <div className="grid-academic">
              <input type="text" required placeholder="Grade School Name" />
              <input type="number" min="1900" max="2026" required placeholder="Year Graduated" />
              <input type="text" className="full-width" required placeholder="School Address" />
            </div>
          </div>

          <div className="academic-subgroup">
            <h3>Junior High School</h3>
            <div className="grid-academic">
              <input type="text" required placeholder="Junior High School Name" />
              <input type="number" min="1900" max="2026" required placeholder="Year Graduated" />
              <input type="text" className="full-width" required placeholder="School Address" />
            </div>
          </div>

          <div className="academic-subgroup">
            <h3>Senior High School</h3>
            <div className="grid-academic-shs">
              <input type="text" required placeholder="Senior High School Name" />
              <input type="number" min="1900" max="2026" required placeholder="Year Graduated" />
              <input type="number" step="0.01" required placeholder="Grade Average (e.g. 1.25)" />
              <input type="text" className="full-width" required placeholder="School Address" />
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
          <select value={selectedCollege} onChange={(e) => setSelectedCollege(e.target.value)} required>
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