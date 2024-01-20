import React from "react";
import { LabelStyled } from "./Label.styled";
import { LabelInterface } from "./Label.interface";

const Label : React.FC<LabelInterface> = ({text, ...props}) =>{

    return (

        <LabelStyled {...props}>
            {text}
        </LabelStyled>
    );
}

export default Label;