"use client"
import { actions } from "@/enums/actions";
import { action, appState } from "@/interfaces/appState";

export const AuthReducer = (state:appState,action:action):appState => {
    switch (action.type) {
        case actions.setDark:
            return {
                ...state,
                dark:action.payload
            }
        case actions.setUrl:
            return {
                ...state,
                url:action.payload
            }        
    }
    return {
        ...state
    }
}