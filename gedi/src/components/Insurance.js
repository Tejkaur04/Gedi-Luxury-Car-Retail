import React from 'react';
import './Insurance.css'; // Import your CSS file for styles
import car from './car-removebg-preview.png'; 
import tick from './green-tick-removebg-preview.png';
function Insurance() {
    return (
        <div className="insurance-section">
            {/* Insurance Form Section */}
            <div className="insurance">
                <div className="form-container">
                    <br />
                    <span className="headline">Car insurance starting from <b>₹ 6/day*</b></span><br />
                    <span className="subline">Car No. >> Select Plan >> Policy Issued</span><br />
                    <div className="input-container">
                        <input type="text" id="car-number" className="input-box" placeholder="Your car number ex DL-12-AB-2345" />
                    </div>
                    <button className="submit-button">Check Prices</button><br /><br />
                    <a href="#">Brand new car?</a><br />
                    <p className="terms">By clicking, I agree to <a href="#">*terms & conditions</a> and <a href="#">policy</a>.</p>
                </div>
                <div className="car-image">
                    <img src={car} className="car-img" alt="Car" />
                </div>
            </div>
            
            {/* Insurance Plans Section */}
            <div className="plan">
                <div className="plans-container"><br />
                    <p>Top Car Insurance Plans</p><br />

                    {/* Insurance Plan 1 */}
                    <InsurancePlan 
                        logo="HDFC_ERGO_Logo-removebg-preview.png"
                        name="HDFC ERGO Car Insurance"
                        garages="6,800"
                        claims="89%"
                        zeroDep="UNLIMITED"
                        price="₹ 2881"
                        features={[
                            "Maximum Cashless Garages",
                            "Night Vehicle Repairs",
                            "24x7 Roadside Assistance"
                        ]}
                    />
                    
                    {/* Insurance Plan 2 */}
                    <InsurancePlan 
                        logo="https://cms-img.coverfox.com/United-India-Insurance.jpg"
                        name="United India Car Insurance"
                        garages="63,100"
                        claims="95%"
                        zeroDep="UNLIMITED"
                        price="₹ 2396"
                        features={[
                            "Towing Assistance (For Accidents)",
                            "Coverage Outside India",
                            "PSU Provider"
                        ]}
                    />
                    
                    {/* Insurance Plan 3 */}
                    <InsurancePlan 
                        logo="https://windshield-expert.s3.ap-south-1.amazonaws.com/wp-content/uploads/2022/02/02120315/insurance-logo-10.webp"
                        name="ICICI Lombard Car Insurance"
                        garages="5,600"
                        claims="88%"
                        zeroDep="UNLIMITED"
                        price="₹ 2525"
                        features={[
                            "Towing Assistance (Till 50 kms)",
                            "6-Month Repair Warranty",
                            "Quick Claim Settlement"
                        ]}
                    />

                    {/* Add more plans as needed */}
                </div>
            </div>
        </div>
    );
}

function InsurancePlan({ logo, name, garages, claims, zeroDep, price, features }) {
    return (
        <div className="insurance-plan">
            <div className="plan-details">
                <table>
                    <tbody>
                        <tr>
                            <td className="logo-cell">
                                <img src={logo} className="logo-img" alt={`${name} logo`} /><br />
                                <b>{name}</b>
                            </td>
                            <td className="info-cell">CASHLESS GARAGES<br /><center><b>{garages}</b></center></td>
                            <td className="info-cell">CLAIMS SETTLED<br /><center><b>{claims}</b></center></td>
                            <td className="info-cell">ZERO DEP. CLAIMS<br /><b>{zeroDep}</b></td>
                            <td className="price-cell">
                                <center>Starting From <b>{price}</b></center>
                                <center><button className="submit-button">Check Prices</button></center>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="plan-features">
                <table>
                    <tbody>
                        <tr>
                            <td className="key">Key Feature:</td>
                            {features.map((feature, index) => (
                                <td key={index} className="feature">
                                    <img src={tick} className="feature-icon" alt="tick" /> {feature}
                                </td>
                            ))}
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Insurance;
