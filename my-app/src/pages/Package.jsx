import React from 'react'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { SiTicktick } from "react-icons/si";
import '../styles/package.css'

const packagePage = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };


  return (
    <>
    <div className="MainContentDynamic p-3">

    <div class="d-sm-flex align-items-center justify-content-between mb-4">
    <h2>Package</h2>
   </div>

    <div class="card shadow mb-4 ">
        <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
            <h6 class="m-0 font-weight-bold text-primary">Package </h6>
        </div>

      <div className="container">
      <div className="row">

        {/* first Card */}
      <div className="col-md-4 my-3">
      <Card className='shadow'>
      
      <Card.Body>
        <Card.Title><div className='text-center'   style={{background:'yellow',padding:8}}>Basic Package</div></Card.Title>
        <Card.Text>
        <span  className="wixui-rich-text__text" style={{color:'#03A3BD',fontWeight:'bolder',fontSize: 'x-large'}}> 
        <s>&nbsp; ₹ 4000 &nbsp; </s>
        </span>

        {/* <!-- Discount row --> */}
      <div class="row discount-container">
      <div style={{marginLeft:136,position:'absolute',fontSize:12}}> (<span className="discount">20</span>% Discount.) </div>
      <span style={{marginTop: -7,marginLeft: 12}} class="">
      <span style={{color:'#03A3BD'}} class="wixui-rich-text__text">
      <span style={{fontSize:36,fontWeight:'bolder'}} className="wixui-rich-text__text">₹3000 </span>
      </span>
      </span>

       <div>
      <span  style={{ fontSize: 13, marginTop: 0,position: 'absolute' }} class="" >*Included of Taxes (For 18% GST.)</span>
      </div>

      </div>

      <div class="mt-4">
      <span style={{ fontWeight: 'bold', fontSize: 'small', color: '#604e4b' }} class="wixui-rich-text__text">SUITED FOR:</span>
      </div>
 
      <div className="list" style={{ fontWeight: 'normal', height: '250px' }}>
        <div className="item-content mx-2" style={{ fontSize: 'medium', color: '#5a5c69' }}>
        <SiTicktick /> Online Assessment
        </div>

        <div className="item-content mx-2" style={{ fontSize: 'medium', color: '#5a5c69' }}>
        <SiTicktick /> Summary Report
        </div>

        <div className="item-content mx-2" style={{ fontSize: 'medium', color: '#5a5c69' }}>
        <SiTicktick /> Detailed Analysis of Report
        </div>

        <div className="item-content mx-2" style={{ fontSize: 'medium', color: '#5a5c69' }}>
        <SiTicktick /> Customized Improvement Tips
        </div>

        <div className="item-content mx-2" style={{ fontSize: 'medium', color: '#5a5c69' }}>
        <SiTicktick /> Basic Progress Tracking
        </div>

        <div className="item-content mx-2" style={{ fontSize: 'medium', color: '#5a5c69' }}>
        <SiTicktick />Email Support For Queries
        </div>

    </div>

    <hr />

    <form method="post" onSubmit={handleSubmit} id="firstpackageForm">
      <div className="row text-center mb-3" style={{ height: '50px', padding: '0px 0px', alignItems: 'center' }}>
        
        <div className="col-md-8 card-text">
          <input
            type="text"
            className="form-control form-control-coupon"
            placeholder="Coupon code"
            name="code"
            id="coupon_code_first"
          />
        </div>


        <div className="col-md-2 card-text input-group-append">
          <span className="fw-bold">
            <button
              type="button"
              className="btn btn-apply"
              style={{ background: '#03A3BD', color: '#fff' }}
            >
              Apply
            </button>
          </span>
        </div>
        
      </div>
    </form>     

     <div className="topaybox">
      
      <div className="text-center">
        <span 
          className="fw-bold text-center" 
          style={{ fontSize: '20px', fontWeight: 'bold', color: '#5a5c69' }}
        >
          + 18% GST.
        </span>
      </div>

      <div className="col-md-12 message-error">
        <p className="fw-bold text-danger text-center message1"></p>
      </div>

      <div className="row text-center payment-box">
        
        <div className="col-md-6 card-text">
          <span 
            className="fw-bold" 
            style={{ fontSize: '20px', fontWeight: 'bold', color: '#5a5c69' }}
          >
            Total Pay
          </span>
        </div>
        
        <div className="col-md-6 card-text">
          <span 
            className="fw-bold" 
            style={{ 
              fontSize: '30px', 
              fontWeight: 'bold', 
            
            }}
          >
            <span className="topay1">&#x20b9;3000</span>
          </span>
        </div>
        
      </div>
    </div>                                     

        </Card.Text>
        <div className="text-center payment-btn btn w-100" style={{ background: '#03A3BD', color: '#fff',border:'#fff' }}>
      <button 
        className="btn btn-block btn-student-payment" 
        type="submit" 
      
      >
        <span style={{ background: '#03A3BD', color: '#fff',border:'#fff' }}>Get Started Now</span>
      </button>
    </div>
      </Card.Body>
    </Card>
      </div>


      {/* =========================  second Advance  =======================================*/}

  
       <div className="col-md-4 my-3">
      <Card className='shadow'>
      
      <Card.Body>
        <Card.Title><div className='text-center'   style={{background:'yellow',padding:8}}>Advance Package</div></Card.Title>
        <Card.Text>
        <span  className="wixui-rich-text__text" style={{color:'#03A3BD',fontWeight:'bolder',fontSize: 'x-large'}}> 
        <s>&nbsp; ₹ 5000 &nbsp; </s>
        </span>

        {/* <!-- Discount row --> */}
      <div class="row discount-container">
      <div style={{marginLeft:136,position:'absolute',fontSize:12}}> (<span className="discount">20</span>% Discount.) </div>
      <span style={{marginTop: -7,marginLeft: 12}} class="">
      <span style={{color:'#03A3BD'}} class="wixui-rich-text__text">
      <span style={{fontSize:36,fontWeight:'bolder'}} className="wixui-rich-text__text">₹4000 </span>
      </span>
      </span>

       <div>
      <span  style={{ fontSize: 13, marginTop: 0,position: 'absolute' }} class="" >*Included of Taxes (For 18% GST.)</span>
      </div>

      </div>

      <div class="mt-4">
      <span style={{ fontWeight: 'bold', fontSize: 'small', color: '#604e4b' }} class="wixui-rich-text__text">SUITED FOR:</span>
      </div>
 
      <div className="list" style={{ fontWeight: 'normal', height: '250px' }}>
        <div className="item-content mx-2" style={{ fontSize: 'medium', color: '#5a5c69' }}>
        <SiTicktick /> Online Assessment
        </div>

        <div className="item-content mx-2" style={{ fontSize: 'medium', color: '#5a5c69' }}>
        <SiTicktick /> Summary Report
        </div>

        <div className="item-content mx-2" style={{ fontSize: 'medium', color: '#5a5c69' }}>
        <SiTicktick /> Detailed Analysis of Report
        </div>

        <div className="item-content mx-2" style={{ fontSize: 'medium', color: '#5a5c69' }}>
        <SiTicktick /> Customized Improvement Tips
        </div>

        <div className="item-content mx-2" style={{ fontSize: 'medium', color: '#5a5c69' }}>
        <SiTicktick /> Basic Progress Tracking
        </div>

        <div className="item-content mx-2" style={{ fontSize: 'medium', color: '#5a5c69' }}>
        <SiTicktick />Email Support For Queries
        </div>

    </div>

    <hr />

    {/*  */}

    <form method="post" onSubmit={handleSubmit} id="firstpackageForm">
      <div className="row text-center mb-3" style={{ height: '50px', padding: '0px 0px', alignItems: 'center' }}>
        
        <div className="col-md-8 card-text">
          <input
            type="text"
            className="form-control form-control-coupon"
            placeholder="Coupon code"
            name="code"
            id="coupon_code_first"
          />
        </div>


        
        
        <div className="col-md-2 card-text input-group-append">
          <span className="fw-bold">
            <button
              type="button"
              className="btn btn-apply"
              style={{ background: '#03A3BD', color: '#fff' }}
            >
              Apply
            </button>
          </span>
        </div>
        
      </div>
    </form>     

     <div className="topaybox">
      
      <div className="text-center">
        <span 
          className="fw-bold text-center" 
          style={{ fontSize: '20px', fontWeight: 'bold', color: '#5a5c69' }}
        >
          + 18% GST.
        </span>
      </div>

      <div className="col-md-12 message-error">
        <p className="fw-bold text-danger text-center message1"></p>
      </div>

      <div className="row text-center payment-box">
        
        <div className="col-md-6 card-text">
          <span 
            className="fw-bold" 
            style={{ fontSize: '20px', fontWeight: 'bold', color: '#5a5c69' }}
          >
            Total Pay
          </span>
        </div>
        
        <div className="col-md-6 card-text">
          <span 
            className="fw-bold" 
            style={{ 
              fontSize: '30px', 
              fontWeight: 'bold', 
            
            }}
          >
            <span className="topay1"   style={{color: '#644537' }}>&#x20b9;4000</span>
          </span>
        </div>
        
      </div>
    </div>                                     

        </Card.Text>
        <div className="text-center payment-btn btn  w-100" style={{ background: '#03A3BD', color: '#fff',border:'#fff' }}>
      <button 
        className="btn btn-block btn-student-payment" 
        type="submit" 
      
      >
        <span style={{ background: '#03A3BD', color: '#fff',border:'#fff' }}>Get Started Now</span>
      </button>
    </div>
      </Card.Body>
    </Card>
      </div>


      {/* =======================  third  Premium Package =========================================*/}

     
       <div className="col-md-4 my-3">
      <Card className='shadow'>
      
      <Card.Body>
        <Card.Title><div className='text-center'   style={{background:'yellow',padding:8}}>Premium Package</div></Card.Title>
        <Card.Text>
        <span  className="wixui-rich-text__text" style={{color:'#03A3BD',fontWeight:'bolder',fontSize: 'x-large'}}> 
        <s>&nbsp; ₹ 6250 &nbsp; </s>
        </span>

        {/* <!-- Discount row --> */}
      <div class="row discount-container">
      <div style={{marginLeft:136,position:'absolute',fontSize:12}}> (<span className="discount">20</span>% Discount.) </div>
      <span style={{marginTop: -7,marginLeft: 12}} class="">
      <span style={{color:'#03A3BD'}} class="wixui-rich-text__text">
      <span style={{fontSize:36,fontWeight:'bolder'}} className="wixui-rich-text__text">₹5000 </span>
      </span>
      </span>

       <div>
      <span  style={{ fontSize: 13, marginTop: 0,position: 'absolute' }} class="" >*Included of Taxes (For 18% GST.)</span>
      </div>

      </div>

      <div class="mt-4">
      <span style={{ fontWeight: 'bold', fontSize: 'small', color: '#604e4b' }} class="wixui-rich-text__text">SUITED FOR:</span>
      </div>
 
      <div className="list" style={{ fontWeight: 'normal', height: '250px' }}>
        <div className="item-content mx-2" style={{ fontSize: 'medium', color: '#5a5c69' }}>
        <SiTicktick /> Online Assessment
        </div>

        <div className="item-content mx-2" style={{ fontSize: 'medium', color: '#5a5c69' }}>
        <SiTicktick /> Summary Report
        </div>

        <div className="item-content mx-2" style={{ fontSize: 'medium', color: '#5a5c69' }}>
        <SiTicktick /> Detailed Analysis of Report
        </div>

        <div className="item-content mx-2" style={{ fontSize: 'medium', color: '#5a5c69' }}>
        <SiTicktick /> Customized Improvement Tips
        </div>

        <div className="item-content mx-2" style={{ fontSize: 'medium', color: '#5a5c69' }}>
        <SiTicktick /> Basic Progress Tracking
        </div>

        <div className="item-content mx-2" style={{ fontSize: 'medium', color: '#5a5c69' }}>
        <SiTicktick />Email Support For Queries
        </div>

    </div>

    <hr />

    <form method="post" onSubmit={handleSubmit} id="firstpackageForm">
      <div className="row text-center mb-3" style={{ height: '50px', padding: '0px 0px', alignItems: 'center' }}>
        
        <div className="col-md-8 card-text">
          <input
            type="text"
            className="form-control form-control-coupon"
            placeholder="Coupon code"
            name="code"
            id="coupon_code_first"
          />
        </div>


        
        
        <div className="col-md-2 card-text input-group-append">
          <span className="fw-bold">
            <button
              type="button"
              className="btn btn-apply"
              style={{ background: '#03A3BD', color: '#fff' }}
            >
              Apply
            </button>
          </span>
        </div>
        
      </div>
    </form>     

     <div className="topaybox">
      
      <div className="text-center">
        <span 
          className="fw-bold text-center" 
          style={{ fontSize: '20px', fontWeight: 'bold', color: '#5a5c69' }}
        >
          + 18% GST.
        </span>
      </div>

      <div className="col-md-12 message-error">
        <p className="fw-bold text-danger text-center message1"></p>
      </div>

      <div className="row text-center payment-box">
        
        <div className="col-md-6 card-text">
          <span 
            className="fw-bold" 
            style={{ fontSize: '20px', fontWeight: 'bold', color: '#5a5c69' }}
          >
            Total Pay
          </span>
        </div>
        
        <div className="col-md-6 card-text">
          <span 
            className="fw-bold" 
            style={{ 
              fontSize: '30px', 
              fontWeight: 'bold', 
            
            }}
          >
            <span className="topay1" style={{color: '#644537' }}>&#x20b9;5000</span>
          </span>
        </div>
        
      </div>
    </div>                                     

        </Card.Text>
        <div className="text-center payment-btn btn w-100" style={{ background: '#03A3BD', color: 'red',border:'#fff' }}>
      <button 
        className="btn btn-block btn-student-payment" 
        type="submit" 
      
      >
        <span style={{ background: '#03A3BD', color: '#fff',border:'#fff' }} >Get Started Now</span>
      </button>
    </div>
      </Card.Body>
    </Card>
      </div>

{/* ===========================       ADOON  NEW PAckage ======================================= */}

      <div className="row first">
      <div className="col-lg-12">
        <div className="card shadow mb-4">
          <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
            <h6 className="m-0 font-weight-bold text-primary">Add Ons.</h6>
          </div>
          
          {/* Package container */}
          <div className="container py-5 d-flex ">
            {/* Virtual Counselling */}
            <div className="row">
              <div className="col-md-6">
                <div className="virtual-single-counselling">
                  <h6 className="text-center text-primary fw-bolder" style={{ fontSize: '20px', fontWeight: 900 }}>
                    Virtual Counselling
                  </h6>
                  <div className="row">
                    <div className="col-md-12 col-sm-12">
                      <div className="single-couseling-box">
                        <div className="card-bullet">
                          <h6 className="card-title p-2">40 Minutes</h6>
                        </div>
                        <div className="card-bullet single-counselling-amount">
                          <p className="text-primary fw-bold py-1">&#x20b9; 1500/ Session.</p>
                        </div>
                        <div className="book-session-btn">
                          <a href="book-session.php" className="btn" style={{ background: '#03A3BD', color: '#fff' }}> 
                            Book Session
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Second row (hidden by default) */}
                  <div className="row d-none">
                    <div className="col-md-11 col-sm-12">
                      <div className="single-couseling-box">
                        <div className="card-bullet">
                          <h6 className="card-title p-2">40 Minutes</h6>
                        </div>
                        <div className="card-bullet single-counselling-amount">
                          <p className="text-primary fw-bold py-1">&#x20b9; 1499/ Session.</p>
                        </div>
                        <div className="book-session-btn">
                          <a href="book-session.php" className="btn">
                            Book Session
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End of second row */}
                </div>
              </div>

              <div className="col-md-6">
                <div className="virtual-single-counselling">
                  <h6 className="text-center text-primary fw-bolder" style={{ fontSize: '20px', fontWeight: 900 }}>
                  In Person Counselling
                  </h6>
                  <div className="row">
                    <div className="col-md-12 col-sm-12">
                      <div className="single-couseling-box">
                        <div className="card-bullet">
                          <h6 className="card-title p-2">60 Minutes</h6>
                        </div>
                        <div className="card-bullet single-counselling-amount">
                          <p className="text-primary fw-bold py-1">&#x20b9; 2500/ Session.</p>
                        </div>
                        <div className="book-session-btn">
                          <a href="book-session.php" className="btn" style={{ background: '#03A3BD', color: '#fff' }}> 
                            Book Session
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Second row (hidden by default) */}
                  <div className="row d-none">
                    <div className="col-md-11 col-sm-12">
                      <div className="single-couseling-box">
                        <div className="card-bullet">
                          <h6 className="card-title p-2">40 Minutes</h6>
                        </div>
                        <div className="card-bullet single-counselling-amount">
                          <p className="text-primary fw-bold py-1">&#x20b9; 1499/ Session.</p>
                        </div>
                        <div className="book-session-btn">
                          <a href="book-session.php" className="btn">
                            Book Session
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End of second row */}
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

           
                  
                     
                    
                   










                         

                       

                              





    

   </div>
   </>

  )
}

export default packagePage
