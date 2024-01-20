import React from "react";
import Container from "components/Container/Container";
import WalkaboutIconMedium from "components/WalkaboutIconMedium";
import Horizontal from "components/Horizontal";
import FlexableSpace from "components/FlexableSpace";
import Vertical from "components/Vertical";
import Label from "components/Label";
import InputField from "components/InputField";

const SignUp = () =>{

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

                <Label text="Let's Create your Account" style={{color:'black'}}/>

                <FlexableSpace/>
               </Horizontal>

            
          
            
            <Label text="First Name" style={{color:'black'}}/>
            <Container>

                <InputField />

            </Container>
          


            </Vertical>
            <FlexableSpace/>
           

           </Horizontal>
            

        </Container>
    );
}

export default SignUp;