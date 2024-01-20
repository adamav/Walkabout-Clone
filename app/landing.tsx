import React from "react";
import Vertical from "components/Vertical";
import FlexableSpace from "components/FlexableSpace";
import Horizontal from "components/Horizontal";
import Container from "components/Container/Container";
import Label from "components/Label";
import HorizontalLine from "components/HorizontalLine";
import ButtonText from "components/ButtonText";
import { useRouter } from "expo-router";
import { ImageBackground } from "react-native";
import landngBg from 'assets/images/landing-bg.png';
import WalkaboutIconSmall from "components/WalkaboutIconSmall";
import landingIcon from "assets/images/landingIcon.png"
import Image from "components/Image/Image";
import LoginButton from "components/LoginButton";
import SignUpButton from "components/SignUpButton";
import HeaderLabel from "components/HeaderLabel/HeaderLabel";
import SubHeaderLabel from "components/SubHeaderLabel";
import SubLabel from "components/SubLabel";

const Landing = () =>{

    const router = useRouter();

    const handleLogin = () =>{


        router.push('/login')
    }

    const handleSignUp = () =>{

        router.push('/sign-up')

    }

    return(

        <Container>
            <ImageBackground 
                source={landngBg} 
                style={{
                    paddingLeft:10,
                    paddingRight:10,
                    paddingTop:20,
                    }}>

                <Horizontal>

                    <Vertical>
                        <FlexableSpace/>
                        <SubHeaderLabel text="Walkabout"/>
                        <FlexableSpace/>
                    </Vertical>
                   

                    <FlexableSpace/>

                   
                    <WalkaboutIconSmall />
                
                    
                </Horizontal>
            
                <FlexableSpace/>

                    <Vertical height="100%">
                      
                        
                            <Horizontal>


                                 <FlexableSpace/>

                                <Vertical width="100%">

                                  
                                    <Horizontal marginTop="200px">
                                        <FlexableSpace/>
                                        <HeaderLabel text="Get Out There!"/>
                                        <FlexableSpace/>
                                    </Horizontal>

                                  
                                   
                                    <Horizontal marginTop="10px">
                                        <FlexableSpace/>
                                        <Label text="Experience more and love where you live." />
                                        <FlexableSpace/>
                                    </Horizontal>

                                    <FlexableSpace/>

                                    <Horizontal >
                                        <FlexableSpace/>
                                       
                                       <Container height="50px">
                                        <Image source={landingIcon}/>
                                       </Container>
                                        
                                        

                                        <Vertical>
                                            <FlexableSpace/>
                                            <Label text="+1456 locals like you"/>
                                            <FlexableSpace/>
                                        </Vertical>
                                       
                                        <FlexableSpace/>
                                   </Horizontal>
                                    

                                    <FlexableSpace/>

                                    <Horizontal>
                                        <FlexableSpace/>
                                        <LoginButton onPress={handleLogin} />
                                        <FlexableSpace/>
                                    </Horizontal>

                                    <Horizontal >
                                      
                                       
                                      
                                        <HorizontalLine/>
                                     
                                     
                                       
                                       
                                        <SubLabel text="New member?" style={{
                                            color:'white'
                                        }}/>

                                                                             
                                        <HorizontalLine/>
                                       
                                      
                                    </Horizontal>

                                    <Horizontal>
                                        <FlexableSpace/>
                                        <SignUpButton  onPress={handleSignUp} />
                                        <FlexableSpace/>
                                    </Horizontal>

                                    <FlexableSpace/>
                                    
                                </Vertical>


                                <FlexableSpace/>
                            </Horizontal>
                      
                     
                        
                           

                    </Vertical>

                <FlexableSpace/>

               

            </ImageBackground>
        </Container>
       
        
    );
}

export default Landing;