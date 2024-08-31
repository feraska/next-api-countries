import Item from "../item/Item"
import { Context } from "@/context/AuthContext"
import styles from "./items.module.scss"
import useFilter from "@/hooks/useFilter"
const Items = () => {
    const {state} = Context()
    const {data,error,loading} = useFilter(state.url)
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
        <p>No Elements...</p>
        )
    }
    if(data.length === 0) {
        return(
        <p>No Elements...</p>
        )
    }
   
   
    return (
        <div className={styles.items}>
            {data.map((value,i)=>(
                <Item key={i} item={value}/>
            ))}
        </div>
        
    )
}
export default Items