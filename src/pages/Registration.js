import React from 'react';
import "../styles/Registration.css"

const Registration = () => {

  return(
    <div className='registration'>
       <h1 className='center-registration'>Registration form</h1>
        <div className="registration-wrapper">

          <form className="form-container">
            <h4 className='formStyle'>Personal Details</h4>
            {/*PERSONAL DETAIL */}
            <div className="formA">
             <div className="form-a">
               <label htmlFor="">Name</label>
               <input type="text" placeholder='Enter full name'/>
             </div>
             <div className="form-a">
               <label htmlFor="">Date of Birth</label>
               <input type="date" placeholder='Enter date of birth'/>
             </div>
             <div className="form-a">
               <label htmlFor="">Email</label>
               <input type="email" placeholder='Enter your email'/>
             </div>
             <div className="form-a">
               <label htmlFor="">Mobile Number</label>
               <input type="text" placeholder='Enter your mobile number'/>
             </div>
             <div className="form-a">
               <label htmlFor="">Gender</label>
               <input type="text" placeholder='Gender'/>
             </div>
             <div className="form-a">
               <label htmlFor="">Occupation</label>
               <input type="text" placeholder='Occupation'/>
             </div>
            </div>

            {/*SELECT COURSE */}
             <h4 className='formStyle'>Course Details</h4>
             <div className="select-course">
                <div className="form-a">
                 <label htmlFor="">Course</label>
                  <input type="text" placeholder='Enter your course'/>
             </div>
             <div className="form-a">
               <label htmlFor="">Date to start</label>
               <input type="date" placeholder='Enter date'/>
             </div>
             <div className="form-a">
               <label htmlFor="">Option</label>
               <input type="email" placeholder='Full-time/Part-time'/>
             </div>
             </div>
             {/* LOCATION */}
             <h4 className='formStyle'>Location</h4>
             <div className="location">
              <div className="form-a">
                <label htmlFor="">Country of origin</label>
                 <input type="text" placeholder='Enter your country'/>
              </div>
             <div className="form-a">
               <label htmlFor="">City</label>
               <input type="text" placeholder='City'/>
             </div>
             <div className="form-a">
               <label htmlFor="">Zip Code</label>
               <input type="text" placeholder='Zip code'/>
             </div>
             </div>
          </form> 
          <button className='submitForm'>Submit</button>
        </div>
        {/*FOOTER */}
        <footer>
          <div className="footer-wrapper">
            <div className="footer-container">
                <div className="footer-text">
                  <h3>Useful links</h3>
                  <p>Home</p>
                  <p>About</p>
                  <p>Courses</p>
                  <p>Contact</p>
                </div>
                <div className="footer-text">
                  <h3>Partners</h3>
                  <p>Microsoft</p>
                  <p>Paypal</p>
                  <p>Coca-Cola</p>
                  <p>Philips</p>
                </div>
                <div className="footer-text">
                  <h3>Social Media</h3>
                  <p>Facebook</p>
                  <p>LindkedIn</p>
                  <p>Instagram</p>
                  <p>WhatsApp</p>
                </div>
                <div className="footer-text">
                  <h3>Contact</h3>
                  <p>Email:dascom@gmail.com</p>
                  <p>Address:Yaounde-Cameroon</p>
                  <p>Tel:+(237)678-97-64</p>
                </div>
            </div>
          </div>
        </footer>
    </div>
  )
}

export default Registration
