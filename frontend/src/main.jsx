import { BrowserRouter,Routes,Route } from "react-router"
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Signup from './Components/LoginSignup/Signup'
import Login from "./Components/LoginSignup/Login.jsx"
import DashEvent from "./Components/DashBoard/DashEvent/DashEvent.jsx"
import DashForm from "./Components/DashBoard/DashForm/DashForm.jsx"
import ManageEvent from "./Components/DashBoard/DashManageEvent/ManageEvent.jsx"
import Blog from "./Components/Blog/Blog.jsx"
import Reminder from "./Components/DashBoard/Reminder/Reminder.jsx"
import YourRegistrations from "./Components/DashBoard/DashYourRegistration/YourRegistrations.jsx"

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/signup" element={<Signup/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/dashboard/events" element={<DashEvent />}></Route>
      <Route path="/dashboard/eventform" element={<DashForm/>}></Route>
      <Route path="/dashboard/manage" element={<ManageEvent/>}></Route>
      <Route path="/dashboard/reminder" element={<Reminder/>}></Route>
      <Route path="/dashboard/registration" element={<YourRegistrations/>}></Route>
      <Route path="/blog" element={<Blog />}></Route>
    </Routes>
  </BrowserRouter>
)
