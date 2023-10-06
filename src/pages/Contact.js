import React from 'react';
import "../styles/Contact.css"
import soft14 from "../assets/soft14.jpg"

const Contact = () => {

  const contactStyle ={
    backgroundImage:`url(${soft14})`,
    height:'50vh',
    backgroundPosition:'center',
    backgroundRepeat:'no-repeat',
    backgroundSize:'cover',
  }

  return (
    <div className='contact'>
      <div className="contact-background" style={contactStyle} >
        <h1>Contact Us/</h1>
      </div>
      <div className="contact-wrapper">
        <div className="contact-container">
           <div className="contact-description">
             <h2>Get in touch</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
              <div className="box-a">
                <i className='fa fa-address-card'></i>
                <span>Douala-Cameroon</span>
             </div>
             <br />
              <div className="box-a">
                <i className='fa fa-phone'></i>
                <span>Tel:(+13)77-89-87-67</span>
             </div>
             <br />
             <div className="box-a">
               <i className='fa fa-envelope'></i>
               <span>dascom@gmail.com</span>
             </div>
           </div>
           <div className="contact-form">
            <form className='form'>
              <input type="text"  placeholder='Enter your Name'/>
              <input type="text" placeholder='Enter your Surname'/>
              <input type="email"  placeholder='Enter your email'/>
              <textarea name="" id="" cols="30" rows="10" placeholder="Type your message here.."></textarea>
            </form>
            <button className='submitBtn'>Send message</button>
           </div>
        </div>
      </div>
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

export default Contact
