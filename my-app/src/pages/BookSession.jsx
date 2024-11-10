import React from 'react';

import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const BookSession = () => {

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
    
    <div className="row first px-2">
                            <div className="col-lg-12">
                                <h2 className='mb-4'>Book Session</h2>
                             <div className="card shadow mb-4">
                                 <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                    <h6 className="m-0 font-weight-bold text-primary">Book Session</h6>
                                    </div>

                                    <div className="row  mt-3 mb-3 p-2 mx-auto">
                                        <div className="mb-1">
                                            <div className="col-md-12">
                                                <div className="card text-center mt-5 mb-5">
                                                   <ul className='p-5'>
                                                    <li>English</li>
                                                    <li>Hindi</li>
                                                    <li>Marathi</li>
                                                    <li>Gujarati</li>
                                                   </ul>


                                                </div>
                                            </div>


                                        </div>
                                    </div>

                                    </div>
                                    </div>
                                    </div>
                                

                
  );
};

export default BookSession;
