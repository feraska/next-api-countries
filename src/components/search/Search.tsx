import Image from "next/image"
import styles from "./search.module.scss"
import { Context } from "@/context/AuthContext"
import { ChangeEvent } from "react"
import { actions } from "@/enums/actions"
const arr = ["all","africa","america","asia","europe","oceania"]
const Search = () => {
    const {state,dispatch} = Context()
    const selectChange = (e:ChangeEvent<HTMLSelectElement>) => {
        if(e.target.value === "all") {
            dispatch({type:actions.setUrl,payload:`https://restcountries.com/v3.1/all`})
            return
        }
        dispatch({type:actions.setUrl,payload:`https://restcountries.com/v3.1/region/${e.target.value}`})
    }
    const SearchChange = (e:ChangeEvent<HTMLInputElement>) => {
        if(!e.target.value) {
            return
        }
        dispatch({type:actions.setUrl,payload:`https://restcountries.com/v3.1/name/${e.target.value}`})
         

    }
    return (
        <div className={styles.header}>
            
            <div className={styles.search} >
                <Image alt="" width={100} height={100} src={state.dark?"/searchWhite.png":"/search-interface-symbol.png"}/>
                <input type="text" placeholder="Search for a country..." onChange={SearchChange} />
            </div>
            <select onChange={selectChange} className={styles.select}>
              {arr.map((value)=>(
                <option key={value}  value={value}>{value}</option>
              ))}
            </select>
        </div>
        
    )
}
export default Search