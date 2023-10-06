import React from 'react';
import "../styles/About.css"
import portrait3 from "../assets/portrait3.jpg"
import portrait2 from "../assets/portrait2.jpg"
import portrait1 from "../assets/portrait1.jpg"
import soft14 from "../assets/soft14.jpg"


function About() {

  const aboutStyle ={
    backgroundImage:`url(${soft14})`,
    height:'50vh',
    backgroundPosition:'center',
    backgroundRepeat:'no-repeat',
    backgroundSize:'cover',
  }


  return (
    <div className='about'>
      <div className="backgroundAbout" style={aboutStyle}>
         <h1>About Us/</h1>
      </div>
      <div className="about-wrapper">
        <div className="about-container">
          <div className="about-images-box">
            <div className="about-image-a">
            <img src={portrait2} alt="" className='aboutImage' />
            <img src={portrait1} alt="" className='aboutImage' id="portrait1"/>
            </div>
            <img src={portrait3} alt="" className='aboutImage'/>
          </div>
          <div className="about-text-box">
            <div className="box">
            <h2>Welcome To Softcom EnhanceYour Skill With The Online Courses</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, voluptatibus distinctio ad neque maxime sit quos officia. Facilis molestias nihil sit asperiores, quam quasi aliquam id atque nisi, dignissimos labore quo harum aliquid minus deserunt esse consequuntur quia excepturi fugiat accusantium voluptate voluptatibus? Aspernatur, perferendis.</p>
              <button>Learn more</button>
            </div>
           </div>
           </div>
          </div>
          {/*ONLINE */}
           <section className="online">
             <div className="online-center">
             <h2>Benefit From Our Online Learning</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi perferendis magnam explicabo quisquam harum et.</p>
               </div>
              <div className="online-wrapper">
                <div className="online-container">
                  <div className="online-a">
                     <i className='fa fa-video'></i>
                     <div className="online-text">
                      <h4>Online Degrees</h4>
                      <p>Lorem ipsum dolor sit amet consectetur.</p>
                     </div>
                  </div>
                  <div className="online-a">
                     <i className='fa fa-award'></i>
                     <div className="online-text">
                      <h4>Certificates</h4>
                      <p>Lorem ipsum dolor sit amet consectetur.</p>
                     </div>
                  </div>
                  <div className="online-a">
                     <i className='fa fa-book'></i>
                     <div className="online-text">
                      <h4>Short Courses</h4>
                      <p>Lorem ipsum dolor sit amet consectetur.</p>
                     </div>
                  </div>


                </div>
              </div>
           </section>
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

export default About
