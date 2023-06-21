import React, { createContext, useState } from 'react';
import { IUserDto } from '../models/IUser';


type UseContextProvider={
    children:React.ReactNode
}

export const UseContext = createContext();



export const UserProvider = ({children}:UseContextProvider)=>{
    const [userCtx, setUserCtx] = useState({
        username:"",
        password:""
    });

    const save = (user:IUserDto)=>{
        setUserCtx(user);        
    }
    
    return(
        <UseContext.Provider value={{userCtx,save}}>
            {children}
        </UseContext.Provider>
    )
}
