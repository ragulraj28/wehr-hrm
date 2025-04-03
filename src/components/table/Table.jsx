import React, { useEffect, useMemo, useState } from 'react'
import Search from '../search/Search'
import { AgGridReact } from 'ag-grid-react';
import { AllCommunityModule, ModuleRegistry, themeQuartz } from 'ag-grid-community'; 
import useResize from '../../hooks/resizeHook';

// Register all Community features
ModuleRegistry.registerModules([AllCommunityModule]);

const myTheme = themeQuartz.withParams({
    fontFamily: "Inter"
})

const Table = ({tableTitle, searchValue, searchHandler, rowData, colDefs, rowSelection}) => {

    const winWidth = useResize();

    const customComponent = (props) => {        
        const{ empId, empName, empDesignation, empEmail, empJoinDate, empStatus } = props.data;
        return (
            <div className="mobile-view-table-cell">
                <p className="emp-id"><strong>Id:</strong> {empId}</p>
                <p className="name"><strong>Name:</strong> {empName}</p>
                <p className="email"><strong>Email:</strong> {empEmail}</p>
                <p className="designation"><strong>Designation:</strong> {empDesignation}</p>
                <p className="join-date"><strong>Join Date:</strong> {empJoinDate}</p>
                <p className="status"><strong>Status:</strong> {empStatus}</p>
            </div>
        )
    }

    const theme = useMemo(() => {
        return myTheme;
    })

    const colCustomDefs = winWidth >= 1024 ? colDefs : [{field: 'name',headerName: 'Employee' , cellRenderer: customComponent, flex: 1, headerClass: 'mobile-header'}]

  return (
    <div className="table-wrapper">
            <div className="table-header">
                <h4 className='table-title'>{tableTitle} <span>{rowData?.length}</span></h4>
                <div className="search-wrapper">
                    <Search placeholder={'Type here'} ref={searchValue} onChange={searchHandler}/>
                </div>
            </div>
            <AgGridReact rowData={rowData} defaultColDef={{autoHeight: true,}} columnDefs={colCustomDefs} domLayout='autoHeight' rowSelection={rowSelection} theme={theme}/>
    </div>
  )
}

export default Table