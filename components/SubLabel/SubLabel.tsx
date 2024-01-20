import React from "react";
import Label from "components/Label";
import { LabelInterface } from "components/Label/Label.interface";
import { TextStyle } from "react-native";

const SubLabel : React.FC<LabelInterface> = ({style, ...props}) =>{


    const defaultStyle : TextStyle={
        fontSize:10,
        color:'white'
    }

    const mergedStyle = [defaultStyle, style]

    return <Label {...props} style={mergedStyle}/>
}

export default SubLabel;