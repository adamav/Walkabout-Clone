import React, {useState} from "react";
import Container from "components/Container/Container";
import Label from "components/Label";
import EmailInputField from "components/EmailInputField";
import ButtonText from "components/ButtonText";
import { checkEmailIfValid } from "utilis/utilis";

const ForgotPassword = () =>{


    const [email, setEmail] = useState<string>("");

    const validEmailedEntered = checkEmailIfValid(email);

    const handleContinueBtnClicked = () =>{


    }

    return (

        <Container>

            <Label text="Reset Password" style={{
                color:"black",
                fontWeight:'bold',
                fontSize:20,
                marginTop:20,
                marginBottom:20
            }}/>

            <Label 
            text="Enter the email address associated with your account and we'll send instructions to reset your password."
            style={{
                color:'black'
            }}
            />

            <EmailInputField value={email} onChangeText={setEmail}/>

            <ButtonText text="Continue"
                backgroundStyle={{
                    backgroundColor: validEmailedEntered ? '#266acd' : 'gray',
                    borderRadius:50,
                    padding:10,
                    marginRight:"auto",
                    minWidth:150,
                    opacity: validEmailedEntered ? 1 : 0.2
                    }} 
                textStyle={{

                    color:'white',
                    fontWeight:'bold'
                }}

                disabled={!validEmailedEntered}

                onPress={handleContinueBtnClicked}
                
            
                
                
               
            />

        </Container>
    );
}

export default ForgotPassword;