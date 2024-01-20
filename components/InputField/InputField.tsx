import React from 'react';
import { InputStyle, InputLabelStyle } from './InputField.styled';
import { InputFieldInterface } from './InputField.interface';
import { InputContainer } from './InputField.styled';
import Label from 'components/Label';


const InputField : React.FC<InputFieldInterface> = ({placeholder, ...props}) =>{

    return (
         
        <InputContainer>

            <InputLabelStyle text={placeholder}/>
            <InputStyle {...props} />

        </InputContainer>
       
    );
}

export default InputField;