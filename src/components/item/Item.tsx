import React from "react"
//import styles from  "./item.module.scss"
import styles from  "./item.module.scss"
import Image from "next/image"
import { Context } from "@/context/AuthContext"
import { item } from "@/interfaces/item"
import Link from "next/link"

interface props {
    item:item
}
const Item:React.FC<props> = ({item}) => {
    // const {state} = Context()
    // console.log("item",item)
    return (
         
            <div className={styles.box}>
                <Link href={`/details/${item.name.common}`}>
            <Image alt="" className={styles.img} src={item?.flags?.png} width={100} height={100}/>
            </Link>
            <div className={styles.bottom}>
                <strong>{item?.name?.common}</strong>
                <label><strong>Population:</strong> {item?.population}</label>
                <label><strong>Region:</strong> {item?.region}</label>
                <label><strong>Capital:</strong> {item?.capital}</label>
            </div>
            </div>
        
    )
}
export default Item