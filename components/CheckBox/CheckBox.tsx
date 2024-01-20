import React, { FC } from "react";
import Toggle from "components/Toggle";
import { ToggleInterface } from "components/Toggle/Toggle.interface";
import FontAwesome from "@expo/vector-icons/FontAwesome";


export const CheckBox : React.FC<ToggleInterface>= (props) =>{

    return(


        <Toggle {...props} 
        onState={() => <FontAwesome name="square-o" color="#757c84" size={15}/>} 
        offState={() =><FontAwesome name="check-square" color="#007aff" size={15}/>} />
    );
}


export default CheckBox;
