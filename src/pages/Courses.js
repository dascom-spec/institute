
import "../styles/Courses.css"
import { CourseList } from '../components/CourseList'
import { CourseContext } from "../Helpers/CourseContext"
import {useContext} from 'react'
import {Link} from 'react-router-dom';
import soft14 from "../assets/soft14.jpg"



const Courses =()=>{

  const courseStyle ={
    backgroundImage:`url(${soft14})`,
    height:'50vh',
    backgroundPosition:'center',
    backgroundRepeat:'no-repeat',
    backgroundSize:'cover',
  }

  const{addCourse} = useContext(CourseContext)

  return (
    <div className='courseMain'>
      <div className="courseBackground" style={courseStyle}>
         <h1>List  of  Courses/</h1>
      </div>
      <div className="wrapperCourse"> 
        <h2>Courses List</h2>
        <div className="containerCourse">
          {CourseList.map((list) =>(
            <div className="courseDescription" key={list.id}>
              <img src={list.image} alt=""  className='imageCourse'/>
              <div className="detailCourse">
                 <p><b>{list.name}</b></p>
                 <p><b>Instructor:{list.instructor}</b></p>
                 <p><b>${list.price}</b></p>
              </div>
              <div className="iconCourse">
                   <i className='fa fa-star'></i>
                   <i className="fa fa-star"></i>
                   <i className="fa fa-star"></i>
                   <i className="fa fa-star"></i>
              </div>
              <Link to="/Overview" className='buttonCourse' onClick={() => addCourse(list)}>View detail</Link>
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

export default Courses


