import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import './login.css';




function BasicExample() {

    const [name, setName] = useState("");
    console.log(name);
    const [key, setKey] = useState('home');

  
  return (
    <>
    <nav className="">


    <div className="main"> 

        {/* header */}
        <div className="header p-2 text-center">
                    <div>
                        <img src="https://onemind.ollato.com/public/images/small.png" alt="logo" width="80" height="80"/>
                        </div>
                    <div>
                    <p className="text-danger fs-4">Ollato Mind Mapping Assessment</p>
                    </div>
         </div>


<div className="main-content p-2 my-4">

        
<div className='text-center my-2'>
<h5>PSU LOGIN</h5>
<h6>Upper Level Management</h6>
</div>

<div className="form-conatiner p-2 m-auto ">

    <div className="form-box" style={{}}>

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
          Login 
        </Button>{' '}
       
      </div>

      </div>


      </Form>
  
    </div>

    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
      <Tab eventKey="home" title="Home">
        Tab content for Home

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
              Login 
            </Button>{' '}
           
          </div>
    
          </div>
    
    
          </Form>
          
      </Tab>
      <Tab eventKey="profile" title="Profile">
        Tab content for Profile
      </Tab>
      <Tab eventKey="contact" title="Contact" >
        Tab content for Contact
      </Tab>
    </Tabs>

    
</div>


</div>



{/* footer content  */}

 <div className="footer">

<div className="row">

<div className='col-md-5 footer-left p-2 '>
   
<p>OLLATO EDUVERSITY PVT LTD</p> 
<p >
618, Nirmal Corporate Centre,.
LBS Road, Moti Nagar, Mulund West, Mumbai 400080.
</p>
</div>

<div className='col footer-left p-2 '></div>

<div className='col-md-5 footer-right p-2'>
<span>Phone No : 9967153586</span><br />
<span>Email : info@seracedu.com</span><br />
<span>Website : Ollato.com</span>
</div>

</div>

</div>
{/* footer end*/}



</div>
{/* main */}
                 



    

    </nav>
   
   </>
  );
}

export default BasicExample;