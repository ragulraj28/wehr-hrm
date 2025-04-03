import React from 'react'
import { Link } from 'react-router'
import { UserAddOutlineIcon, UserGraphIcon } from '../../assets/icons/icon'

const Attendance = () => {

  return (

    <div className="attendance">

      <h2 className="page-title">Attendance</h2>

      <div className="card-wrapper">

        <Link to={'/leave-request'} className="emp-card">

          <UserAddOutlineIcon />

          <span>Leave Request</span>

        </Link>

        <Link to={'/attendance-list'} className="emp-card">

          <UserGraphIcon />

          <span>Attendances</span>

        </Link>

      </div>

    </div>

  )

}

export default Attendance