import React from "react"
import { NavLink } from "react-router-dom";
import style from './Dialogs.module.css'
const DialogItem = (props) =>{
    let path="/messages/" +props.id
    return (
        <div className={style.friend}>
            <NavLink to={path }
            className = { navData => navData.isActive ? style.active : style.friend }>{props.name}</NavLink>
        </div>
       
    )

    
}
const Massage = (props) =>{
    return (
        
        <div className={style.massage}>
            {props.massage}
        </div>
    )

    
}

const Dialogs = (props) =>{
    return (
        <div className={style.global}>
            <div className={style.friends}>
                  <DialogItem name="Alex" id="1" />
                  <DialogItem name="Karim" id="2" />
                  <DialogItem name="Sveta" id="3" />
            </div>

            <div className={style.massages}>
                <Massage massage="hello from alex" />
                <Massage massage="hello from Karim"  />
                <Massage massage="hello from Sveta"  />
            </div>     
        </div>
    )

}
export default Dialogs;


