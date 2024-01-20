import styled from "styled-components/native";
import { ContainerInterface } from "./Container.interface";

export const ContainerDiv = styled.View<ContainerInterface>`


    width: ${(props)=> props.width ?? 'auto'};
    height: ${(props)=> props.height ?? 'auto'};
    background-color:${(props)=> props.backgroundColor};
    padding-left: ${(props) => props.paddingLeft?? "auto"};
    padding-right: ${(props) => props.paddingRight ?? "auto"};
    margin-top:${(props) => props.marginTop ?? 0};
    margin-bottom:${(props) => props.marginBottom ?? 0};
   
  


    

`