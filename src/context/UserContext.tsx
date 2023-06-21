import { createContext, useState } from 'react';
import { IUserDto } from '../models/IUser';

export const UseContext = createContext();

export const UserProvider = ({children})=>{
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
