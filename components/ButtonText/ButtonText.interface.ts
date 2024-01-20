import { ButtonInterface } from "components/Button/Button.interface";
import { StyleProp, ViewStyle, TextStyle } from "react-native";
export interface ButtonTextInterface extends ButtonInterface{

    text?:string;
    backgroundStyle?:StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
    
}