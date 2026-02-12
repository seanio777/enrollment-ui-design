import React, { useState } from 'react';
import './App.css';

function App() {
  const [academicLevel, setAcademicLevel] = useState("Undergraduate");
  const [selectedCollege, setSelectedCollege] = useState("");

  const nationalities = ["Filipino", "Afghan", "Albanian", "Algerian", "American", "Andorran", "Angolan", "Antiguans", "Argentinean", "Armenian", "Australian", "Austrian", "Azerbaijani", "Bahamian", "Bahraini", "Bangladeshi", "Barbadian", "Barbudans", "Batswana", "Belarusian", "Belgian", "Belizean", "Beninese", "Bhutanese", "Bolivian", "Bosnian", "Brazilian", "British", "Bruneian", "Bulgarian", "Burkinabe", "Burmese", "Burundian", "Cambodian", "Cameroonian", "Canadian", "Cape Verdean", "Central African", "Chadian", "Chilean", "Chinese", "Colombian", "Comoran", "Congolese", "Costa Rican", "Croatian", "Cuban", "Cypriot", "Czech", "Danish", "Djibouti", "Dominican", "Dutch", "East Timorese", "Ecuadorean", "Egyptian", "Emirian", "Equatorial Guinean", "Eritrean", "Estonian", "Ethiopian", "Fijian", "Finnish", "French", "Gabonese", "Gambian", "Georgian", "German", "Ghanaian", "Greek", "Grenadian", "Guatemalan", "Guinea-Bissauan", "Guinean", "Guyanese", "Haitian", "Herzegovinian", "Honduran", "Hungarian", "I-Kiribati", "Icelander", "Indian", "Indonesian", "Iranian", "Iraqi", "Irish", "Israeli", "Italian", "Ivorian", "Jamaican", "Japanese", "Jordanian", "Kazakhstani", "Kenyan", "Kittian and Nevisian", "Kuwaiti", "Kyrgyz", "Laotian", "Latvian", "Lebanese", "Liberian", "Libyan", "Liechtensteiner", "Lithuanian", "Luxembourger", "Macedonian", "Malagasy", "Malawian", "Malaysian", "Maldivian", "Malian", "Maltese", "Marshallese", "Mauritanian", "Mauritian", "Mexican", "Micronesian", "Moldovan", "Monacan", "Mongolian", "Moroccan", "Mosotho", "Motswana", "Mozambican", "Namibian", "Nauruan", "Nepalese", "New Zealander", "Ni-Vanuatu", "Nicaraguan", "Nigerian", "Nigerien", "North Korean", "Northern Irish", "Norwegian", "Omani", "Pakistani", "Palauan", "Panamanian", "Papua New Guinean", "Paraguayan", "Peruvian", "Polish", "Portuguese", "Qatari", "Romanian", "Russian", "Rwandan", "Saint Lucian", "Salvadoran", "Samoan", "San Marinese", "Sao Tomean", "Saudi", "Scottish", "Senegalese", "Serbian", "Seychellois", "Sierra Leonean", "Singaporean", "Slovakian", "Slovenian", "Solomon Islander", "Somali", "South African", "South Korean", "Spanish", "Sri Lankan", "Sudanese", "Surinamer", "Swazi", "Swedish", "Swiss", "Syrian", "Taiwanese", "Tajik", "Tanzanian", "Thai", "Togolese", "Tongan", "Trinidadian or Tobagonian", "Tunisian", "Turkish", "Tuvaluan", "Ugandan", "Ukrainian", "Uruguayan", "Uzbekistani", "Venezuelan", "Vietnamese", "Welsh", "Yemenite", "Zambian", "Zimbabwean"];

  const enrollmentData = {
    Undergraduate: {
      "College of Engineering and Architecture": ["BS Architecture", "BS Chemical Engineering", "BS Civil Engineering", "BS Computer Engineering", "BS Electrical Engineering", "BS Electronics Engineering", "BS Industrial Engineering", "BS Mechanical Engineering"],
      "College of Computer Studies": ["BS Computer Science", "BS Data Science and Analytics", "BS Entertainment and Multimedia Computing", "BS Information Technology"],
      "College of Business Education": ["BS Accountancy", "BS Accounting Information System", "BS Business Administration", "Financial Management", "Human Resource Management", "Logistics and Supply Chain Management", "Marketing Management"],
      "College of Arts": ["Bachelor of Arts in English Language", "Bachelor of Arts in Political Science"]
    },
    Graduate: {
      "Doctorate Degrees": ["Doctor in Information Technology", "Doctor of Engineering with Specialization in Computer Engineering", "Doctor of Philosophy in Computer Science"],
      "Master's Degrees": ["Master in Information Systems", "Master in Information Technology", "Master in Logistics and Supply Chain Management", "Master of Engineering with Specialization in Civil Engineering", "Master of Engineering with Specialization in Computer Engineering", "Master of Engineering with Specialization in Electrical Engineering", "Master of Engineering with Specialization in Electronics Engineering", "Master of Engineering with Specialization in Industrial Engineering", "Master of Engineering with Specialization in Mechanical Engineering", "Master of Science in Computer Science"]
    }
  };

  return (
    <div className="container">
      <header>
        <h2>ADEi University Digital Registrar Overhaul</h2>
        <p>Student Enrollment Portal</p>
      </header>

      <form onSubmit={(e) => { e.preventDefault(); alert("Registration Submitted!"); }}>
        <fieldset>
          <legend>1. Personal Information</legend>
          <div className="grid-name">
            <div><label>First Name</label><input type="text" required /></div>
            <div><label>Middle Name</label><input type="text" /></div>
            <div><label>Last Name</label><input type="text" required /></div>
            <div><label>Suffix</label><input type="text" placeholder="e.g. Jr." /></div>
          </div>
          <div className="grid-3-col">
            <div><label>Date of Birth</label><input type="date" required /></div>
            <div>
              <label>Gender</label>
              <select required>
                <option value="">Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <div>
              <label>Nationality</label>
              <select required>
                {nationalities.map(n => <option key={n} value={n}>{n}</option>)}
              </select>
            </div>
          </div>
        </fieldset>

        <fieldset>
          <legend>2. Contact Details</legend>
          <div className="grid-3-col">
            <div><label>Email</label><input type="email" required /></div>
            <div><label>Mobile</label><input type="tel" required /></div>
            <div><label>Landline</label><input type="tel" /></div>
          </div>
          <div className="grid-address">
            <div className="full-width"><label>Address</label><input type="text" required /></div>
            <div><label>Barangay</label><input type="text" required /></div>
            <div><label>City</label><input type="text" required /></div>
            <div><label>Zip Code</label><input type="text" required /></div>
          </div>
        </fieldset>

        <fieldset>
          <legend>3. Academic History</legend>
          <label>Grade School</label>
          <div className="academic-grid">
            <input type="text" placeholder="School Name" required />
            <input type="number" placeholder="Year Graduated" required />
          </div>
          <label>Senior High School</label>
          <div className="academic-grid-shs">
            <input type="text" placeholder="School Name" required />
            <input type="number" placeholder="Year Graduated" required />
            <input type="number" step="0.01" placeholder="GWA" required />
          </div>
        </fieldset>

        <fieldset>
          <legend>4. Enrollment Choices</legend>
          <div className="grid-3-col">
            <div className="control-group">
              <label className="main-label">Academic Level</label>
              <div className="radio-box">
                <label className="radio-label">
                  <input type="radio" name="level" value="Undergraduate" checked={academicLevel === "Undergraduate"} onChange={() => {setAcademicLevel("Undergraduate"); setSelectedCollege("");}} /> Undergraduate
                </label>
                <label className="radio-label">
                  <input type="radio" name="level" value="Graduate" checked={academicLevel === "Graduate"} onChange={() => {setAcademicLevel("Graduate"); setSelectedCollege("");}} /> Graduate
                </label>
              </div>
            </div>

            <div className="control-group">
              <label className="main-label">Semester</label>
              <div className="radio-box">
                <label className="radio-label"><input type="radio" name="sem" required /> 1st</label>
                <label className="radio-label"><input type="radio" name="sem" /> 2nd</label>
                <label className="radio-label"><input type="radio" name="sem" /> Summer</label>
              </div>
            </div>

            <div className="control-group">
              <label className="main-label">Campus</label>
              <div className="radio-box">
                <label className="radio-label"><input type="radio" name="campus" required /> Manila</label>
                <label className="radio-label"><input type="radio" name="campus" /> QC</label>
              </div>
            </div>
          </div>

          <div className="dropdown-section">
            <label className="main-label">College Department</label>
            <select value={selectedCollege} onChange={(e) => setSelectedCollege(e.target.value)} required>
              <option value="">-- Select College --</option>
              {Object.keys(enrollmentData[academicLevel]).map(college => (
                <option key={college} value={college}>{college}</option>
              ))}
            </select>

            <label className="main-label">Degree Program</label>
            <select required disabled={!selectedCollege}>
              <option value="">-- Select Program --</option>
              {selectedCollege && enrollmentData[academicLevel][selectedCollege].map(prog => (
                <option key={prog} value={prog}>{prog}</option>
              ))}
            </select>
          </div>
        </fieldset>

        <button type="submit" className="submit-btn">Submit Registration</button>
      </form>
    </div>
  );
}

export default App;