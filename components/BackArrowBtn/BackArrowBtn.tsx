import React from "react";
import { BackArrowBtnStyle } from "./BackArrowBtn.styled";
import { ButtonInterface } from "components/Button/Button.interface";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Horizontal from "components/Horizontal";
import FlexableSpace from "components/FlexableSpace";




const BackArrowBtn : React.FC<ButtonInterface>  = (props) =>{


    return (
    
            <BackArrowBtnStyle {...props} >

           
                <FontAwesome name="chevron-left"  />

            </BackArrowBtnStyle>
        );

       
    
}

export default BackArrowBtn;