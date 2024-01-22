import React, {useState} from "react";
import Label from "components/Label";
import Container from "components/Container/Container";
import Horizontal from "components/Horizontal";
import { AntDesign } from "@expo/vector-icons";
import InputField from "components/InputField";
import { FirstNameInputFieldInterface } from "./IconInputField.interface";
import Vertical from "components/Vertical";
import FlexableSpace from "components/FlexableSpace";

const IconInputField : React.FC<FirstNameInputFieldInterface> = ({placeholder, icon, ...props}) =>{

    const [isFocus, setIsFocus] = useState<boolean>(false)

    return (

        <Container style={{
            marginTop:10,
            marginBottom:10,
        }}>

            <Label 
                text={placeholder}
                style={{
                    color:'black',
                    fontWeight:'bold',
                    fontSize:10,
                    marginLeft:2
                }}
            />
            <Container 
                style={{
                    borderColor:"#e5e5e5",
                    borderWidth: isFocus ? 3 : 1,
                    borderRadius:10,
                    marginTop:5,
                    height:35


                }}
            >

                <Horizontal style={{
                  
                    paddingLeft:10,
                    height:'100%'
                }}>

                <Vertical>
                   <FlexableSpace/>
                   {icon}
                   <FlexableSpace/>
                </Vertical>
                  
                    
                    
                    <InputField 
                        {...props}
                        onFocus={() => setIsFocus(true)}
                        onBlur={() => setIsFocus(false)}
                        style={{marginLeft:5,
                            width:'100%',
                            height:'100%',
                        
                    }}/>
                </Horizontal>
               

            </Container>
          
        
        </Container>
    );

}

export default IconInputField;