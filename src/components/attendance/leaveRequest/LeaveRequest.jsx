import React, { useRef, useState } from 'react'
import StatsCard from '../../statsCard/StatsCard'
import Table from '../../table/Table'
import leaveRequestData from '../../../assets/leaveRequest.json'
import { ClockIcon, HorizontalDotsIcon, TickRoundedIcon } from '../../../assets/icons/icon'

const StatsWithIndicator = ({title, count, style, indicator, CardComp}) => {

    return (

        <div className="stats-with-indicator">

            <CardComp title={title} count={count} style={style}/>

            <span className="indicator-data">{indicator}</span>

        </div>

    )

}

const Actions = (props) => {  

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

const Status = (props) => {

    return(

        <span className={`leave-status ${props?.data?.empLeaveStatus?.toLowerCase() === 'pending' ? 'bg-indigo-50 text-indigo-400' : 'bg-emerald-50 text-emerald-600'}`}>

            {props?.data?.empLeaveStatus}

            {props?.data?.empLeaveStatus?.toLowerCase() === 'pending' ? <ClockIcon className={'h-3 w-3'}/> : <TickRoundedIcon className={'h-3 w-3'}/>}

        </span>

    )

}

const LeaveRequest = () => {

    const [leaveRequest, setLeaveRequest] = useState(leaveRequestData);

    const [rowData, setRowData] = useState(leaveRequest);

    const searchValue = useRef();

    const colDefs = [

        { field: 'empName', headerName:'Name', flex: 4, sortable: true, headerClass: 'btn-bg', cellRenderer: NameEmailCell },

        { field: 'empLeaveRequestDate', headerName:'Request Date', flex: 4, headerClass: 'btn-bg' },

        { field: 'empLeaveType', headerName:'Leave Type', flex: 3, headerClass: 'btn-bg' },

        { field: 'empLeaveReason', headerName:'Reason', flex: 3, headerClass: 'btn-bg', },

        { field: 'empNoOfDays', headerName:'No of Days', flex: 3, headerClass: 'btn-bg' },

        { field: 'empLeaveStatus', headerName:'Status', flex: 3, headerClass: 'btn-bg', cellRenderer: Status },

        { field: 'actions', cellRenderer: Actions, flex: 3, sortable: false }

    ]

    const searchHandler = () => {

        let searchText = searchValue?.current?.value?.toLowerCase();

        let filteredData = leaveRequest?.filter(data =>

          data?.empName?.toLowerCase().includes(searchText) ||

          data?.empLeaveRequestDate?.toLowerCase().includes(searchText) ||

          data?.empLeaveType?.toLowerCase().includes(searchText) ||

          data?.empLeaveStatus?.toLowerCase().includes(searchText) ||

          data?.empLeaveReason?.toLowerCase().includes(searchText) ||

          data?.empNoOfDays?.toString()?.toLowerCase().includes(searchText)

        );

        setRowData(filteredData);
        
    }

    const tableProps = {
    
        tableTitle: "Leave Request",

        rowData: rowData,

        colDefs: colDefs,

        rowSelection: '',

        searchValue: searchValue,

        searchHandler: searchHandler
    
    }

  return (

    <div className='leave-request'>

        <div className="card-wrapper">

            <StatsWithIndicator title={"Casual Leave"} count={'04'} style={{backgroundColor: '#FFEFE7'}} indicator={'+2% Jan month'} CardComp={StatsCard}/>

            <StatsWithIndicator title={"Emergency Leave"} count={'06'} style={{backgroundColor: '#FFEFE7'}} indicator={'+2% Jan month'} CardComp={StatsCard}/>

            <StatsWithIndicator title={"Total Leave Jan"} count={'10'} style={{backgroundColor: '#E8F0FB'}} indicator={'+2% Jan month'} CardComp={StatsCard}/>

            <StatsWithIndicator title={"Today Leave"} count={'02'} style={{backgroundColor: '#FFEFE7'}} indicator={'23/01  Monday'} CardComp={StatsCard}/>

        </div>

        <Table {...tableProps}/>

    </div>

  )
  
}

export default LeaveRequest