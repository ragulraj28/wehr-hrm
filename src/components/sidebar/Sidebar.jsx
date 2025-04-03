import React from 'react'
import { CalendarIcon, DashboardIcon, SettingIcon, ShareIcon, SupportIcon, TaskIcon, UserAddIcon, UserGroupIcon } from '../../assets/icons/icon'
import { Link } from 'react-router'

const Sidebar = () => {
  return (
    <aside className='sidebar'>
        <div className="logo">WeHR</div>
        <ul className='nav-list'>
            <li className='nav-item'>
                <Link to={'/'}>
                    <div className="icon">
                        <DashboardIcon />
                    </div>
                    Dashboard
                </Link>
            </li>
            <li className='nav-item'>
                <Link to={'/employee'}>
                    <div className="icon">
                        <UserAddIcon />
                    </div>
                    Employee
                </Link>
            </li>
            <li className='nav-item'>
                <Link to={'/attendance'}>
                    <div className="icon">
                        <CalendarIcon />
                    </div>
                    Attendance
                </Link>
            </li>
            <li className='nav-item'>
                <Link to={'/payroll'}>
                    <div className="icon">
                        <UserGroupIcon />
                    </div>
                    PayRoll
                </Link>
            </li>
            <li className='nav-item'>
                <Link to={'/task'}>
                    <div className="icon">
                        <TaskIcon />
                    </div>
                    Task
                </Link>
            </li>
            <li className='nav-item'>
                <Link to={'/announcement'}>
                    <div className="icon">
                        <ShareIcon />
                    </div>
                    Announcement
                </Link>
            </li>
        </ul>
        <ul className='nav-list other'>
            <p className='sub-title'>Other</p>
            <li className='nav-item'>
                <Link to={'/support'}>
                    <div className="icon">
                        <SupportIcon />
                    </div>
                    Support
                </Link>
            </li>
            <li className='nav-item'>
                <Link to={'/settings'}>
                    <div className="icon">
                        <ShareIcon />
                    </div>
                    Settings
                </Link>
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar