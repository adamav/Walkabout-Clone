import React, {useState} from "react";
import Container from "components/Container/Container";
import Label from "components/Label";
import Horizontal from "components/Horizontal";
import FlexableSpace from "components/FlexableSpace";
import Vertical from "components/Vertical";
import EmailInputField from "components/EmailInputField";
import PasswordInputField from "components/PasswordInputField";
import Toggle from "components/Toggle";
import ButtonText from "components/ButtonText";
import WalkaboutIconMedium from "components/WalkaboutIconMedium";
import HeaderLabel from "components/HeaderLabel";
import CheckBox from "components/CheckBox";
import LoginButton from "components/LoginButton";
import ButtonLink from "components/ButtonLink";
import SubLabel from "components/SubLabel";
import { useRouter } from "expo-router";

const Login = () =>{

    const router = useRouter();

    const [rememberMe, setRememberMe] = useState<boolean>(true);

    const handleForgotPasswordClick = () =>{

        router.push('/forgot-password');

    }

    const handleLoginBtnClicked = () =>{


    }

    const handleSignUpBtnClicked = () =>{

        router.replace('/sign-up');

    }

    return(

       <Container width="100%" height="100%">
        
            <Horizontal marginTop="30px">
                <FlexableSpace/>
                    <WalkaboutIconMedium/>
                <FlexableSpace/>
            </Horizontal>

            <Horizontal>
                <FlexableSpace/>
                    <HeaderLabel text="Login" style={{
                        color:'black'
                    }}/>
                <FlexableSpace/>
             </Horizontal>

             <Horizontal marginTop="10px" marginBottom="20px">
                <FlexableSpace/>
                    <Label text="Inspiration starts here" style={{color:'black'}}/>
                <FlexableSpace/>
             </Horizontal>

             <EmailInputField />
             <PasswordInputField/>

             <Horizontal>
               
                <CheckBox value={rememberMe} onChangeValue={setRememberMe}/>
                <SubLabel text="Remember Me" style={{color:'#7d848a'}}/>
                
                <FlexableSpace/>

                <ButtonText 
                 text="Forgot Password?"
                 textStyle={{
                    fontSize:10,
                    color:'#7d848a'}}
                 onPress={handleForgotPasswordClick}
                 />

             </Horizontal>

             <Horizontal>
                <FlexableSpace/>
                <LoginButton text="Login"/>
                <FlexableSpace/>
             </Horizontal>

             <Horizontal marginBottom="20px">
                <FlexableSpace/>

                    <Label text="New to Walkabout? " style={{ color:'#7d848a'}}/>
                    <ButtonLink text="Sign up now" onPress={handleSignUpBtnClicked} />
                <FlexableSpace/>
             </Horizontal>

            
             <Horizontal>
                <FlexableSpace/>
                <SubLabel text="By loggin in you agree to our " style={{ color:'#7d848a'}}/>
                <ButtonLink text="term of use " textStyle={{fontSize:10}} />
                <FlexableSpace/>
             </Horizontal>

             <Horizontal >
              
             <FlexableSpace/>
              <Label text="and "/>
              <ButtonLink text="privacy policy." textStyle={{fontSize:10}}/>
              <FlexableSpace/>
              
            </Horizontal>


            


   
         
           
          
       </Container>
    );
}

export default Login;