import React from "react";
import InputField from "components/InputField";
import { InputFieldInterface } from "components/InputField/InputField.interface";
import Container from "components/Container/Container";
import Label from "components/Label";

const EmailInputField : React.FC<InputFieldInterface> = (props) =>{

    return (
    
        <Container 
            style={{
                marginTop:10,
                marginBottom:10
            }}
        >

            <Label 
                text="Email Address" 
                style={{
                    fontSize:10,
                    color:'#757c84',
                }} 
            />
            <InputField {...props} style={{

                borderBottomWidth:1,
                height:35,
                borderBottomColor:'#e1e8f0'

            }} />


        </Container>
    
    );
}

export default EmailInputField;