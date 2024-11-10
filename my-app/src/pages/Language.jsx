import React from 'react';

import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Language = () => {

    const [language, setLanguage] = useState('');
     const navigate = useNavigate();

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  const handleProceed = () => {

    if (language) {
      navigate('/instruction', { state: { language } });
    } else {
      alert('Please select a language');
    }
    
  };


  return (
    
    <div className="row first">
                            <div className="container col-lg-12">
                                
                            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                            <h2>Language</h2>
                            </div>

                             <div className="card shadow mb-4">
                                 <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                    <h6 className="m-0 font-weight-bold text-primary">Select Language </h6>
                                    </div>

                                    <div className="row  mt-3 mb-3 p-2 mx-auto">
                                        <div className="mb-1">
                                            <div className="col-md-12">
                                                <div className="card text-center mt-5 mb-5">
                                                    <div className="card-body language">
                                                        <h4 className="card-title lang-title text-primary text-wrap">Language Preference</h4>
                                            <div className="dropdown">
                                        
                                            <select className="form-control m-auto col-md-5 border border-3  border-dark dropdown-item text-center"    
                                             id="language"
                                             name="language"
                                             value={language}
                                             onChange={handleLanguageChange}
                                            
                                            >
                                                <option>Choose your language!! </option>
                                                <option value="en">English</option>
                                                <option value="hi">Hindi</option>
                                                <option value="mr">Marathi</option>
                                                <option value="gu">Gujarati</option>
                                            </select>

                                            <div className="mt-2">
                                                <button
                                                className="btn border-2 btn-primary"
                                                id="proceed-button"
                                                type="button"
                                                onClick={handleProceed}
                                                style={{ border: '2px solid' }}
                                                >
                                                Proceed
                                                </button>
                                            </div>

                                                <div className="mt-3 bg-transparent border-primary lang-remember">  
                                                <h6 className="m-0 font-weight-bold text-primary">.
                                                    <h4 className="text-danger fw-bolder">Remember </h4> <p className='p-2'>You can select only one language, and you'll receive the report in the chosen language.</p></h6>
                                                </div>


                                                </div>
                                                    </div>


                                                </div>
                                            </div>


                                        </div>
                                    </div>

                                    </div>
                                    </div>
                                    </div>
                                

                
  );
};

export default Language;
