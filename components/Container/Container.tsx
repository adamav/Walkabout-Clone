import React from "react";
import { ContainerDiv } from "./Container.styled";
import { ContainerInterface } from "./Container.interface";


const Container : React.FC<ContainerInterface> = ({children, ...props}) =>{

    return (

        <ContainerDiv {...props}>
            {children}
        </ContainerDiv>

    );
}

export default Container