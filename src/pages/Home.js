import React from 'react';
import {Link} from "react-router-dom"
import "../styles/Home.css"
import angula from "../assets/pro23.jpg"
import javascript from "../assets/pro24.jpg"
import jquery from "../assets/pro9.jpg"
import p4 from "../assets/pro22.jpg"
import p5 from "../assets/pro15.jpg"
import p6 from "../assets/soft8.jpg"
import p7 from "../assets/p7.jpg"
import portrait from "../assets/portrait.jpg"
import portrait1 from "../assets/portrait1.jpg"
import portrait3 from "../assets/portrait3.jpg"
import portrait13 from "../assets/portrait13.jpg"
import coca from "../assets/cocacola.png"
import oppo from "../assets/oppo.jpg"
import microsoft from "../assets/microsoft.png"
import paypal from "../assets/paypal.jpg"
import philip from "../assets/philips.png"
import pika from "../assets/pika.jpg"

function Home() {
 const myStyle ={
   backgroundImage:`url(${pika})`,
   height:'100vh',
   backgroundPosition:'center',
   backgroundRepeat:'no-repeat',
   backgroundSize:'cover',
 }
 
  return ( 
    <div className='home'>
      <div className="future" style={myStyle}>
        <div className="future-detail">
        <h2 className='homeTitle'>Enhance Your future With Softcom</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum facere praesentium at quidem dolorum hic, a, molestiae voluptates ipsam natus eius recusandae, ducimus quas cupiditate.</p>
          </div>
          <div className="futureBtn">
          <Link to="/Courses" className='blue'>Learn more</Link>
          <Link to="/About" className='yellow'>About Us</Link>
          </div>
      </div>

      {/* SECTION GRADUATION*/}
       <section className='graduation'>
        <div className="graduation-header">
           <span><b>Your Eduction Start here at Softcom</b></span>
           <h2>Awesome Features</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum facere praesentium at quidem dolorum hic, a, molestiae voluptates ipsam natus eius recusandae, ducimus quas cupiditate.</p>
       </div>
       <div className="graduation-description">
           <div className="graduation-text">
            <i className='fa fa-school' id="gradeIcon"></i>
            <span><b>Scholarship</b></span>           
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi veniam nostrum, esse at saepe omnis?</p>
           </div>
           <div className="graduation-text">
            <i className='fa fa-award'id="gradeIcon" ></i>
            <span><b>Awards</b></span>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi veniam nostrum, esse at saepe omnis?</p>
           </div>
           <div className="graduation-text">
            <i className='fa fa-certificate'id="gradeIcon" ></i>
            <span><b>Certificate</b></span>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi veniam nostrum, esse at saepe omnis?</p>
           </div>
       </div>
       </section>
       {/* END OF GRADUATIONSECTION */}
       
       {/*COURSES */}
       <section className="courses">
        <div className="course-wrapper">
        <h2>Our Popular Courses</h2>
          <div className="course-container">
            <div className="course-description">
              <img src={angula} alt="" className='courseImage' />
              <div className="course-detail">
                <span>Updated 23/1/23</span>
                 <p><b>Angular Beginners Courses</b></p>
                  <div className="grade-stars">
                   <i className='fa fa-star'></i>
                   <i className="fa fa-star"></i>
                   <i className="fa fa-star"></i>
                   <i className="fa fa-star-half-o"></i>

                   <span>(350)</span>
              </div>
              <p><b>$100</b></p>
              </div>
            </div>
            <div className="course-description">
              <img src={javascript} alt="" className='courseImage' />
              <div className="course-detail">
              <span>Updated 27/2/23</span>
              <p><b>Javascript Beginners Courses</b></p>
              <div className="grade-stars">
                <i className='fa fa-star'></i>
                <i className="fa fa-star"></i>
                 <i className="fa fa-star"></i>
                 <i className="fa fa-star-half"></i>
                 <span>(450)</span>
              </div>
              <p><b>$130</b></p>
              </div>
            </div>
            <div className="course-description">
              <img src={jquery} alt="" className='courseImage' />
              <div className="course-detail">
              <span>Updated 3/6/23</span>
              <p><b>React.Js Beginners Courses</b></p>
              <div className="grade-stars">
                <i className='fa fa-star'></i>
                <i className="fa fa-star"></i>
                 <i className="fa fa-star"></i>
                 <i className="fa fa-star-half-o"></i>
                 <span>(3350)</span>
              </div>
              <p><b>$257</b></p>
              </div>
            </div>
            <div className="course-description">
              <img src={p4} alt="" className='courseImage' />
              <div className="course-detail">
              <span>Updated 15/5/23</span>
              <p><b>Ruby Beginners Courses</b></p>
              <div className="grade-stars">
                <i className='fa fa-star'></i>
                <i className="fa fa-star"></i>
                 <i className="fa fa-star"></i>
                 <i className="fa fa-star-half"></i>
                 <span>(550)</span>
              </div>
              <p><b>$157</b></p>
              </div>
            </div>
            <div className="course-description">
              <img src={p5} alt="" className='courseImage' />
              <div className="course-detail">
              <span>Updated 3/2/23</span>
              <p><b>Switf Beginners Courses</b></p>
              <div className="grade-stars">
                <i className='fa fa-star'></i>
                <i className="fa fa-star"></i>
                 <i className="fa fa-star"></i>
                 <i className="fa fa-star-half-stroke"></i>
                 <span>(50)</span>
              </div>
              <p><b>$55</b></p>
              </div>
            </div>
            <div className="course-description">
              <img src={p6} alt="" className='courseImage' />
              <div className="course-detail">
              <span>Updated 1/1/23</span>
              <p><b>Jquery Beginners Courses</b></p>
              <div className="grade-stars">
                <i className='fa fa-star'></i>
                <i className="fa fa-star"></i>
                 <i className="fa fa-star"></i>
                 <i className="fa fa-star"></i>
                 <span>(50)</span>
              </div>
              <p><b>$60</b></p>
              </div>
            </div>
          </div>
        </div>
       </section>

       {/* KNOWLEDGE */}
       <section className="knowledge">
          <div className="knowledge-container">
            <img src={p7} alt="" className='knowImage' />
            <div className="knowledge-text">
              <h2>Want to share your knowledge? Join a mentor online</h2>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur aspernatur repellat accusamus quasi nisi repellendus quisquam! Maiores maxime dolor hic totam provident doloribus eum illo, placeat, atque, neque iure! Nesciunt.</p>
               <button>Learn more</button>
            </div>
          </div>
       </section>
       {/* EXPERT SECTION */}
        <section className="expert">
           <h2>Our Community Experts</h2>
          <div className="expert-container">
            <div className="expert-description">
              <div className="expert-detail">
                <img src={portrait} alt="" class="expertImage" />
                <div className="expert-text">
                  <h4>James Smith</h4>
                  <p>Angular Expert</p>
                </div>
                <div className="expert-icon">
                  
                </div>
              </div>
              <div className="expert-detail">
                <img src={portrait1} alt="" class="expertImage" />
                <div className="expert-text">
                  <h4>Marc Gregor</h4>
                  <p>Javascript Expert</p>
                </div>
                <div className="expert-icon">
                 
                </div>
              </div>
              <div className="expert-detail">
                <img src={portrait3} alt="" class="expertImage" />
                <div className="expert-text">
                  <h4>Williams Nilson</h4>
                  <p>React Expert</p>
                </div>
                <div className="expert-icon">
                 
                </div>
              </div>
              <div className="expert-detail">
                <img src={portrait13} alt="" class="expertImage" />
                <div className="expert-text">
                  <h4>Kim Nathasha</h4>
                  <p>Python Expert</p>
                </div>
                <div className="expert-icon">
                  
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='trust'>
           <div className="trust-title">
            <p>Trusted By</p>
            <h2>500+ Leading Universities And companies</h2>
           </div>
           <div className="trust-image">
            <img src={coca} alt="" className='imageTrust'/>
            <img src={oppo} alt="" className='imageTrust' />
            <img src={paypal} alt="" className='imageTrust'/>
            <img src={philip} alt=""className='imageTrust'  />
            <img src={microsoft} alt="" className='imageTrust'/>
           </div>
        </section>
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

export default Home
