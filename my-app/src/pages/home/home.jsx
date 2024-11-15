import { useState } from 'react';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import Header from '../../components/header/header.jsx';
import Footer from '../../components/footer/footer.jsx';

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
  const [forgotData, setForgotData] = useState({ emailOrPhone: '' });
  const [otpData, setOtpData] = useState({ otp: '' });
  const [generatedOtp, setGeneratedOtp] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isVerified, setIsVerified] = useState(false);

  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleRegisterChange = (e) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };

  const handleForgotChange = (e) => {
    setForgotData({ ...forgotData, [e.target.name]: e.target.value });
  };

  const handleOtpChange = (e) => {
    setOtpData({ ...otpData, [e.target.name]: e.target.value });
  };

  const validateContactInfo = (contact) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^[0-9]{10,15}$/;
    return emailPattern.test(contact) || phonePattern.test(contact);
  };

  const handleForgotSubmit = (e) => {
    e.preventDefault();
    if (!validateContactInfo(forgotData.emailOrPhone)) {
      setError('Please enter a valid email or phone number.');
      return;
    }
    setError('');
    const otp = Math.floor(1000 + Math.random() * 9000).toString();
    setGeneratedOtp(otp);
    setRegisterData({ ...registerData, contactInfo: forgotData.emailOrPhone });
    console.log('Generated OTP:', otp); // Simulate OTP sent
    setSuccess('OTP has been sent to your email or phone.');
    setKey('otp'); // Switch to OTP verification form
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    if (otpData.otp !== generatedOtp) {
      setError('Invalid OTP. Please try again.');
      return;
    }
    setError('');
    setSuccess('OTP Verified Successfully! Please complete your registration.');
    setIsVerified(true);
    setKey('register'); // Switch to registration form
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    if (!isVerified) {
      setError('Please verify your email or phone first.');
      setKey('otp'); // Go back to OTP verification if not verified
      return;
    }
    console.log('User Registered:', registerData);
    setSuccess('Registration Successful! Please log in.');
    setKey('login'); // Redirect to login after successful registration
  };

  return (
    <>
      <div className="container-fluids main bg-danger">
        <Header />

        <div className="row">
          <img
            src="https://ollato.in/images/police2.png"
            className="logo"
            alt="Vite logo"
          />

          <div className="col">
            <div className="second row">
              <div className="col-md-6"></div>

              <div className="col-md-6 ">
                <Container className="mt-5">
                  <Row className="justify-content-center">
                    <Col md={5} lg={10}>
                      {success && (
                        <Alert
                          variant="success"
                          className="text-center"
                          onClose={() => setSuccess('')}
                          dismissible
                        >
                          {success}
                        </Alert>
                      )}
                      {error && (
                        <Alert
                          variant="danger"
                          className="text-center"
                          onClose={() => setError('')}
                          dismissible
                        >
                          {error}
                        </Alert>
                      )}
                      {key === 'login' && (
                        <Form
                          onSubmit={(e) => {
                            e.preventDefault();
                            console.log('Login Data:', loginData);
                          }}
                          className="p-3 border rounded shadow-lg form-bg"
                        >
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
                          <Button
                            type="submit"
                            className="w-100 mb-3"
                            variant="primary"
                          >
                            Login
                          </Button>
                          <div className="text-center mb-3">
                            <a
                              href="#"
                              onClick={() => setKey('forgot')}
                              className="text-decoration-none text-warning"
                            >
                              Forgot Password?
                            </a>
                          </div>
                          <div className="text-center">
                            <span>Don't have an account? </span>
                            <a
                              href="#"
                              onClick={() => setKey('register')}
                              className="text-decoration-none text-warning"
                            >
                              Register here
                            </a>
                          </div>
                        </Form>
                      )}

                      {key === 'forgot' && (
                        <Form
                          onSubmit={handleForgotSubmit}
                          className="p-3 border rounded shadow-lg form-bg"
                        >
                          <h3 className="text-center mb-4">Forgot Password</h3>
                          <Form.Group
                            controlId="forgotEmailOrPhone"
                            className="mb-3"
                          >
                            <Form.Label>Email or Mobile Number</Form.Label>
                            <Form.Control
                              type="text"
                              name="emailOrPhone"
                              value={forgotData.emailOrPhone}
                              onChange={handleForgotChange}
                              placeholder="Enter email or phone"
                              required
                            />
                          </Form.Group>
                          <Button
                            type="submit"
                            className="w-100 mb-3"
                            variant="primary"
                          >
                            Send OTP
                          </Button>
                        </Form>
                      )}

                      {key === 'otp' && (
                        <Form
                          onSubmit={handleOtpSubmit}
                          className="p-3 border rounded shadow-lg form-bg"
                        >
                          <h3 className="text-center mb-4">Verify OTP</h3>
                          <Form.Group controlId="otpInput" className="mb-3">
                            <Form.Label>Enter OTP</Form.Label>
                            <Form.Control
                              type="text"
                              name="otp"
                              value={otpData.otp}
                              onChange={handleOtpChange}
                              placeholder="Enter OTP sent to your email or phone"
                              required
                            />
                          </Form.Group>
                          <Button
                            type="submit"
                            className="w-100 mb-3"
                            variant="primary"
                          >
                            Verify OTP
                          </Button>
                        </Form>
                      )}

                      {key === 'register' && (
                        <Form
                          onSubmit={handleRegisterSubmit}
                          className="p-3 border rounded shadow-lg form-bg"
                        >
                          <h3 className="text-center mb-4">Register</h3>
                          <Form.Group
                            controlId="registerFirstName"
                            className="mb-2"
                          >
                            <Form.Label>Full Name </Form.Label>
                            <Form.Control
                              type="text"
                              name="firstName"
                              placeholder="Enter first Name and Surname"
                              value={registerData.firstName}
                              onChange={handleRegisterChange}
                              required
                            />
                          </Form.Group>

                          <Form.Group
                            controlId="registerContactInfo"
                            className="mb-2"
                          >
                            <Form.Label>Email or Mobile Number</Form.Label>
                            <Form.Control
                              type="text"
                              name="contactInfo"
                              value={registerData.contactInfo}
                              onChange={handleRegisterChange}
                              placeholder="Enter email or phone"
                              disabled={isVerified}
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
                          <Form.Group
                            controlId="registerPassword"
                            className="mb-3"
                          >
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
                          <Button
                            type="submit"
                            className="w-100 mb-3"
                            variant="primary"
                          >
                            Register
                          </Button>
                        </Form>
                      )}
                    </Col>
                  </Row>
                </Container>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default Home;
