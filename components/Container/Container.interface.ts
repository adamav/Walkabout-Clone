import { StyleProp, ViewStyle } from "react-native";

export interface ContainerInterface{

    
    children?: React.ReactNode;
    width?: string;
    height?: string;
    backgroundColor?:string;
    paddingLeft?:string;
    paddingRight?:string;
    marginTop?:string;
    marginBottom?:string;
    style?: StyleProp<ViewStyle>

}