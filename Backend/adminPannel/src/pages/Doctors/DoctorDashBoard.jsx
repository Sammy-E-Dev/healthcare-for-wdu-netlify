import React, { useContext, useEffect } from 'react'
import { DoctorContext } from '../../context/doctorContext'
import {assets} from '../../assets/assets_admin/assets'
import { AdminContext } from '../../context/adminContext'
import { AppContext } from '../../context/AppContext'
import { MdQueue } from "react-icons/md";
import { MdFormatListNumbered } from "react-icons/md";



const DoctorDashBoard = () => {
  const { dToken, dashData,
       setDashData, getDashData, cancelledAppointment} = useContext(DoctorContext)
  const {slotDateFormat} = useContext(AppContext)
       useEffect(()=>{
        if(dToken){
          getDashData()
        }
       },[dToken])
  return dashData && (
   <div className='m-5 flex flex-col w-full'>

      <div className='flex w-full  gap-4'>

         <div className='flex  items-center h-33 w-full gap-3 bg-white p-5 rounded-2xl border-3 border-gray-300 justify-between shadow-lg hover:shadow-lg hover:-translate-y-1 cursor-pointer hover:scale-[1.02] transition-all duration-300'>
          <img className='w-14 h-14 object-contain' src={assets.patients_icon} alt="" />
          <div>
            <p className='text-3xl w-22 rounded-full font-bold bg-blue-700 text-center text-white'>{dashData?.patients}</p>
            <p className='text-lg text-center text-gray-400 font-medium'>Patient</p>
          </div>
        </div>

         <div className='flex h-33 w-full gap-3 justify-between items-center gap-3 bg-white border border-gray-200 p-5 rounded-2xl border-3  shadow-sm hover:shadow-lg hover:-translate-y-1 cursor-pointer hover:scale-[1.02] transition-all duration-300'>
          <img className='w-16  h-14 object-contain' src={assets.appointments_icon} alt="" />
          <div>
            <p className='text-3xl font-bold bg-blue-700 rounded-full text-center text-white'>{dashData?.appointments}</p>
            <p className='text-lg text-gray-400 font-medium'>Appointment</p>
          </div>
        </div>

        <div className='flex h-33 w-full gap-3 items-center gap-3 bg-white p-5 rounded-2xl justify-between border-3 border-gray-300 shadow-sm hover:shadow-lg hover:-translate-y-1 cursor-pointer hover:scale-[1.02] transition-all duration-300'>
          {/* <img className='w-14 h-14 object-contain' src={assets.patients_icon} alt="" /> */}
          {/* <MdQueue /> */}

            <MdFormatListNumbered className='w-14 h-13 bg-gray-300 rounded object-contain' />
          <div>
            <p className='text-3xl font-bold bg-blue-700 rounded-full text-center text-white'>{dashData?.QueueNumber}</p>
            <p className='text-lg text-gray-400 font-medium'>Queue Number</p>
          </div>
        </div>

      </div>


<div className='bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden mt-6'>

        <div className='flex items-center gap-2.5 px-4 mt-1 py-4 rounded-t-2xl border-b border-gray-200 bg-gradient-to-r from-gray-50 to-white'>
          <img className='w-5 h-5 object-contain' src={assets.list_icon} alt="" />
          <p className='text-gray-700 font-semibold text-base'>Latest Bookings</p>
        </div>

        <div className='pt-4 border border-t-0 border-gray-100'>

          {
            dashData.latestAppointments.map((item, index)=>(

              <div className='flex gap-4 items-center px-6 py-4 border-b border-gray-100 last:border-b-0 hover:bg-blue-50/50 transition-all duration-300' key={index}>

                <img className='rounded-full bg-blue-50 w-15 h-15 object-cover border-2 border-white shadow-sm ring-1 ring-gray-200' src={item.userData.image} alt="" />

                <div className='flex-1 text-xl'>
                  <p className='text-gray-800 font-semibold text-sm sm:text-base'>{item.userData.name}</p>
                  <p className='text-gray-500 text-xs sm:text-sm mt-1'>{slotDateFormat(item.slotDate)}</p>
                </div>

                {
                item.cancelled ? <p className="
                inline-flex items-center gap-2 px-3 py-2 rounded-xl  bg-red-50
                border border-red-200  text-red-600 text-xs sm:text-sm font-semibold shadow-sm ">
                <span className="w-2 h-2 rounded-full bg-red-500"></span>
                Cancelled
                </p>
                : item.isCompleted ? <p className="
                inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-600 text-xs sm:text-sm font-semibold shadow-sm ">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                Completed
                </p> : 
                <div className=" flex items-center gap-2 md:justify-center pt-1 md:pt-0">
                <img
                  onClick={()=>cancelAppointment(item._id)}
                  className=" w-37 h-10 p-2.5 rounded-xl cursor-pointer bg-red-50 border border-red-100 hover:bg-red-500 hover:border-red-500 hover:shadow-lg hover:shadow-red-100 hover:scale-105 active:scale-95 transition-all duration-300 " src={assets.cancel_icon}
                  alt="" />
                <img
                  onClick={()=>markAppointmentComplete(item._id)}
                  className=" w-37 h-10  p-2.5 rounded-xl cursor-pointer bg-emerald-50 border border-emerald-100 hover:bg-emerald-500 hover:border-emerald-500 hover:shadow-lg hover:shadow-emerald-100 hover:scale-105 active:scale-95 transition-all duration-300 " src={assets.tick_icon} alt="" />
                </div>
             }
            


              </div>

            ))
          }

        </div>

      </div>


    </div>
  )
}

export default DoctorDashBoard
