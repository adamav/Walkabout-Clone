import React from "react";
import InputField from "components/InputField";
import { InputFieldInterface } from "components/InputField/InputField.interface";



const EmailInputField : React.FC<InputFieldInterface> = (props) =>{

    return <InputField placeholder="Email Address" {...props} />
}

export default EmailInputField;