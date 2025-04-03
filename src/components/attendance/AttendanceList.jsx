import React, { useContext, useRef, useMemo, useState } from 'react'
import SubHeader from '../subHeader/SubHeader'
import Table from '../table/Table'
import { HorizontalDotsIcon } from '../../assets/icons/icon'
import { EmployeeContext } from '../../contexts/EmployeeContext'
import { useNavigate } from 'react-router'

// Table custom columns

const Options = (props) => {    

  return (

    <button>

      <HorizontalDotsIcon />

    </button>

  )

}

const NameEmailCell = (props) => {

  return (

    <div className="name-email-cell">

      <h5 className='name'>{props?.data?.empName}</h5>

      <p className="email">{props?.data?.empEmail}</p>

    </div>

  )

}

// Component starts here

const AttendanceList = () => {

  const {employees} = useContext(EmployeeContext);

  const[rowData, setRowData] = useState(employees);

  const searchValue = useRef();

  const navigate = useNavigate();

  const colDefs = [

    { headerName: '', field: 'empId', flex: 2, sortable: false, cellStyle: { fontWeight: "600", color: "black", fontSize: "14px" } },

    { field: 'empName', headerName:'Name', flex: 4, sortable: true, headerClass: 'btn-bg', cellRenderer: NameEmailCell },

    { field: 'empJoinDate', headerName:'Join Date', flex: 3, headerClass: 'btn-bg' },

    { field: 'empDesignation', headerName:'Designation', flex: 3, headerClass: 'btn-bg' },

    { field: 'empStatus', headerName:'Status', flex: 3, headerClass: 'btn-bg' },

    { field: 'options', cellRenderer: Options, flex: 2, sortable: false }

  ];

  const searchHandler = () => {

    let searchText = searchValue?.current?.value?.toLowerCase();

    let filteredData = employees?.filter(data =>

      data?.empId?.toLowerCase().includes(searchText) ||

      data?.empName?.toLowerCase().includes(searchText) ||

      data?.empDesignation?.toLowerCase().includes(searchText) ||

      data?.empStatus?.toLowerCase().includes(searchText) ||

      data?.empJoinDate?.toLowerCase().includes(searchText) ||

      data?.empEmail?.toLowerCase().includes(searchText)

    );
    
    setRowData(filteredData);
      
  }

  const tableProps = {

    tableTitle: "Attendances",

    rowData: rowData,

    colDefs: colDefs,

    rowSelection: useMemo(() => ({ mode: 'singleRow' }), []),

    searchValue: searchValue,

    searchHandler: searchHandler

  }

  const addHandler = () => {

    navigate('/create-employee');
  
  }

  return (

    <div className='attendance-list'>

      <SubHeader title={"Attendances"} addHandler={addHandler}/>

      <Table {...tableProps} />

    </div>

  )
  
}

export default AttendanceList