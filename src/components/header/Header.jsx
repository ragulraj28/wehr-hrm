import React from 'react'
import userProfile from '/assets/user.jpg'
import { BellIcon, ChevronDownIcon, MessageIcon } from '../../assets/icons/icon'

const Header = ({leftCol}) => {

  return (
    <header>
        <div className="left-col">
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