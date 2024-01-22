import React from "react";
import { ImageInterface } from "./Image.interface";
import { ImageStyled } from "./Image.styled";
import { ImageStyle } from "react-native";



const Image : React.FC<ImageInterface> = ({source, style, ...props}) =>{

    const defaultStyle : ImageStyle = {

        height:'100%',
        width:'auto',
        aspectRatio:1,
        marginLeft:10,
        marginRight:10,
      
        /*@ts-ignore */
        resizeMode: 'contain'
    }

  

    return (

        
           
                 <ImageStyled {...props} source={source}  style={style ?? defaultStyle} />
         
           
           
            
    
       
    );
}

export default Image;