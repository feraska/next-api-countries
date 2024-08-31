import { actions } from "@/enums/actions"
import React from "react"

export interface appState {
    dark:boolean
    url:string
}
export interface action {
    type:actions,
    payload?:any
}
export interface reducer {
    state:appState,
    dispatch:React.Dispatch<action>
}
export interface children {
    children:React.ReactNode
}