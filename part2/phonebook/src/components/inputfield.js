import React from "react";

const InputField = (props) => {
    return (
        <>
            <input onChange={props.onChange} value={props.value}></input>
        </>
    )
}

export default InputField