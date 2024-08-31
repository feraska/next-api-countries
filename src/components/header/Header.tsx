import { Context } from "@/context/AuthContext"
import styles from  "./header.module.scss"
import { actions } from "@/enums/actions"
const Header = () => {
    const {state,dispatch} = Context()
    const changeColor = () => {
        if(localStorage.getItem("mode") === "light") {
            localStorage.setItem("mode","dark")
            dispatch({type:actions.setDark,payload:true})
            document.documentElement.setAttribute("theme-mode","dark")
        } else {
            localStorage.setItem("mode","light")
            dispatch({type:actions.setDark,payload:false})
            document.documentElement.setAttribute("theme-mode","light")
        }
        //console.log(state.dark)
    }
    return (
        <header className={styles.header} >
           <section>
            <label>Where in the World?</label>
            <label onClick={changeColor}>Dark Mode</label>
            </section> 
        </header>
    )
}
export default Header