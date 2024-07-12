import './App.css';
import Home from './Home';
import Footer from './Navbar/Footer';
import Bar from './Navbar/Nav';
import About from './About';
import Servies from './Servies';
import Project from './project/Project';
import Contact from './Contact';
import Login from './Login';
import Register from './Register';
import Cont from './Contact1';
import Register1 from './Reg';
import Loginnew from './Log';

import Nav from './Navbar/Nav';
import { Route, Routes } from 'react-router-dom';
import Resid from './project/Residance';
import Resid1 from './project/Residential1';
import Resid2 from './project/Residential2';
import Inter from './project/Interior';
import Renov from './project/Renovation';
import Renovation from './List/Renovation1';
import Design from './List/Design';
import Plan from './List/Plan';
import Reno from './contact/Renovation2';
import Des from './contact/Design1';
import Pla from './contact/Plan2';
import Reg from './project/Reg1';
import Login1 from './project/login1';
import { ToastContainer, toast } from 'react-toastify';


function App() {
  return (
    <>
    <div >
      <Bar/>
      <ToastContainer />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='servies' element={<Servies/>}/>
        <Route path='project' element={<Project/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='cont' element={<Cont/>}/>
        <Route path='resid' element={<Resid/>}/>
        {/* <Route path='register' element={<Register/>}/> */}
      {/* <Route path='login' element={<Login/>}/> */}
      <Route path='resid1' element={<Resid1/>}/>
      <Route path='resid2' element={<Resid2/>}/>
      <Route path='inter' element={<Inter/>}/>
      <Route path='renov' element={<Renov/>}/>
      <Route path='renovation' element={<Renovation/>}/>
      <Route path='design' element={<Design/>}/>
      <Route path='plan' element={<Plan/>}/>
      <Route path='reno' element={<Reno/>}/>
      <Route path='des' element={<Des/>}/>
      <Route path='pla' element={<Pla/>}/>
      {/* <Route path='reg' element={<Register1/>}/> */}
      <Route path='regis' element={<Reg/>}/>
      <Route path='log' element={<Login1/>}/>
      </Routes>
      <Footer/>
      
    </div>
     

    </>
  );
}

export default App;
