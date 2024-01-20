import React from "react";
import { ImageInterface } from "./Image.interface";
import { ImageStyled } from "./Image.styled";



const Image : React.FC<ImageInterface> = ({source, ...props}) =>{

    return (

        
           
                 <ImageStyled source={source} />
         
           
           
            
    
       
    );
}

export default Image;