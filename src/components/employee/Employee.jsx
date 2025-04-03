import React from 'react'
import { BuildingIcon, UserAddOutlineIcon } from '../../assets/icons/icon'
import { Link } from 'react-router'

const Employee = () => {
  return (
    <div className="employee">
        <h2 className="page-title">Employee</h2>
        <div className="card-wrapper">
            <Link to={'/employee-list'} className="emp-card">
                <UserAddOutlineIcon />
                <span>Employee</span>
            </Link>
            <Link to={''} className="emp-card">
                <BuildingIcon />
                <span>Org Config</span>
            </Link>
        </div>
    </div>
  )
}

export default Employee