import React from "react"
import { NavLink } from "react-router-dom";
import style from './Dialogs.module.css'
const DialogItem = (props) =>{

    
}
const Dialogs = (props) =>{
    return (
        <div className={style.global}>
            <div className={style.friends}>

            
                  <div className={style.friend}><NavLink to='/messages/1' 
                  className = { navData => navData.isActive ? style.active : style.friend }>Alex</NavLink>
                  </div>

                  <div className={style.friend}><NavLink to='/messages/2' 
                  className = { navData => navData.isActive ? style.active : style.friend }>Karin</NavLink>
                  </div>

                  <div className={style.friend}><NavLink to='/messages/3' 
                  className = { navData => navData.isActive ? style.active : style.friend }>Sveta</NavLink>
                  </div>

            </div>
            <div className={style.massages}>
                <div className={style.massage}>
                    Hello
                </div>
                <div className={style.massage}>
                    Bye
                </div>
                <div className={style.massage}>
                    Hello World
                </div>
            </div>
            
        </div>
    )

}
export default Dialogs;


