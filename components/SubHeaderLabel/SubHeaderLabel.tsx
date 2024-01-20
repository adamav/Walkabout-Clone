import React from "react";
import Label from "components/Label";
import { LabelInterface } from "components/Label/Label.interface";
import { TextStyle } from "react-native";

const SubHeaderLabel : React.FC<LabelInterface> = ({style, ...props}) =>{

    const defaultStyle : TextStyle = {

        color:'white',
        fontSize:20,
        fontWeight:'bold'

    }

    const mergedStyle = [defaultStyle, style];


    return <Label {...props} style={mergedStyle} />
}

export default SubHeaderLabel;