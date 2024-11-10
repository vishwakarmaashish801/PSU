import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const LanguageDisplay = () => {
  const location = useLocation();
  const { language } = location.state || { language: 'Not selected' };

  return (
    
    <div className="text-center mt-5">
    {language === "en" ? (
      <>
        <h2>Selected Language: English</h2>
        <p className="fs-4 text-primary">
          You have selected English content.
          <Link to="/assessment" className="btn btn-primary mt-3">Go to Assessment</Link>
        </p>
      </>
    ) : language === "hi" ? (
      <>
        <h2>Selected Language: Hindi</h2>
        <p className="fs-4 text-primary">
          आपने हिंदी सामग्री चुनी है।
          <Link to="/assessment" className="btn btn-primary mt-3">आकलन पर जाएं</Link>
        </p>
      </>
    ) : language === "mr" ? (
      <>
        <h2>Selected Language: Marathi</h2>
        <p className="fs-4 text-primary">
          आपण मराठी सामग्री निवडली आहे.
          <Link to="/assessment" className="btn btn-primary mt-3">मूल्यांकनावर जा</Link>
        </p>
      </>
    ) : language === "gu" ? (
      <>
        <h2>Selected Language: Gujarati</h2>
        <p className="fs-4 text-primary">
          તમે ગુજરાતી સામગ્રી પસંદ કરી છે.
          <Link to="/assessment" className="btn btn-primary mt-3">મુલ્યાંકન પર જાઓ</Link>
        </p>
      </>
    ) : (
      <p className="fs-4 text-danger">Content not found for the selected language.</p>
    )}
  </div> 


  );
};

export default LanguageDisplay;
