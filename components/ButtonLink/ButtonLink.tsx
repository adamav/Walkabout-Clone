import React from "react";
import ButtonText from "components/ButtonText";
import { ButtonTextInterface } from "components/ButtonText/ButtonText.interface";
import { TextStyle } from "react-native";

const ButtonLink : React.FC<ButtonTextInterface>= ({textStyle, ...props}) =>{

    const defaultStyle : TextStyle = {
        color:"#558ad6"

    }

    const mergedStyle = [defaultStyle, textStyle]

    return <ButtonText {...props}

            textStyle={mergedStyle}
            />
    
}

export default ButtonLink;