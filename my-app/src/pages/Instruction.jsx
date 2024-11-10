import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';


const Instruction = () => {

    const btnStyle = {
        font: 'inherit',
        border: '0',
        outline: '0',
        padding: '0.5em 1em',
        cursor: 'pointer',
        position: 'relative',
        color: '#fff',
        textTransform: 'uppercase',
        fontSize: '0.95em',
        transition: 'transform 0.2s, opacity 0.2s',
        background: '#644537',
        borderBottom: '0 solid #644537',
        borderBottomLeftRadius: '20px',
        borderTopRightRadius: '20px',
        transition: 'ease-out 0.4s'
      };
      
      
  const location = useLocation();
  const { language } = location.state || { language: 'Not selected' };

  return (
    <div className="container">

<div class="d-sm-flex align-items-center justify-content-between mb-4">
    <h1>Instruction</h1>
   </div>
     

    <div className="">
        <div className="col-lg-12">
        <div className="shadow ">

    {language === "en" ? (
      <>
      
      

            <div className="card-body">
                
                <div className="box"
                 style={{
                    padding: '12px',
                    border: '3px solid grey',
                    margin: '2% 0 0 0',
                    borderTopLeftRadius: '60px',
                    borderBottomRightRadius: '60px'
                  }} >
                    
                    <p
                        style={{
                            fontSize: '30px',
                            color: '#644537',
                            fontStyle: 'italic',
                            fontWeight: 'bolder',
                            marginLeft: '43px',
                        }}
                        >Instruction :-</p>
                    


            <ul>
                <li>In this test, you'll encounter a series of statements designed to reflect everyday experiences.</li>
                <li>There are 100 statements in total, covering a wide range of topics. For each statement, you'll be presented with five options, and your task is to choose the one that most closely aligns with your response or perspective.</li>
                <li>It's important to note that there are no correct or incorrect answers.</li>
                <li>Your responses are completely confidential, meaning they will be kept private and used exclusively for academic</li>
                <li>purposes. So, feel free to share your thoughts openly and honestly as you progress through the test.</li>

            
            </ul>

            <h5 class="font-weight-bold text-right letus_text"> Lets start now!</h5>
            </div>
            </div>

            <div className="col-md-6 text-center d-flex my-1 m-auto ">
                    <p className="fs-4 text-primary mx-2">
                    I am ready to begin
                    </p>
                    <Link to="/assessment" className="text-decoration-none">
                    <h3 style={btnStyle} id="btn-startTest">
                     Start test 
                    </h3>
                    </Link>
            </div>
      </>
    ) : language === "hi" ? (
      <>

      <div className="card-body">
                
        <div className="box"
            style={{
            padding: '12px',
            border: '3px solid grey',
            margin: '2% 0 0 0',
            borderTopLeftRadius: '60px',
            borderBottomRightRadius: '60px'
            }} >

            <p
                style={{
                    fontSize: '30px',
                    color: '#644537',
                    fontStyle: 'italic',
                    fontWeight: 'bolder',
                    marginLeft: '43px',
                }}
                >Instruction :-</p>
                    
            <ul>
                <li>In this test, you'll encounter a series of statements designed to reflect everyday experiences.</li>
                <li>There are 100 statements in total, covering a wide range of topics. For each statement, you'll be presented with five options, and your task is to choose the one that most closely aligns with your response or perspective.</li>
                <li>It's important to note that there are no correct or incorrect answers.</li>
                <li>Your responses are completely confidential, meaning they will be kept private and used exclusively for academic</li>
                <li>purposes. So, feel free to share your thoughts openly and honestly as you progress through the test.</li>

            
            </ul>

            <h5 class="font-weight-bold text-right letus_text"> Lets start now!</h5>
         </div>

        <div className="col-md-7 text-center d-flex m-auto p-2">
        <p className="fs-4 text-primary mx-2">
        आपने हिंदी सामग्री चुनी है।
        </p>
        
        <Link to="/assessment" className="text-decoration-none">
        
        <h3 style={btnStyle} id="btn-startTest">
            Start test आकलन पर जाएं
        </h3>
        </Link>
        </div>
        
      </div>

        
      </>
    ) : language === "mr" ? (
      <>

      <div className="card-body">
                
    <div className="box"
        style={{
        padding: '12px',
        border: '3px solid grey',
        margin: '2% 0 0 0',
        borderTopLeftRadius: '60px',
        borderBottomRightRadius: '60px'
        }} >

    <p
        style={{
            fontSize: '30px',
            color: '#644537',
            fontStyle: 'italic',
            fontWeight: 'bolder',
            marginLeft: '43px',
        }}
        >Instruction :-</p>

        <ul>
            <li>In this test, you'll encounter a series of statements designed to reflect everyday experiences.</li>
            <li>There are 100 statements in total, covering a wide range of topics. For each statement, you'll be presented with five options, and your task is to choose the one that most closely aligns with your response or perspective.</li>
            <li>It's important to note that there are no correct or incorrect answers.</li>
            <li>Your responses are completely confidential, meaning they will be kept private and used exclusively for academic</li>
            <li>purposes. So, feel free to share your thoughts openly and honestly as you progress through the test.</li>

        
        </ul>

        <h5 class="font-weight-bold text-right letus_text"> Lets start now!</h5>
     </div>

    <div className="col-md-7 text-center d-flex my-2 m-auto p-2">
    <p className="fs-4 text-primary mx-2">
    आपण मराठी सामग्री निवडली आहे.
    </p>
    
    <Link to="/assessment" className="text-decoration-none">
    
    <h3 style={btnStyle} id="btn-startTest">
        Start test मूल्यांकनावर जा
    </h3>
    </Link>
    </div>
            
    </div>

      </>
    ) : language === "gu" ? (
      <>

      <div className="card-body">
                
     <div className="box"
    style={{
    padding: '12px',
    border: '3px solid grey',
    margin: '2% 0 0 0',
    borderTopLeftRadius: '60px',
    borderBottomRightRadius: '60px'
    }} >

    <p
        style={{
            fontSize: '30px',
            color: '#644537',
            fontStyle: 'italic',
            fontWeight: 'bolder',
            marginLeft: '43px',
        }}
        >Instruction :-</p>


    <ul>
        <li>In this test, you'll encounter a series of statements designed to reflect everyday experiences.</li>
        <li>There are 100 statements in total, covering a wide range of topics. For each statement, you'll be presented with five options, and your task is to choose the one that most closely aligns with your response or perspective.</li>
        <li>It's important to note that there are no correct or incorrect answers.</li>
        <li>Your responses are completely confidential, meaning they will be kept private and used exclusively for academic</li>
        <li>purposes. So, feel free to share your thoughts openly and honestly as you progress through the test.</li>

    
    </ul>

    <h5 class="font-weight-bold text-right letus_text"> Lets start now!</h5>
     </div>

    <div className="col-md-8 text-center d-flex my-2 m-auto p-2">
    <p className="fs-4 text-primary mx-2">
    તમે ગુજરાતી સામગ્રી પસંદ કરી છે.
    </p>
    
    <Link to="/assessment" className="text-decoration-none">
    
    <h3 style={btnStyle} id="btn-startTest">
        Start test મુલ્યાંકન પર જાઓ
    </h3>
    </Link>
    </div>
                
    </div>
       
      </>
    ) : (
      <p className="fs-4 text-danger">Content not found for the selected language.</p>
    )}
  </div> 
</div>

</div>
</div>


  );
};

export default Instruction;
