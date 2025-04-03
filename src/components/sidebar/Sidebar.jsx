import React, { useContext, useEffect } from 'react'
import { CalendarIcon, DashboardIcon, SettingIcon, ShareIcon, SupportIcon, TaskIcon, UserAddIcon, UserGroupIcon, XCrossIcon } from '../../assets/icons/icon'
import { data, Link } from 'react-router'
import { SidebarToggleContext } from '../../contexts/SidebarToggle'
import useResize from '../../hooks/resizeHook'

const Sidebar = () => {

  const{ sidebarToggle, setSidebarToggle } = useContext(SidebarToggleContext);
  const winWidth = useResize();

  const handleClick = () => setSidebarToggle(prev => !prev);

  return (
    <aside className={`sidebar ${(!sidebarToggle && winWidth <=1280) ? 'hidden' : 'block'}`}>
        <div className="logo">WeHR</div>
        <span className='sidebar-close' onClick={handleClick}><XCrossIcon/></span>
        <ul className='nav-list'>
            <li className='nav-item'>
                <Link to={'/'} onClick={handleClick}>
                    <div className="icon">
                        <DashboardIcon />
                    </div>
                    Dashboard
                </Link>
            </li>
            <li className='nav-item'>
                <Link to={'/employee'} onClick={handleClick}>
                    <div className="icon">
                        <UserAddIcon />
                    </div>
                    Employee
                </Link>
            </li>
            <li className='nav-item'>
                <Link to={'/attendance'} onClick={handleClick}>
                    <div className="icon">
                        <CalendarIcon />
                    </div>
                    Attendance
                </Link>
            </li>
            <li className='nav-item'>
                <Link to={'/payroll'} onClick={handleClick}>
                    <div className="icon">
                        <UserGroupIcon />
                    </div>
                    PayRoll
                </Link>
            </li>
            <li className='nav-item'>
                <Link to={'/task'} onClick={handleClick}>
                    <div className="icon">
                        <TaskIcon />
                    </div>
                    Task
                </Link>
            </li>
            <li className='nav-item'>
                <Link to={'/announcement'} onClick={handleClick}>
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
                <Link to={'/support'} onClick={handleClick}>
                    <div className="icon">
                        <SupportIcon />
                    </div>
                    Support
                </Link>
            </li>
            <li className='nav-item'>
                <Link to={'/settings'} onClick={handleClick}>
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