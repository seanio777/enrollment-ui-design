import React, { useState } from 'react';
import './App.css';

function App() {
  // State for dynamic dropdown dependency
  const [selectedCollege, setSelectedCollege] = useState("");

  // Comprehensive Nationality List
  const nationalities = [
    "Filipino", "Afghan", "Albanian", "Algerian", "American", "Andorran", "Angolan", "Antiguans", "Argentinean", 
    "Armenian", "Australian", "Austrian", "Azerbaijani", "Bahamian", "Bahraini", "Bangladeshi", "Barbadian", 
    "Barbudans", "Batswana", "Belarusian", "Belgian", "Belizean", "Beninese", "Bhutanese", "Bolivian", "Bosnian", 
    "Brazilian", "British", "Bruneian", "Bulgarian", "Burkinabe", "Burmese", "Burundian", "Cambodian", "Cameroonian", 
    "Canadian", "Cape Verdean", "Central African", "Chadian", "Chilean", "Chinese", "Colombian", "Comoran", 
    "Congolese", "Costa Rican", "Croatian", "Cuban", "Cypriot", "Czech", "Danish", "Djibouti", "Dominican", 
    "Dutch", "East Timorese", "Ecuadorean", "Egyptian", "Emirian", "Equatorial Guinean", "Eritrean", "Estonian", 
    "Ethiopian", "Fijian", "Finnish", "French", "Gabonese", "Gambian", "Georgian", "German", "Ghanaian", "Greek", 
    "Grenadian", "Guatemalan", "Guinea-Bissauan", "Guinean", "Guyanese", "Haitian", "Herzegovinian", "Honduran", 
    "Hungarian", "I-Kiribati", "Icelander", "Indian", "Indonesian", "Iranian", "Iraqi", "Irish", "Israeli", 
    "Italian", "Ivorian", "Jamaican", "Japanese", "Jordanian", "Kazakhstani", "Kenyan", "Kittian and Nevisian", 
    "Kuwaiti", "Kyrgyz", "Laotian", "Latvian", "Lebanese", "Liberian", "Libyan", "Liechtensteiner", "Lithuanian", 
    "Luxembourger", "Macedonian", "Malagasy", "Malawian", "Malaysian", "Maldivian", "Malian", "Maltese", 
    "Marshallese", "Mauritanian", "Mauritian", "Mexican", "Micronesian", "Moldovan", "Monacan", "Mongolian", 
    "Moroccan", "Mosotho", "Motswana", "Mozambican", "Namibian", "Nauruan", "Nepalese", "New Zealander", 
    "Ni-Vanuatu", "Nicaraguan", "Nigerian", "Nigerien", "North Korean", "Northern Irish", "Norwegian", "Omani", 
    "Pakistani", "Palauan", "Panamanian", "Papua New Guinean", "Paraguayan", "Peruvian", "Polish", "Portuguese", 
    "Qatari", "Romanian", "Russian", "Rwandan", "Saint Lucian", "Salvadoran", "Samoan", "San Marinese", 
    "Sao Tomean", "Saudi", "Scottish", "Senegalese", "Serbian", "Seychellois", "Sierra Leonean", "Singaporean", 
    "Slovakian", "Slovenian", "Solomon Islander", "Somali", "South African", "South Korean", "Spanish", "Sri Lankan", 
    "Sudanese", "Surinamer", "Swazi", "Swedish", "Swiss", "Syrian", "Taiwanese", "Tajik", "Tanzanian", "Thai", 
    "Togolese", "Tongan", "Trinidadian or Tobagonian", "Tunisian", "Turkish", "Tuvaluan", "Ugandan", "Ukrainian", 
    "Uruguayan", "Uzbekistani", "Venezuelan", "Vietnamese", "Welsh", "Yemenite", "Zambian", "Zimbabwean"
  ];

  // College and Program Data
  const programs = {
    "College of Engineering and Architecture": ["BS Architecture", "BS Chemical Engineering", "BS Civil Engineering", "BS Computer Engineering", "BS Electrical Engineering", "BS Electronics Engineering", "BS Industrial Engineering", "BS Mechanical Engineering"],
    "College of Computer Studies": ["BS Computer Science", "BS Data Science and Analytics", "BS Entertainment and Multimedia Computing", "BS Information Technology"],
    "College of Business Education": ["BS Accountancy", "BS Accounting Information System", "BS Business Administration", "Financial Management", "Human Resource Management", "Logistics and Supply Chain Management", "Marketing Management"],
    "College of Arts": ["Bachelor of Arts in English Language", "Bachelor of Arts in Political Science"]
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Student Registration Submitted Successfully!");
  };

  return (
    <div className="container">
      <header>
        <h2>ADEi University Digital Registrar Overhaul</h2>
        <p>Student Enrollment Portal</p>
      </header>

      <form onSubmit={handleSubmit}>
        
        {/* Section 1: Personal Information */}
        <fieldset>
          <legend>1. Personal Information</legend>
          <div className="grid-name">
            <div><label>First Name</label><input type="text" required placeholder="First Name" /></div>
            <div><label>Middle Name</label><input type="text" placeholder="Middle Name" /></div>
            <div><label>Last Name</label><input type="text" required placeholder="Last Name" /></div>
            <div><label>Suffix</label><input type="text" placeholder="e.g. Jr/III" /></div>
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
                <option value="">-- Select Nationality --</option>
                {nationalities.map(n => <option key={n} value={n}>{n}</option>)}
              </select>
            </div>
          </div>
          <div>
            <label>Religion</label>
            <input type="text" required placeholder="Religion" />
          </div>
        </fieldset>

        {/* Section 2: Contact Details */}
        <fieldset>
          <legend>2. Contact Details Section</legend>
          <div className="grid-3-col">
            <div><label>Email Address</label><input type="email" required placeholder="email@example.com" /></div>
            <div><label>Mobile Number</label><input type="tel" required placeholder="09XXXXXXXXX" /></div>
            <div><label>Landline</label><input type="tel" placeholder="8XXX-XXXX" /></div>
          </div>
          <div className="grid-address">
            <div className="full-width"><label>Street Address</label><input type="text" required placeholder="House No., Street" /></div>
            <div><label>Barangay</label><input type="text" required /></div>
            <div><label>City</label><input type="text" required /></div>
            <div><label>Province</label><input type="text" required /></div>
            <div><label>Zip Code</label><input type="text" required /></div>
          </div>
        </fieldset>

        {/* Section 3: Academic History */}
        <fieldset>
          <legend>3. Academic History Section</legend>
          <div className="academic-subgroup">
            <h3>Grade School</h3>
            <div className="grid-academic">
              <input type="text" required placeholder="School Name" />
              <input type="number" min="1900" max="2026" required placeholder="Year" />
              <input type="text" className="full-width" required placeholder="Address" />
            </div>
          </div>
          <div className="academic-subgroup">
            <h3>Junior High School</h3>
            <div className="grid-academic">
              <input type="text" required placeholder="School Name" />
              <input type="number" min="1900" max="2026" required placeholder="Year" />
              <input type="text" className="full-width" required placeholder="Address" />
            </div>
          </div>
          <div className="academic-subgroup">
            <h3>Senior High School</h3>
            <div className="grid-academic-shs">
              <input type="text" required placeholder="School Name" />
              <input type="number" min="1900" max="2026" required placeholder="Year" />
              <input type="number" step="0.01" required placeholder="GWA" />
              <input type="text" className="full-width" required placeholder="Address" />
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