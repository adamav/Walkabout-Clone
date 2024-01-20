import React from "react";
import Label from "components/Label";
import { LabelInterface } from "components/Label/Label.interface";
import { TextStyle, ViewStyle } from "react-native";
import { StyleSheet } from "react-native";


const HeaderLabel : React.FC<LabelInterface> = ({style, ...props}) =>{

    const defaultStyle  = {
        color:"white",
        fontSize:25,
        fontWeight:'bold'

    } as ViewStyle

    const mergedStyle =  StyleSheet.flatten([defaultStyle, style])

    return <Label  {...props} style={mergedStyle}/>
}

export default HeaderLabel;