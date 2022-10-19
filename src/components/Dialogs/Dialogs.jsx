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
const Message = (props) =>{
    return (
        
        <div className={style.Message}>
            {props.Message}
        </div>
    )

    
}

const Dialogs = (props) =>{
    let dialogData = [
        {id:1,name:"Alex"},
        {id:2,name:"Karin"},
        {id:3,name:"Sveta"},
    ];

    let messagesData = [
        {id:1,message:"Hi From Alex"},
        {id:2,message:"Hi From Karin"},
        {id:3,message:"Hi From Sveta"},


    ];


    return (
        <div className={style.global}>
            <div className={style.friends}>
                  <DialogItem name={dialogData[0].name} id={dialogData[0].id} />
                  <DialogItem name={dialogData[1].name} id={dialogData[1].id} />
                  <DialogItem name={dialogData[2].name} id={dialogData[2].id} />
            </div>

            <div className={style.Messages}>
                <Message Message={messagesData[0].message } />
                <Message Message={messagesData[1].message } />
                <Message Message={messagesData[2].message } />

            </div>     
        </div>
    )

}
export default Dialogs;


