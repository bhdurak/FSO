import React from "react";
import Button from "./button";
import InputField from "./inputfield";

const InputForm = (props) => {
    return (
        <form onSubmit={props.onSubmit}>
            <div>{
                props.name}:
                <InputField onChange={props.onChange} name={props.name} value={props.value}/>
            </div>
            <div>
                <Button type="submit" text="add"/>
            </div>
        </form>
    )
}

export default InputForm