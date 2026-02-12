import React, { useState } from 'react';
import './App.css';

function App() {
  const [academicLevel, setAcademicLevel] = useState("Undergraduate");
  const [selectedCollege, setSelectedCollege] = useState("");
  const [mobile, setMobile] = useState("");

  // Helper to format mobile: +63 XXX-XXX-XXXX
  const handleMobileChange = (e) => {
    let value = e.target.value.replace(/\D/g, ''); // Remove non-digits
    if (value.startsWith('63')) value = value.substring(2);
    
    let formatted = "+63 ";
    if (value.length > 0) formatted += value.substring(0, 3);
    if (value.length >= 4) formatted += '-' + value.substring(3, 6);
    if (value.length >= 7) formatted += '-' + value.substring(6, 10);
    
    setMobile(formatted.trim());
  };

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

      <form onSubmit={(e) => { e.preventDefault(); alert("Registration Submitted Successfully!"); }}>
        <fieldset>
          <legend>1. Personal Information</legend>
          <div className="grid-name">
            <div><label className="required">First Name</label><input type="text" required /></div>
            <div><label>Middle Name</label><input type="text" /></div>
            <div><label className="required">Last Name</label><input type="text" required /></div>
            <div><label>Suffix</label><input type="text" placeholder="e.g. Jr." /></div>
          </div>
          <div className="grid-3-col">
            <div><label className="required">Date of Birth</label><input type="date" required /></div>
            <div>
              <label className="required">Gender</label>
              <select required>
                <option value="">Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <div>
              <label className="required">Nationality</label>
              <select required>
                <option value="">Select</option>
                {nationalities.map(n => <option key={n} value={n}>{n}</option>)}
              </select>
            </div>
          </div>
        </fieldset>

        <fieldset>
          <legend>2. Contact Details</legend>
          <div className="grid-3-col">
            <div><label className="required">Email Address</label><input type="email" placeholder="name@example.com" required /></div>
            <div>
              <label className="required">Mobile Number</label>
              <input 
                type="tel" 
                value={mobile} 
                onChange={handleMobileChange} 
                placeholder="+63 9XX-XXX-XXXX" 
                pattern="^\+63 \d{3}-\d{3}-\d{4}$"
                required 
              />
            </div>
            <div>
              <label>Landline</label>
              <input type="tel" placeholder="(02) 8XXX-XXXX" pattern="^\(?\d{2,3}\)? ?\d{3,4}-?\d{4}$" />
            </div>
          </div>
          <div className="grid-address-detailed">
            <div className="full-width"><label className="required">Street Address</label><input type="text" required /></div>
            <div><label className="required">Barangay</label><input type="text" required /></div>
            <div><label className="required">City</label><input type="text" required /></div>
            <div><label className="required">Province</label><input type="text" required /></div>
            <div><label className="required">Zip Code</label><input type="text" maxLength="4" pattern="\d{4}" required /></div>
          </div>
        </fieldset>

        <fieldset>
          <legend>3. Academic History</legend>
          <div className="academic-group">
            <label className="required">Grade School</label>
            <div className="academic-row">
              <input type="text" placeholder="School Name" required />
              <input type="number" placeholder="Year Graduated" min="1900" max="2026" required />
            </div>
            <input type="text" placeholder="Grade School Address" className="full-width-input" required />
          </div>

          <div className="academic-group">
            <label className="required">Junior High School</label>
            <div className="academic-row">
              <input type="text" placeholder="School Name" required />
              <input type="number" placeholder="Year Graduated" min="1900" max="2026" required />
            </div>
            <input type="text" placeholder="Junior High School Address" className="full-width-input" required />
          </div>

          <div className="academic-group">
            <label className="required">Senior High School</label>
            <div className="academic-row-shs">
              <input type="text" placeholder="School Name" required />
              <input type="number" placeholder="Year Graduated" min="1900" max="2026" required />
              <input type="number" step="0.01" placeholder="Grade Average" required />
            </div>
            <input type="text" placeholder="Senior High School Address" className="full-width-input" required />
          </div>
        </fieldset>

        <fieldset>
          <legend>4. Enrollment Choices</legend>
          <div className="grid-3-col">
            <div className="control-group">
              <label className="main-label required">Academic Level</label>
              <div className="radio-box">
                <label className="radio-label">
                  <input type="radio" name="level" value="Undergraduate" checked={academicLevel === "Undergraduate"} onChange={() => {setAcademicLevel("Undergraduate"); setSelectedCollege("");}} required /> Undergraduate
                </label>
                <label className="radio-label">
                  <input type="radio" name="level" value="Graduate" checked={academicLevel === "Graduate"} onChange={() => {setAcademicLevel("Graduate"); setSelectedCollege("");}} /> Graduate
                </label>
              </div>
            </div>

            <div className="control-group">
              <label className="main-label required">Semester</label>
              <div className="radio-box">
                <label className="radio-label"><input type="radio" name="sem" value="1st" required /> 1st</label>
                <label className="radio-label"><input type="radio" name="sem" value="2nd" /> 2nd</label>
                <label className="radio-label"><input type="radio" name="sem" value="Summer" /> Summer</label>
              </div>
            </div>

            <div className="control-group">
              <label className="main-label required">Campus</label>
              <div className="radio-box">
                <label className="radio-label"><input type="radio" name="campus" value="Manila" required /> Manila</label>
                <label className="radio-label"><input type="radio" name="campus" value="QC" /> QC</label>
              </div>
            </div>
          </div>

          <div className="dropdown-section">
            <label className="main-label required">College Department</label>
            <select value={selectedCollege} onChange={(e) => setSelectedCollege(e.target.value)} required>
              <option value="">-- Select College --</option>
              {Object.keys(enrollmentData[academicLevel]).map(college => (
                <option key={college} value={college}>{college}</option>
              ))}
            </select>

            <label className="main-label required">Degree Program</label>
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