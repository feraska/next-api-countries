"use client"
import Image from "next/image"
import useGet from "@/hooks/useGet"
import { useParams,useRouter } from "next/navigation" 
import  "./details.scss"
import { useEffect } from "react"
import { Context } from "@/context/AuthContext"
import { actions } from "@/enums/actions"
import Info from "@/components/info/Info"

const Details = () => {
    const params = useParams()
    const {data,error,loading} = useGet(`https://restcountries.com/v3.1/name/${params.name}`)
    const {state,dispatch} = Context()
    const router = useRouter()
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
    if(loading) {
        return(
            <p>...loading</p>
        )
    }
    if(error?.message) {
        return(
            <p>{error.message}</p>
        )
    }
    if(!data) {
        return(
        <p>No Element...</p>
        )
    }
   
    return(
        <section className="details">
            <section className={"box"}>
                <button onClick={()=>router.back()}>
                    <Image alt="" src={`${state.dark?"/backW.png":"/back.png"}`} height={100} width={100}/>
                    <label>Back</label>
                </button>
                <Info item={data[0]}/>
            </section>
        </section>
    )
}
export default Details