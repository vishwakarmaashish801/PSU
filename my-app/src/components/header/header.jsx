
import './header.css';
function header() {

  return (
    <>
 
 {/* header */}
 <div className="row  header">

 <div className="col-md-6 d-flex ">

 <div className="header-box p-2">
     <img src="https://onemind.ollato.com/public/images/small.png" alt="logo" width="60" height="60"/>
     </div>
 <div>
 <p className="company-title mx-2">OLLATO EDUVERSITY</p>
 <hr className="hr-header mx-2" />
 <p className="sub-title mx-2">Empowering Minds Transforming Careers </p>
 </div>
</div>

<div className="header-right col-md-6 p-2">

<div className="right-box">
<p className="fw-bold" style={{fontSize:25}}>PSU - Upper Level Management</p>
<p className="sub-title ">Empowering Minds Transforming Careers </p>
</div>


 

</div>  



</div>


</>
  )
}

  export default header;