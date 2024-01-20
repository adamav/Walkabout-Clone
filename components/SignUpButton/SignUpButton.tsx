import React from "react";
import ButtonText from "components/ButtonText";
import { ButtonTextInterface } from "components/ButtonText/ButtonText.interface";

const SignUpButton : React.FC<ButtonTextInterface> = (props) =>{

    return <ButtonText
    {...props}
    text="Sign up now"
    backgroundStyle={{
        backgroundColor:"white", 
        borderRadius:100,
        paddingTop:7,
        paddingBottom:7,
        minWidth:150,
        marginTop:20,
        marginBottom:20
    }} 
    textStyle={{
        color:"#266acd",
        fontWeight:"bold"
    }}
/>
}

export default SignUpButton;