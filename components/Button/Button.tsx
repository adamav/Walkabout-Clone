import React from "react";
import { ButtonStyled } from "./Button.styled";
import { ButtonInterface } from "./Button.interface";



const Button : React.FC<ButtonInterface>  = ({ children, ...props}) =>{



    return (

       <ButtonStyled  {...props}>
           
           {children}

          
       </ButtonStyled>
    );
}

export default Button;