import React from "react";
import { ScrollViewInterface } from "./ScrollView.interface";
import { ScrollViewStyled } from "./ScrollView.styled";


const ScrollView : React.FC<ScrollViewInterface> = ({children, ...props}) =>{

    return(


        <ScrollViewStyled {...props}>
            {children}
        </ScrollViewStyled>
    );
}

export default ScrollView;