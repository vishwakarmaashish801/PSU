import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { Tab, Tabs, Form, Button, Container, Row, Col } from 'react-bootstrap';

import  Header  from "../../components/header/header.jsx";
import  Footer  from "../../components/footer/footer.jsx";

import './home.css';





function Home() {

  const [key, setKey] = useState('login');
  const [loginData, setLoginData] = useState({ username: '', password: '' });
  const [registerData, setRegisterData] = useState({
    firstName: '',
    surname: '',
    contactInfo: '',
    day: '',
    month: '',
    year: '',
    password: '',
  });
  const [error, setError] = useState('');

  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleRegisterChange = (e) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };

  const validateContactInfo = (contact) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^[0-9]{10,15}$/;
    return emailPattern.test(contact) || phonePattern.test(contact);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log('Login Data:', loginData);
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    if (!validateContactInfo(registerData.contactInfo)) {
      setError('Please enter a valid email or phone number.');
      return;
    }
    setError('');
    console.log('Register Data:', registerData);
  };

  
  return (
    <>
   

  
    <div className="container-fluids main bg-danger"> 
  
    <Header />
 

<div className="row">

<img src="https://ollato.in/images/police2.png" className="logo" alt="Vite logo"/>



<div className="col">


<div className=" second row">

  <div className="col-md-6"></div>
  
  <div className="col-md-6 ">

  <Container className=" mt-5 ">
      <Row className="justify-content-center ">
        <Col md={5} lg={10}>
          <Tabs
            id="login-register-tabs"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mb-4 d-none"
          >
            <Tab eventKey="login" title="Login"></Tab>
            <Tab eventKey="register" title="Register"></Tab>
          </Tabs>

          {key === 'login' && (
            <Form onSubmit={handleLoginSubmit} className="p-3 border rounded shadow-lg form-bg">
              <h3 className="text-center mb-4">Login</h3>
              <Form.Group controlId="loginUsername" className="mb-3">
                <Form.Label>Email or Mobile Number</Form.Label>
                <Form.Control
                  type="text"
                  name="username"
                  value={loginData.username}
                  onChange={handleLoginChange}
                  placeholder="Enter email or phone"
                  required
                />
              </Form.Group>
              <Form.Group controlId="loginPassword" className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  value={loginData.password}
                  onChange={handleLoginChange}
                  placeholder="Password"
                  required
                />
              </Form.Group>
              <Button type="submit" className="w-100 mb-3" variant="primary">
                Login
              </Button>
              <div className="text-center mb-3">
                <a href="#" className="text-decoration-none text-warning">Forgot Password?</a>
              </div>
              <div className="text-center">
                <span>Don't have an account? </span>
                <a href="#" onClick={() => setKey('register')} className="text-decoration-none text-warning">
                  Register here
                </a>
              </div>
            </Form>
          )}

          {key === 'register' && (
            <Form onSubmit={handleRegisterSubmit} className="p-3 border rounded shadow-lg form-bg">
              <h3 className="text-center mb-4">Register</h3>

              {error && <div className="text-danger text-center mb-3">{error}</div>}

              <Form.Group controlId="registerFirstName" className="mb-2">
                <Form.Label>Full Name </Form.Label>
                <Form.Control
                  type="text"
                  name="username"
                   placeholder="Enter first Name And Surname"
                  value={registerData.firstName}
                  onChange={handleRegisterChange}
                  required
                />
              </Form.Group>
             
              <Form.Group controlId="registerContactInfo" className="mb-2">
                <Form.Label>Email or Mobile Number</Form.Label>
                <Form.Control
                  type="text"
                  name="contactInfo"
                  value={registerData.contactInfo}
                  onChange={handleRegisterChange}
                  placeholder="Enter email or phone"
                  required
                />
              </Form.Group>
              <Form.Group controlId="registerDOB" className="mb-2">
                <Form.Label>Date of Birth</Form.Label>
                <div className="d-flex">
                  <Form.Control
                    type="text"
                    name="day"
                    placeholder="DD"
                    value={registerData.day}
                    onChange={handleRegisterChange}
                    required
                    className="me-2"
                  />
                  <Form.Control
                    type="text"
                    name="month"
                    placeholder="MM"
                    value={registerData.month}
                    onChange={handleRegisterChange}
                    required
                    className="me-2"
                  />
                  <Form.Control
                    type="text"
                    name="year"
                    placeholder="YYYY"
                    value={registerData.year}
                    onChange={handleRegisterChange}
                    required
                  />
                </div>
              </Form.Group>
              <Form.Group controlId="registerPassword" className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                   placeholder="Enter password"
                  value={registerData.password}
                  onChange={handleRegisterChange}
                  required
                />
              </Form.Group>
              <Button type="submit" className="w-100 mb-3" variant="primary">
                Register
              </Button>
              <div className="text-center">
                <span>Already have an account? </span>
                <a href="#" onClick={() => setKey('login')} className="text-decoration-none text-warning">
                  Login here
                </a>
              </div>
            </Form>
          )}
        </Col>
      </Row>
    </Container>


  

  </div>


</div>






</div>










</div>






<div className="main-content  ">




</div>




</div>
{/* main */}
                 

<Footer />

    


   </>
  );
}

export default Home;