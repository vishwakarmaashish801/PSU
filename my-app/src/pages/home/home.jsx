import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import './home.css';




function Main() {

    const [name, setName] = useState("");
    console.log(name);
    const [key, setKey] = useState('home');

  
  return (
    <>
   

  
    <div className="main bg-danger"> 


<div className="row">

<img src="https://ollato.in/images/police2.png" className="logo" alt="Vite logo"/>



<div className="col">


<div className=" second row">
  <div className="col-md-6 h-25">
    
  </div>
  <div className="col-md-6">

  <div className="form-right-container p-5 rounded border-2 mx-5">
        

        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="mb-3"
        >
          
          <div className='text-center my-2'> <h5>Login for a  PSU session!</h5></div>
          <Tab eventKey="home" title="Login">
            <Form>
        
        <div className="row">
           <div className="col-md-12">
           <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
              </Form.Group>
           </div>
           </div>
        
        
           
           
           <div className="row">
    
           <div className="col-md-12">
              <Form.Group controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password" // Correct type for password input
                  placeholder="Enter your password"
                />
              </Form.Group>
              </div>
        
              <div className='my-2'>
                <Button variant="outline-primary" size="sm" style={{width:100,padding:8}}>
                  Sign IN!
                </Button>{' '}
               
              </div>
        
              </div>
        
        
            </Form>
              
          </Tab>
    
    
                {/* Register form */}
                <Tab eventKey="profile" title="Register">
                  PSU User for Register
                 <Form>
        
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Enter Name : </Form.Label>
                    <Form.Control type="text" placeholder="xyz" />
                    </Form.Group>
    
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Enter Phone Number : </Form.Label>
                    <Form.Control type="number" placeholder="name@example.com" />
                    </Form.Group>
    
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address :</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>
          
        
        
           
           
           <div className="">
    
         
              <Form.Group controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password" // Correct type for password input
                  placeholder="Enter your password"
                />
              </Form.Group>
              </div>
        
              <div className='my-2'>
                <Button variant="outline-primary" size="sm" style={{width:100,padding:8}}>
                  Sign IN!
                </Button>{' '}
               
              
        
              </div>
        
        
            </Form>
    
    
    
    
    
    
    
    
    
          </Tab>
         
        </Tabs>
    
        </div>

  </div>


</div>






</div>










</div>






<div className="main-content  ">




</div>




</div>
{/* main */}
                 



    


   </>
  );
}

export default Main;