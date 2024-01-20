import React from "react";
import Toggle from "components/Toggle";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { ToggleInterface } from "components/Toggle/Toggle.interface";


const ShowPasswordToggle : React.FC<ToggleInterface> = (props) =>{


    return <Toggle {... props} onState= {() => <FontAwesome name="eye-slash" />} offState={() => <FontAwesome name="eye"/>} />
}


export default ShowPasswordToggle;