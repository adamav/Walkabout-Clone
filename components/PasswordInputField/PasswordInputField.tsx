import React, {useState} from "react";
import Container from "components/Container/Container";
import Overlay from "components/Overlay";
import InputField from "components/InputField";
import Horizontal from "components/Horizontal";
import FlexableSpace from "components/FlexableSpace";
import Vertical from "components/Vertical";
import ShowPasswordToggle from "components/ShowPasswordToggle";
import Label from "components/Label";
import { InputFieldInterface } from "components/InputField/InputField.interface";


const PasswordInputField : React.FC<InputFieldInterface> = (props) =>{


    const [showPassword, setShowPassword] = useState(false);

    const handleToggle = (isOn : boolean) => {

        setShowPassword(isOn);
    }

    return (

    


        <Container
            style={{
                marginTop:10,
                marginBottom:10
            }}
        >

            <Label 
                text="Password" 
                style={{
                    fontSize:10,
                    color:'#757c84',
                }} 
            />
           
            <InputField  secureTextEntry={showPassword} style={{

                borderBottomWidth:1,
                height:35,
                borderBottomColor:'#e1e8f0'
            }} />

            <Overlay>
                
                <Horizontal height="100%">
                    <FlexableSpace/>
                    <Vertical>

                        <FlexableSpace/>
                        <ShowPasswordToggle value={showPassword} onChangeValue={handleToggle} />
                        <FlexableSpace/>
                    </Vertical>
                </Horizontal>
                

            </Overlay>

        </Container>
    
    );
}

export default  PasswordInputField;