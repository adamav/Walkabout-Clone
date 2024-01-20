import React from "react";
import { ToggleInterface } from "./Toggle.interface";
import { ToggleStyle } from "./Toggle.styled";
import Label from "components/Label";


const Toggle : React.FC<ToggleInterface> = ({value, onState = () => <></>, offState = () =><></>, onChangeValue}) =>{


    const handleOnPress = ()=>{

        if(onChangeValue)
            onChangeValue(!value)

    }

    return (

        <ToggleStyle onPress={handleOnPress}>

            {value ?  onState() : offState()}

        </ToggleStyle>

       
    );
}

export default Toggle;

