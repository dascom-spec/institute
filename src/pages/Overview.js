import React from 'react'
import "../styles/Overview.css"
import { CourseContext } from '../Helpers/CourseContext'
import {useContext} from 'react'
import {Link} from 'react-router-dom'
import soft14 from '../assets/soft14.jpg'



const Overview = () => {

  const overStyle ={
    backgroundImage:`url(${soft14})`,
    height:'50vh',
    backgroundPosition:'center',
    backgroundRepeat:'no-repeat',
    backgroundSize:'cover',
  }

    const{courseBox,clear} = useContext(CourseContext)

    if(courseBox.length===0){
      return <h3 className='boxCenter'>Oo'ps No Course Selected To Enroll !!!</h3>
     }

     


  return (
 
    <div className='overview'>
        <div className="overBackground" style={overStyle}>
         <h1>Enroll Your Course Now/</h1>
      </div>
      <div className="overview-wrapper">
        <div className="overview-container">
            {courseBox.map((course) =>(
                <div className="overview-description" key={course.id}>
                  <div className="overview-des-a">
                    <img src={course.image} alt="" className='overviewImage'/>
                     <div className="over-detail">
                      <p><b>{course.name}</b></p>
                      <p><b>${course.price}</b></p>
                     </div>
                     <div className="over-star">
                        <i className='fa fa-star'></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                  </div>
                  <h3>Instructor :{course.instructor}</h3>
                    <br />
                  <hr />
                  <br />
                  <div className="over-text">
                  <h3>Course Overview</h3>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo tenetur repudiandae nesciunt ea minima, atque architecto labore minus distinctio quidem.</p>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id nostrum cupiditate corporis sit ipsam repellendus pariatur voluptatem suscipit harum blanditiis?</p>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima dolores incidunt rerum deserunt aspernatur ipsam. Voluptatem pariatur, architecto reiciendis nesciunt provident fugiat a fugit modi, quos, commodi doloremque ex esse?</p>
                   </div>
                   <div className="over-detail">
                    <h3>What you will learn</h3>
                      <ul>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, repudiandae?</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, repudiandae?</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, repudiandae?</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, repudiandae?</li>
                      </ul>
                   </div>
                 </div>

         <div className="overview-section">
           <h2>This course includes</h2>
           <div className="explain-over">
             <div className="explain-a">
              <i className='fa fa-video' id="overIcon"></i>
              <span>60 videos</span>
             </div>
             <div className="explain-a">
              <i className='fa fa-download' id="overIcon"></i>
              <span>Fast Download</span>
             </div>
             <div className="explain-a">
              <i className='fa fa-mobile' id="overIcon" ></i>
              <span>Free Access</span>
             </div>
             <div className="explain-a">
              <i className='fa fa-award' id="overIcon"></i>
              <span>Certificate at End</span>
             </div>
             <div className="explain-a">
              <i className='fa fa-book' id="overIcon" ></i>
              <span>Multiples projects</span>
             </div>
             <div className="over-links">
             <Link to="/registration"className='enroll'>Enroll Now</Link>
             <Link to="/Courses" className='enroll'>Course list</Link>
             </div>
           </div>
           <Link className='enroll' onClick={clear}  id="idol">Clear course</Link>
          </div>       
          </div>
            ))}
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

export default Overview
