import { msg } from "@/interfaces/msg"
import { useEffect, useState } from "react"

const useGet = (url:string) => {
    const [data,setData] = useState()
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState<msg>()
    useEffect(()=> {
       const fetchData = async()=> {
        try {
            setLoading(true)
            setError({message:"",status:200})
            const d = await fetch(url)
            if(!d.ok) {
                setError(await d.json())
                setLoading(false)
                return
            }
            const json = await d.json()
            setData(json)
            setLoading(false)
            // setError()
        } catch(e) {
            const error = e as Error
            setError({
                status:500,
                message:error.message
            })
            setLoading(false)
        }
       }
       if(url)
       fetchData()
      
    },[])
    return {
        data,loading,error
       }
}
export default useGet