
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import Contact from './pages/Contact'
import Overview from './pages/Overview';
import Registration from './pages/Registration';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
       <Route path="/"  element={<Home/>} />
       <Route path="/About"  element={<About/>} />
       <Route path="/Courses"  element={<Courses/>} />
       <Route path="/Overview"  element={<Overview/>} />
       <Route path="/Registration"  element={<Registration/>} />
       <Route path="/Contact"  element={<Contact/>} />
       </Routes>
    </Router>
  );
}

export default App;
