import React, { useContext, useRef, useState } from 'react'
import { EmployeeContext } from '../../contexts/EmployeeContext';
import { useNavigate } from 'react-router';

const FormCard = ({title, formElements}) => {

    const[toggle, setToggle] = useState(true);
    const toggleHandler = () => {
        setToggle(!toggle);
    }

    return (
        <div className="form-card">
            <div className="form-header">
                <h3 className="form-title">{title}</h3>
                <div className="toggle" onClick={toggleHandler}>{toggle ? '-' : '+'}</div>
            </div>
            { toggle && <div className="input-wrapper">
                { formElements?.map((element, index) => {
                    return (
                        <div className="element-wrapper" key={index}>
                        <label>{element?.label}</label>
                        {element?.inputField}
                    </div>
                    )
                })}
            </div>}
        </div>
       
    )
}
const CreateEmployee = () => {

    const {employees, setEmployees} = useContext(EmployeeContext);
    const navigate = useNavigate();

    const empDetails = useRef({
        empName: null,
        empId: null,
        empJoinDate: null,
        empEmail: null,
        empPhone: null,
        empStatus: null,
        empDob: null,
        empGender: null,
        empMaritalStatus: null,
        empPhysicallyChallenged: null,
        empBloodGroup: null,
        empPersonalMail: null
    });    

  const formFields = [
    
    {

        title: "Add details of an employee",
        formElements : [
            {
                label: 'Employee Name',
                inputField: <input type='text' ref={(ele)=> (empDetails.current.empName = ele)} placeholder='Enter Employee Name' required/>
            },
            {
                label: 'Employee Number',
                inputField: <input type="text" ref={(ele)=> (empDetails.current.empId = ele)} placeholder='Enter Employee Number' required/>
            },
            {
                label: 'Date of Joining',
                inputField: <input type="text" ref={(ele)=> (empDetails.current.empJoinDate = ele)} placeholder='Enter Joining Date' required/>
            },
            {
                label: 'Email Id',
                inputField: <input type="email" ref={(ele)=> (empDetails.current.empEmail = ele)} placeholder='Enter Email Id' required/>
            },
            {
                label: 'Mobile Number',
                inputField: <input type='phone' ref={(ele)=> (empDetails.current.empPhone = ele)} placeholder='Enter Mobile Number' required/>
            },
            {
                label: 'Employee Status',
                inputField: <select name="status" ref={(ele)=> (empDetails.current.empStatus = ele)} id="" required>
                                <option value="Confirmed">Confirmed</option>
                                <option value="Probation">Probation</option>
                            </select>
            }
        ]
    },
    {

        title: "Personal Details",
        formElements : [
            {
                label: 'Date Of Birth',
                inputField: <input type='text' ref={(ele)=> (empDetails.current.empDob = ele)} placeholder='Enter Date Of Birth' required/>
            },
            {
                label: 'Gender',
                inputField: <select name="gender" ref={(ele)=> (empDetails.current.empGender = ele)} id="" required>
                                <option value="Female">Female</option>
                                <option value="Male">Male</option>
                                <option value="Others">Others</option>
                            </select>
            },
            {
                label: 'Marital Status',
                inputField: <select name="marital-status" ref={(ele)=> (empDetails.current.empMaritalStatus = ele)} id="" required>
                                <option value="Married">Unmarried</option>
                                <option value="Unmarried">Married</option>
                            </select>
            },
            {
                label: 'Is Physical Challanged ',
                inputField: <select name="physically-challenged" ref={(ele)=> (empDetails.current.empPhysicallyChallenged = ele)} id="" required>
                                <option value="No">No</option>
                                <option value="Yes">Yes</option>
                            </select>
            },
            {
                label: 'Blood Group',
                inputField: <select name="blood-group" ref={(ele)=> (empDetails.current.empBloodGroup = ele)} id="" required>
                                <option value="O+">O+</option>
                                <option value="O-">O-</option>
                                <option value="AB+">AB+</option>
                                <option value="AB-">AB-</option>
                                <option value="B+">B+</option>
                                <option value="B-">B-</option>
                                <option value="A+probation">A+</option>
                                <option value="A-">A-</option>
                            </select>
            },
            {
                label: 'Personal Email id ',
                inputField: <input type="email" ref={(ele)=> (empDetails.current.empPersonalMail = ele)} placeholder='Enter Email id' required/>
            }
            
        ]
    }

]

const saveHandler = () => {

    const newEmployees = {
        empName: empDetails.current.empName.value,
        empId: empDetails.current.empId.value.toUpperCase(),
        empJoinDate: empDetails.current.empJoinDate.value,
        empEmail: empDetails.current.empEmail.value,
        empPhone: empDetails.current.empPhone.value,
        empStatus: empDetails.current.empStatus.value,
        empDob: empDetails.current.empDob.value,
        empGender: empDetails.current.empGender.value,
        empMaritalStatus: empDetails.current.empMaritalStatus.value,
        empPhysicallyChallenged: empDetails.current.empPhysicallyChallenged.value,
        empBloodGroup: empDetails.current.empBloodGroup.value,
        empPersonalMail: empDetails.current.empPersonalMail.value
    }

    const updatedEmployees = [...employees, newEmployees];
    localStorage.setItem('empDetails', JSON.stringify(updatedEmployees));
    setEmployees(updatedEmployees);
    alert('New employee details has been saved.');
    navigate('/employee-list');
    
}

  return (
    <form className='create-employee' onSubmit={saveHandler}>
        { formFields?.map((data, index) => <FormCard key={index} title={data?.title} formElements={data?.formElements}/>)}
        <div className="create-employee-footer">
            <button className="cta-btn outline">Cancel</button>
            <button type="submit" className="cta-btn fill">Save</button>
        </div>
    </form>
  )
}

export default CreateEmployee