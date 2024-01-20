import styled from "styled-components/native";
import { InputFieldInterface } from "./InputField.interface";
import Label from "components/Label";
import Container from "components/Container/Container";


export const InputContainer = styled(Container)`
    
    margin-top:20px;
    margin-bottom:20px;
    
`

export const InputLabelStyle = styled(Label)`
    
    font-size:10px;
    color:#757c84;
    
`

export const InputStyle = styled.TextInput<InputFieldInterface>`

    border-bottom-width:1px;
    height:35px;
   border-bottom-color:#e1e8f0;
   
    
`