import React from "react";
import ButtonText from "components/ButtonText";
import { ButtonTextInterface } from "components/ButtonText/ButtonText.interface";

const LoginButton : React.FC<ButtonTextInterface> = (props) =>{


    return(

        <ButtonText {...props} 
            text="Login"
            backgroundStyle={{
                backgroundColor:"#266acd", 
                borderRadius:100,
                paddingTop:7,
                paddingBottom:7,
                minWidth:150,
                marginTop:20,
                marginBottom:20
            }} 
            textStyle={{
                color:"white",
                fontWeight:"bold"
            }}
        />
    );
}

export default LoginButton;