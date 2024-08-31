"use client"
import { appState, children, reducer } from "@/interfaces/appState";
import { createContext, useContext, useReducer } from "react";
import { AuthReducer } from "./AuthReducer";
const INITIAL_STATE:appState = {
    dark: false,
    url: "https://restcountries.com/v3.1/all"
}
const AuthContext =  createContext<reducer>({
    state:INITIAL_STATE,
    dispatch:()=>null

   })
export const  Context = ()=> {
    return useContext(AuthContext)
}
const AuthContextProvider:React.FC<children> = ({children}) => {
    const [state,dispatch] = useReducer(AuthReducer,INITIAL_STATE)
    return(
        <AuthContext.Provider value={{state,dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthContextProvider