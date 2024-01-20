import styled from "styled-components/native";
import { ImageInterface } from "./Image.interface";




export const ImageStyled = styled.Image<ImageInterface>`
    
    height:100%;
    width:auto;
    aspect-ratio:1;
    margin-left:10px;
    margin-right:10px;
  
    /*@ts-ignore */
    resize-mode: contain;
   
   

  
`