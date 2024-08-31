"use client"
import Header from "@/components/header/Header"
import { useEffect, useState } from "react"
import { Context } from "@/context/AuthContext"
import { actions } from "@/enums/actions"
import Items from "@/components/items/Items"
import "./app.scss"
import Search from "@/components/search/Search"
const Home = () => {
  const {state,dispatch} = Context()
  useEffect(()=> {
  
    if(!localStorage.getItem("mode")) {
      dispatch({type:actions.setDark,payload:false})
      localStorage.setItem("mode","light")
      document.documentElement.setAttribute("theme-mode","light")
      return
    }
    if(localStorage.getItem("mode") === "light") {
      dispatch({type:actions.setDark,payload:false})
      document.documentElement.setAttribute("theme-mode","light")
    } else {
      dispatch({type:actions.setDark,payload:true})
      document.documentElement.setAttribute("theme-mode","dark")
    }
    
   
  },[])
  return (
    
    <>
    
    <Header/>
    <div className="home" >
    <Search/>
    <Items/>

    </div>
    </>
  )
}
export default Home