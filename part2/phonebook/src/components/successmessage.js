import React, {useState} from "react";
import '../successmessage.css'

const SuccessMessage = ({message, setMessage, isSuccess}) => {
    if(message === null) {
        return null
    }
    setTimeout(() => setMessage(null), 5000);
    return (
        <div className="success-message" style={{color:isSuccess?'green':'red'}}>
            {message}
        </div>
    )
} 

export default SuccessMessage