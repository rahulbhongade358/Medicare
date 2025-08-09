import { createContext, useState } from "react";

export const Authcontext= createContext( )

export const AuthProvider = ({children})=>{
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  return(
    <Authcontext.Provider value={{username,setUsername,password,setPassword}}>
      {children}
    </Authcontext.Provider>
  )
}
