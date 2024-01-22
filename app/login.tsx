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
import { useAppDispatch } from "store/store";
import { login } from "store/reducers/account/account.actions";
import { unwrapResult } from "@reduxjs/toolkit";
import { useNavigation } from "expo-router";

const Login = () =>{

    const router = useRouter();
    const navigation = useNavigation();
    const { reset } = navigation;

    const appDispatch = useAppDispatch();

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [rememberMe, setRememberMe] = useState<boolean>(true);

    const handleForgotPasswordClick = () =>{

        router.push('/forgot-password');

    }

    const handleLoginBtnClicked = () =>{


        appDispatch(login({email, password}))
        .then(unwrapResult)
        .then(()=>{
            

          
            navigation.reset({
                index: 0,
                  //@ts-ignore
                routes: [{ name: '(tabs)' }],
              });

           
    

        })
        .catch(err =>{

            //handle err
        })

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

             <EmailInputField value={email} onChangeText={setEmail} />
             <PasswordInputField value={password} onChangeText={setPassword}/>

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
                <LoginButton text="Login" onPress={handleLoginBtnClicked}/>
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