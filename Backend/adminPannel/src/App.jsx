<<<<<<< HEAD
import React from 'react'
import Login from './pages/login'
// import {Routes, Route} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import { useContext } from 'react';
import { AppContext } from './context/appContext';
import { AdminContext } from './context/adminContext';
import NavBar from './component/NavBar';
import SideBar from './component/SideBar';
import { Route, Routes } from 'react-router-dom';
import DashBoard from './pages/Admin/DashBoard';
import Appointment from './pages/Admin/Appointment';
import AddDoctor from './pages/Admin/AddDoctor';
import DoctorList from './pages/Admin/DoctorList';
import { DoctorContext } from './context/doctorContext';
import DoctorProfile from './pages/Doctors/DoctorProfile';
import DoctorDashBoard from './pages/Doctors/DoctorDashBoard';
import DoctorApponitment from './pages/Doctors/DoctorApponitment';
import DoctorQueue from './pages/Doctors/DoctorQueue';
import ConsultationDoctor from './pages/Doctors/ConsDoctor'
import Queue from './pages/Admin/Queue';
import VideoConsDoc from './pages/Doctors/VideoConsDoc'

const App = () => {
  const { aToken } = useContext(AdminContext)
  const {dToken} =useContext(DoctorContext)
  return aToken || dToken ? (
    <div>
       <ToastContainer />
       <NavBar />
       <div className='flex items-start'>
        <SideBar />
        <Routes>
          {/* adimin routes */}
          <Route path='/' element={<></>} />
          <Route path='/login' element={<Login />} />

            <Route path='/admin-dashboard' element={<DashBoard />} />
            <Route path='/appointment' element={<Appointment />} />
            <Route path='/add-Doctor' element={<AddDoctor />} />
            <Route path='/doctor-list' element={<DoctorList />} />
            <Route path='/queue-details' element={<Queue />} />


            {/* Doctor route */}
            <Route path='/doctorApponitment' element={<DoctorApponitment />} />
            <Route path='/doctorProfile' element={<DoctorProfile />} />
            <Route path='/doctorDashBoard' element={<DoctorDashBoard />} />
            <Route path='/doctorQueue' element={<DoctorQueue />} />
            <Route path='/docCons/:queueId' element={<ConsultationDoctor />} />
            <Route path='/vidCons/:appointmentId' element={<VideoConsDoc />} />

        </Routes>
       </div>
    </div>
  ):(
    <>
        <Login />
       <ToastContainer />
    </>
=======
import Home from './Home'
import Nav from './Nav'
import Header from './Header'
import Footer from './Footer'
import Login from './login'
import Doctors from './Doctors'
import About from './About'
import { Routes, Route } from 'react-router-dom'
import useWindowSize from './hooks/windowsize'
import Contact from './Contact'
import MyProfile from './MyProfile'
import MyAppointment from './MyAppointment'
import Appointment from './Appointment'
import Practice from './practice'
import Services from './Services'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import QueueGenerate from './QueueGenerate'
import Consultationvideo from './Consultationvideo'
// import Consultaion from './userConst'


function App() {

  

const {width} = useWindowSize();
  return (
    <div className="
  
  mx-2
  sm:mx-[5%]
  bg-gradient-to-br
  from-slate-50
  via-white
  to-blue-50/50
">
      <ToastContainer />
     
      
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='service' element={<Services />} />
        <Route path='/doctors/:speciality' element={<Doctors />} />
        <Route path='/Login' element={<Login />} /> 
        <Route path='/doctors' element={<Doctors />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/my-profile' element={<MyProfile />} />
        <Route path='/my-appointment' element={<MyAppointment />} />
        <Route path='/appointment/:docId' element={<Appointment />} />userCons
        <Route path='/queueGenerate' element={<QueueGenerate />} />
        {/* <Route path='/service' element={<Services />} /> */}
        <Route path='/liveVideo/:appointmentId' element={<Consultationvideo />} />
      </Routes>
       <Footer />
    </div>
>>>>>>> ca0e4dc50d35e287e6cdae3c7c8f3c14254d8e7f
  )
}

export default App
