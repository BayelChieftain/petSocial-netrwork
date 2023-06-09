import React, { useEffect, useState } from "react";
import C from './ProfileInfo.module.css'

const ProfileStatusWithHooks = (props) => {

   let [editMode, setEditMode] = useState(false);
   let [status, setStatus] = useState(props.status);

   useEffect( () => {
    setStatus(props.status)
   }, [props.status])
  
   const actitedEditMode = () => {
    setEditMode(true)
   };

   const deActivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status)
   };

   const onStatusChange = (e) => {
    setStatus(e.currentTarget.value)
   };

    return  (
    <div className={C.f}>
        { !editMode && 
            <div className={C.statusStyle}>
              <h4>Status:</h4>  <div className={C.statusText} onDoubleClick={ actitedEditMode } >{props.status || 'Отсутствует'}</div>
            </div>
        }
        { editMode && 
            <div>
                <input onChange={ onStatusChange } autoFocus={true} onBlur={ deActivateEditMode } value={status} />
            </div>
        }
    </div>
    )
};


export default ProfileStatusWithHooks;