import { createContext, useEffect, useState } from "react";

export const EmployeeContext = createContext();

export const EmployeeProvider = ({children}) => {

    const[employees, setEmployees] = useState(JSON.parse(localStorage.getItem("empDetails")));

    return (

        <EmployeeContext.Provider value={{employees, setEmployees}}>
            {children}
        </EmployeeContext.Provider>

    );

}