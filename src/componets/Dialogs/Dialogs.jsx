import React from "react";
import c from './Dialogs.module.css';
import DialogItem from "./DialogsItem/DialogsItem";
import Messages from "./Message/Messages";
import { Navigate } from "react-router-dom";



const Dialog = (props) => {
    let state = props.messagesPages;
 
    let dialogElements = state.dialogData
        .map( dialog => <DialogItem name={dialog.name} id={dialog.id}/>)

    let messageElements = state.messagesData
        .map( m => <Messages  massage={m.message}/>);

    let newMessageBody = state.newMessageBody;
  
   
    let onSendMesageClick = () => {
        props.sendMessage();
    }
    
    let onPostChange = (e) => {
       let body = e.target.value;
       props.updateNewMessageBody(body);
    }

    if (props.isAuth === false)  return <Navigate to={"/login"} />
    return (
    <div className={c.dialogs}>
        <div className={c.dialogsItems}>
            {dialogElements} 
               
        </div>

        <div className={c.messages}>
           <div>{messageElements}</div> 
           <div> <textarea className={c.textarea}  onChange={ onPostChange } value={newMessageBody} placeholder="Enter your message"/> </div>
           <div>   <button onClick={ onSendMesageClick }>SEND</button></div>
        </div>
    </div>
    )
};

export default Dialog;