import React from 'react';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';



const Setting = () => {                                                                                                                                                                 

  return (
    
    <div>
      <div className="container ">
     
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
      <h2>Setting</h2>
      </div>

        <div className="container-fluids setting-box shadow p-5">

            <div className="row">

                <div className="col-md-4 ">
                    <div className="card p-3">
                <h6 className='mt-3 fw-bold text-primary mb-2'>Profile Modification</h6>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Name </Form.Label>
                        <Form.Control type="text" placeholder="enter full name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email </Form.Label>
                        <Form.Control type="email" placeholder="enter email" />
                    </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Phone </Form.Label>
                            <Form.Control type="number" placeholder="enter phone number" />
                        </Form.Group>
                  
                    <div className="btn ">
                    < button className='btn-primary border rounded p-1 w-100 px-3'>Update Profile</button>
                    </div>
                   

                    </Form>
                  </div>
                </div>

                {/* ======================================  Password Update ===================== */}
                <div className="col-md-4">
                    <div className="card p-3">
                <h6 className='mt-3 fw-bold text-primary mb-2'>Password Modification</h6>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Old Password </Form.Label>
                        <Form.Control type="text" placeholder="enter old password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>New Password </Form.Label>
                        <Form.Control type="text" placeholder="enter new password" />
                    </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Confirm Password </Form.Label>
                            <Form.Control type="text" placeholder="enter confirm password" />
                        </Form.Group>
                  
                    <div className="btn ">
                    < button className='btn-primary border rounded p-1 w-100 px-3'>Change Password</button>
                    </div>

                    </Form>
                  </div>
                </div>
              
                {/* =============================== Technical Support ====================  */}
                <div className="col-md-4 ">
                    <div className="card p-3">
                <h6 className='mt-3 fw-bold text-primary mb-2'>Technical Support</h6>
                <Form>
                    
                    <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
                        <Form.Label>Contact Person Number </Form.Label>
                        <Form.Control type="number" placeholder="Enter Phone Number" />
                    </Form.Group>
                        
                        <FloatingLabel controlId="floatingSelect" label="Technical Support">
                        <Form.Select aria-label="Floating label select example">
                            <option>Select Type of Issues </option>
                            <option value="Software">Software</option>
                            <option value="Hardware">Hardware</option>
                           
                        </Form.Select>
                        </FloatingLabel>

                        <FloatingLabel controlId="floatingTextarea2" label="Describe Your Query">
                            <Form.Control
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: '90px',marginTop:'20px' }}
                            />
                        </FloatingLabel>
                  
                    <div className="btn mt-2">
                    < button className='btn-primary border rounded p-1 w-100 px-3'>Send FeedBack</button>
                    </div>

                    </Form>
                  </div>
                </div>

            </div>
            
           
        </div>

        <div className="devider p-2 my-5"></div>

        
      </div>
     
    </div>
    
  );
};

export default Setting;
