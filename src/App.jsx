import { useEffect, useState } from 'react'
import Login from './components/login/Login'
import Main from './components/main/Main'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router';
import ProtectedRoute from './components/protectedRoute/ProtectedRoute';
import Dashboard from './components/dashboard/Dashboard';
import Employee from './components/employee/Employee';
import Attendance from './components/attendance/Attendance';
import PayRoll from './components/payRoll/PayRoll';
import Task from './components/task/Task';
import Announcement from './components/announcement/Announcement';
import Support from './components/support/Support';
import Settings from './components/settings/Settings';
import EmployeeList from './components/employee/EmployeeList';
import CreateEmployee from './components/createEmployee/CreateEmployee';
import { EmployeeProvider } from './contexts/EmployeeContext';
import empData from './assets/empData.json';
import AttendanceList from './components/attendance/AttendanceList';
import LeaveRequest from './components/attendance/leaveRequest/LeaveRequest';
import Search from './components/search/Search';
import { SidebarToggleProvider } from './contexts/SidebarToggle';

function App() {

  const credentials = {companyId: 'wehr2025', password:'wehr2025'};

  const [isLoggedIn , setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') == 'true');

  if(!localStorage.getItem("empDetails")) {

    localStorage.setItem("empDetails", JSON.stringify(empData))

  }    

  return (

    <SidebarToggleProvider>

      <EmployeeProvider>

        <BrowserRouter>

          <Routes>

            <Route path='/login' element={<Login credentials={credentials} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />}/>

            <Route path='/' element={<ProtectedRoute isLoggedIn={isLoggedIn}><Main headerLeftCol={<Search placeholder={'Search Employee'}/>}><Dashboard /></Main></ProtectedRoute>}/>
            
            <Route path='/employee' element={<ProtectedRoute isLoggedIn={isLoggedIn}><Main><Employee /></Main></ProtectedRoute>}/>
            
            <Route path='/create-employee' element={<ProtectedRoute isLoggedIn={isLoggedIn}><Main headerLeftCol={<h2 className='page-title'>Employee</h2>}><CreateEmployee /></Main></ProtectedRoute>}/>
            
            <Route path='/employee-list' element={<ProtectedRoute isLoggedIn={isLoggedIn}><Main><EmployeeList /></Main></ProtectedRoute>}/>
            
            <Route path='/attendance' element={<ProtectedRoute isLoggedIn={isLoggedIn}><Main><Attendance /></Main></ProtectedRoute>}/>
            
            <Route path='/attendance-list' element={<ProtectedRoute isLoggedIn={isLoggedIn}><Main><AttendanceList /></Main></ProtectedRoute>}/>
            
            <Route path='/leave-request' element={<ProtectedRoute isLoggedIn={isLoggedIn}><Main headerLeftCol={<h2 className='page-title'>Leave Request</h2>}><LeaveRequest /></Main></ProtectedRoute>}/>
            
            <Route path='/payroll' element={<ProtectedRoute isLoggedIn={isLoggedIn}><Main><PayRoll /></Main></ProtectedRoute>}/>
            
            <Route path='/task' element={<ProtectedRoute isLoggedIn={isLoggedIn}><Main><Task /></Main></ProtectedRoute>}/>
            
            <Route path='/announcement' element={<ProtectedRoute isLoggedIn={isLoggedIn}><Main><Announcement /></Main></ProtectedRoute>}/>
            
            <Route path='/support' element={<ProtectedRoute isLoggedIn={isLoggedIn}><Main><Support /></Main></ProtectedRoute>}/>
            
            <Route path='/settings' element={<ProtectedRoute isLoggedIn={isLoggedIn}><Main><Settings /></Main></ProtectedRoute>}/>
          
          </Routes>

        </BrowserRouter>

      </EmployeeProvider>
      
    </SidebarToggleProvider>
    
  )


}

export default App
