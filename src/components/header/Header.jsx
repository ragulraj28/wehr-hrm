import React, { useContext } from 'react'
import userProfile from '/assets/user.jpg'
import { BellIcon, BurgerMenuIcon, ChevronDownIcon, MessageIcon } from '../../assets/icons/icon'
import { SidebarToggleContext } from '../../contexts/SidebarToggle'

const Header = ({leftCol}) => {

  const{ sidebarToggle, setSidebarToggle } = useContext(SidebarToggleContext);
  const mobileNavbarHandler = () => {

    setSidebarToggle(prev => !prev);

  }

  return (
    <header>
        <div className="left-col">
            <div className="mobile-menu" onClick={mobileNavbarHandler}>
                <BurgerMenuIcon />
            </div>
            {leftCol}
        </div>
        <div className="right-col">
            <div className="notification">
                <BellIcon />
            </div>
            <div className="messages">
                <MessageIcon />
            </div>
            <div className="user-info">
                <div className="user-profile">
                    <img src={userProfile} alt="user" />
                </div>
                <p className="user-name">Admirra John</p>
                <ChevronDownIcon />
            </div>
        </div>
    </header>
  )
}

export default Header