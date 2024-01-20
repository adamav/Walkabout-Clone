import React, {useState} from "react";
import Container from "components/Container/Container";
import Overlay from "components/Overlay";
import InputField from "components/InputField";
import Horizontal from "components/Horizontal";
import FlexableSpace from "components/FlexableSpace";
import Vertical from "components/Vertical";
import ShowPasswordToggle from "components/ShowPasswordToggle";



const PasswordInputField = (props : any) =>{


    const [showPassword, setShowPassword] = useState(false);

    const handleToggle = (isOn : boolean) => {

        setShowPassword(isOn);
    }

    return (


        <Container>

            <InputField placeholder="Password" secureTextEntry={showPassword} />

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