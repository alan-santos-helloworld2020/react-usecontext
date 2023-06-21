import { useContext, useState } from "react"
import { UseContext } from "../context/UserContext"

export function Home() {

  const {userCtx} = useContext(UseContext);


    return(
      <div className="col-6">
            <p className="text-center">Home {userCtx.username}</p>
      </div>
    )
    
}