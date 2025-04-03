import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const BirthdayCard = ({empProfile, empName, empDesignation, empDob}) => {

    return(

        <div className="birthday-card">

            <figure className='profile-pic'>
                
               { empProfile ? <img src={empProfile} alt={empName} /> : <div className='bg-gray-300 h-full w-full'></div> }

            </figure>

            <h4 className="name">{empName}</h4>

            <p className="info">

                {empDesignation} <br /> {empDob}

            </p>

        </div>
        
    )

}

const BirthdayCalendar = ({userDetails}) => {

  return (

    <div className='birthday-calendar'>

        <h3 className='sec-title'>Birthday Calendar</h3>
 
        <Swiper className="birthday-wrapper" slidesPerView={"auto"} spaceBetween={"30px"}>

            { userDetails.length > 0 ? userDetails?.map((userInfo, index) => <SwiperSlide style={{ width: "250px"}}><BirthdayCard key={index} {...userInfo}/></SwiperSlide>) : <p className='mt-10 w-full text-center text-sm'>No one celebrating birthday on this day.</p> }

        </Swiper>

    </div>

  )

}

export default BirthdayCalendar