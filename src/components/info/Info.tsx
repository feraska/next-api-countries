import { item } from "@/interfaces/item"
import styles from "./info.module.scss"
import React from "react"
import Image from "next/image"
import Link from "next/link"
interface props {
    item:item
}
const Info:React.FC<props> = ({item}) => {
    const obj = Object.values(item.name.nativeName)
    const c = Object.values(item.currencies)
    const lang = Object.values(item.languages)
    console.log(item)
    console.log(Object.keys(item.name.nativeName))
    return(
        <div className={styles.info}>
            <Image alt="" src={item.flags.png} width={100} height={100}/>
            <div className={styles.right}>
            <div className={styles.details}>
                <label>{item.name.common}</label>
                <div className={styles.grid}>
                    <label><strong>Native Name: </strong>{obj[0].common}</label>
                    <label><strong>Population: </strong>{item.population}</label>
                    <label><strong>Region: </strong>{item.region}</label>
                    <label><strong>Sub Region : </strong>{item.subregion}</label>
                    <label><strong>Capital : </strong>{item.capital}</label>
                    <label><strong>Currencies : </strong>{c[0].name}</label>
                    <label><strong>Langueges : </strong>{lang.join(",")}</label>
                </div>
            </div>
            <div className={styles.bottom}>
                <label>Border Countires:</label>
                <div className={styles.borders}>
                    {item?.borders?.map((value)=>(
                        <label>{value}</label>
                    ))}
                </div>
            </div>

        </div>
        </div>
    )
}
export default Info