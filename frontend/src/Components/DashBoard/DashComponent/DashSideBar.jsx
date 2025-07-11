import React from 'react'
import "./DashStyles.css"
import { useNavigate } from 'react-router'
function DashSideBar({active}) {
  const navigate = useNavigate()
  return (
    <>
      <div className="activeOptionDash flex">
        <div className='flex' style={{"width": "80%","height": "50%","justify-content": "start"}}>
          <img className='arrow-sidebar
          ' src='/arrow.png' />
          <span><b>All</b> <i>Events</i></span>
        </div>
      </div>
      <div className="sideBarDashOptions flex">
        <div className="upperDashSidebar">
          <div className="contentUpperDash-sidebar flex">
            <div onClick={() => navigate("/")} className="home-sidebar sidebar-content flex">
              <i class="fa-solid fa-house"></i>
              <span className='addMargin-sidebar'>Home</span>
            </div>
            <div onClick={() => navigate("/dashboard/events")} className="home-sidebar sidebar-content flex">
              <i class="fa-regular fa-paper-plane"></i>
              <span className='addMargin-sidebar'>All Events</span>
            </div>
            <div onClick={() => navigate("/dashboard/registration")} className="home-sidebar sidebar-content flex">
              <i class="fa-solid fa-chart-simple"></i>
              <span className='addMargin-sidebar'>Your Registrations</span>
            </div>
            <div onClick={() => navigate("/dashboard/eventform")} className="home-sidebar sidebar-content flex">
              <i class="fa-solid fa-plus"></i>
              <span className='addMargin-sidebar'>Host an Event</span>
            </div>
            <div onClick={() => navigate("/dashboard/manage")} className="home-sidebar sidebar-content flex">
              <i class="fa-solid fa-bars-progress"></i>
              <span className='addMargin-sidebar'>Manage your Event</span>
            </div>
            {/* Upcoming Feature */}
            <div onClick={() => navigate("/dashboard/reminder") } className="home-sidebar sidebar-content flex">
              <i class="fa-solid fa-bell"></i>
              <span className='addMargin-sidebar'>Reminders</span>
            </div>
          </div>
        </div>
        <div className="lowerDashSidebar flex">
          <div className="profile flex">
            <i class="fa-solid fa-user"></i>
          </div>
          <span>Profile</span>
        </div>
      </div>
    </>
  )
}

export default DashSideBar
