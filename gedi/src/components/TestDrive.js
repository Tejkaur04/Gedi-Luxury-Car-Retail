// TestDrive.js
import React from 'react';
import './TestDrive.css';

function TestDrive() {
  return (
    <div className="testdrive">
      {/* Header section */}
      <div className="wasted">
        <div className="bluebox"></div>
        <div className="blackbox"></div>
        <div className="blackbox2"></div>
        <div className="gedi"></div>
        <div className="FINAL">
          <p>DRIVE YOUR <span style={{ color: '#f40000' }}>DREAM</span></p>
        </div>
        <div className="wheel"></div>
      </div>

      {/* Form section */}
      <div className="tdbox">
        <p className="tdhead">BOOK A TEST DRIVE</p>
        <p className="tdsubhead">Submit your details, and your preferred dealership will contact you to arrange your test drive.</p>
        
        <form action="#">
          <div className="firstbox">
            <select id="selected" required>
              <option value="">Salutation</option>
              <option value="Dr.">Dr.</option>
              <option value="Mr.">Mr.</option>
              <option value="Ms.">Ms.</option>
              <option value="Mrs.">Mrs.</option>
            </select>
            <input type="text" id="selected" placeholder="Enter First Name" required />
            <input type="text" id="selected" placeholder="Enter Last Name" required />
            <input type="email" id="selected" placeholder="Enter Email" required />
          </div>

          <div className="secondbox">
            <input type="number" id="selected" placeholder="Enter Mobile Number" required />
            <input type="text" id="selected" placeholder="Enter Vehicle Name" required />
            <input type="text" id="selected" placeholder="Enter City" required />
          </div>

          <div>
            <br />
            <input type="checkbox" id="terms" required />
            <label htmlFor="terms"> I agree to Terms & conditions </label><br />
          </div>
          
          <button className="btn btn-primary rounded-0 m-2" type="submit">Submit form</button>
          <br />

          <p className="tdsubhead">Terms and conditions:</p>
          <p className="tdsubhead">*Terms and conditions apply. The model, equipment, and possible vehicle configurations illustrated in this advertisement may differ from the vehicles supplied in the Indian market.</p>
        </form>
      </div>
    </div>
  );
}

export default TestDrive;
