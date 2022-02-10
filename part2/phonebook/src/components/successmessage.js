import React, {useState} from "react";
import '../successmessage.css'

const SuccessMessage = ({message, setMessage}) => {
    if(message === null) {
        return null
    }
    setTimeout(() => setMessage(null), 5000);
    return (
        <div className="success-message">
            {message}
        </div>
    )
} 

export default SuccessMessage