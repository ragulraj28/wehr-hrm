import React from 'react'
import Sidebar from '../sidebar/Sidebar'
import Header from '../header/Header'
import Search from '../search/Search'
import { useLocation } from 'react-router'

const RightContainer = ({children, headerLeftCol}) => {

  return(

    <div className='right-container'>

      <Header leftCol={headerLeftCol} />

      <div className="scroll-container">

        {children}

      </div>

    </div>

  )

}

const Main = ({children, headerLeftCol}) => {

  const location = useLocation();  

  return (

    <main className={`main-container ${location?.pathname == '/' ? 'bg-white' : 'bg-sec-background'}`}>

      <Sidebar />

      <RightContainer headerLeftCol={headerLeftCol}>

        {children}

      </RightContainer>

    </main>

  )

}

export default Main