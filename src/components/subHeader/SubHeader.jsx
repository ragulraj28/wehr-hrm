import React from 'react'
import { PlusIcon } from '../../assets/icons/icon'

const SubHeader = ({title, importHandler, addHandler}) => {
  return (
    <div className='sub-header'>
        <h2 className="page-title">{title}</h2>
        <div className="cta-wrapper">
            <button className="cta-btn outline" onClick={importHandler}><PlusIcon /> Import Excel</button>
            <button className="cta-btn fill" onClick={addHandler}><PlusIcon /> Add Employee</button>
        </div>
    </div>
  )
}

export default SubHeader