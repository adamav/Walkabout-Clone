import React from "react";
import Container from "components/Container/Container";
import WalkaboutIconMedium from "components/WalkaboutIconMedium";
import Horizontal from "components/Horizontal";
import FlexableSpace from "components/FlexableSpace";
import Vertical from "components/Vertical";
import Label from "components/Label";
import InputField from "components/InputField";
import { AntDesign } from "@expo/vector-icons";
import IconInputField from "components/IconInputField";
import HorizontalLine from "components/HorizontalLine";
import ButtonLink from "components/ButtonLink";
import ButtonText from "components/ButtonText";

const SignUp = () =>{


    const handleContinueBtnClicked = () =>{

    }

    return(

        <Container>

           <Horizontal>

            <FlexableSpace/>
            <Vertical width="100%">

               
               <Horizontal>
                <FlexableSpace/>
                <WalkaboutIconMedium />
                <FlexableSpace/>
               </Horizontal>
              
              

                <Horizontal>

                    <FlexableSpace/>
                    <Label 
                        text="Sign-Up" 
                        style={{
                            color:'black',
                            fontWeight:'bold',
                            fontSize:20,
                            margin:5
                        }}
                    />
                     <FlexableSpace/>

                </Horizontal>

               <Horizontal>
                <FlexableSpace/>

                <Label text="Let's Create your Account" style={{color:'black', marginBottom:20}}/>

                <FlexableSpace/>
               </Horizontal>

            
          
            
          

            <IconInputField placeholder="First Name" icon={<AntDesign name="user"/>}  />
          
            <IconInputField placeholder="Last Name" icon={<AntDesign name="user"/>}  />
          
            <IconInputField placeholder="Zip Code" icon={<AntDesign name="home"/>}  />
          

            <Horizontal marginTop="20px" marginBottom="20px">
                <HorizontalLine/>
             
                <Label text="OR" style={{color:'black', fontSize:10}} />
                <HorizontalLine/>

            </Horizontal>

            <Horizontal>
                <FlexableSpace/>
                <ButtonLink text="Got an invite code?" />
                <FlexableSpace/>
            </Horizontal>

            <ButtonText 
                text="Continue"
                backgroundStyle={{
                    backgroundColor:"#266acd",
                    borderRadius:5,
                    marginTop:20

                }}
                textStyle={{
                    color:'white',
                    fontWeight:'bold',
                    padding:10
                }}
                onPress={handleContinueBtnClicked}
            />

            <Horizontal style={{

               
                alignItems:'center',
                justifyContent:'center',
               
                width:"75%",
                flexWrap:'wrap',
                marginLeft:'auto',
                marginRight:'auto',
                marginTop: 20,

            }}>
              
           
                <Label 
                    text="By creating an account, you agree to our "
                    style={{
                        color:"#9da2a6",
                        fontSize:10

                    }} 
                />

                <ButtonLink text="terms of use" textStyle={{fontSize:10}} />

                <Label 
                    text=" and "
                    style={{
                        color:"#9da2a6",
                        fontSize:10

                    }} 
                />

                <ButtonLink text="privacy policy." textStyle={{fontSize:10}} />
              
              
                </Horizontal>

            </Vertical>
            <FlexableSpace/>
           

           </Horizontal>
            

        </Container>
    );
}

export default SignUp;