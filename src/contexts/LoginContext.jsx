import { createContext, useState } from "react";

export const LoginContext = createContext();

export const LoginProvider = ({children}) => {

    const[userLoggedIn, setUserLoggedIn] = useState(localStorage.getItem('isLoggedIn') == 'true');

    return (

        <LoginContext.Provider value={{userLoggedIn, setUserLoggedIn}}>
            {children}
        </LoginContext.Provider>

    );

}