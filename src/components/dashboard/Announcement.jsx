import React from 'react'
import { HorizontalDotsIcon } from '../../assets/icons/icon'

const Announcement = () => {

    return (

      <div className="announcement">

        <div className="announcement-header">
          
          <h4 className="sec-title">Announcement</h4>

          <div className="filter">Today, 13 Sep 2021</div>

        </div>

        <div className="announcement-body">

          <div className="announcement-card">

          <div className="info">

            <h5 className="card-title">Outing schedule for every departement</h5>

            <p className="time-stamp">5 Minutes ago</p>

          </div>

          <button className='options'>

            <HorizontalDotsIcon />

          </button>

          </div>

          <div className="announcement-card">

          <div className="info">

            <h5 className="card-title">Outing schedule for every departement</h5>

            <p className="time-stamp">5 Minutes ago</p>

          </div>

          <button className='options'>

            <HorizontalDotsIcon />

          </button>

          </div>

          <div className="announcement-card">

          <div className="info">

            <h5 className="card-title">Outing schedule for every departement</h5>

            <p className="time-stamp">5 Minutes ago</p>

          </div>

          <button className='options'>

            <HorizontalDotsIcon />

          </button>

          </div>

        </div>

        <div className="announcement-footer">

          <button>See All Announcements</button>

        </div>

      </div>

    )

}

export default Announcement