import React from "react";
import Button from "components/Button/Button";
import Label from "components/Label";
import { ButtonTextInterface } from "./ButtonText.interface";

const ButtonText : React.FC<ButtonTextInterface>  = ({text, backgroundStyle, textStyle, ...props}) =>{

    return(

        <Button  style={backgroundStyle} {...props}>

            <Label text={text} style={textStyle} />

        </Button>
    );
}

export default ButtonText;