import React from "react";
import Container from "components/Container/Container";
import Image from "components/Image/Image";
import homeImage from 'assets/images/homeImage.png';
import { useWindowDimensions } from "react-native";
import Vertical from "components/Vertical";
import Horizontal from "components/Horizontal";
import ButtonText from "components/ButtonText";
import FlexableSpace from "components/FlexableSpace";
import { Feather } from "@expo/vector-icons";

const Card = () =>{

    const {width} = useWindowDimensions();

    return (


         
        <Container 
        style={{

           width:width,
          
          

         
          
           
        }}>

         <Container 
           style={{
             width:'100%',
             backgroundColor:'green',
             height: 225
           
             }}
           >

           <Image 
             source={homeImage} 
             style={{

               width:'100%',
               height:'100%',
               resizeMode:'cover'
             }}
           />

           <Container style={{

             position:'absolute',
             top:0,
             left:0,
             bottom:0,
             right:0,
            

           }}>

             <Vertical height="100%" >

            
               <Horizontal paddingLeft="10px" paddingRight="10px" marginTop="10px">
                 <ButtonText 
                   text="Posts" 
                   backgroundStyle={{
                     backgroundColor:'white',
                     borderRadius:50,
                     padding:5,
                    
                   }}
                   textStyle={{
                     color:'black',
                     fontSize:10
                   }}
                 />
                 <FlexableSpace/>
                 <Container style={{
                  
                   backgroundColor:'white',
                   borderRadius:50,
                   padding:5
                   
                 
                 }}>
                   <Feather name="bookmark"/>
                 </Container>
               </Horizontal>

               <FlexableSpace/>

               <Container style={{
                 backgroundColor:'#8f8472',
                 height:50,
                 opacity:0.5
               }}>

               </Container>

             </Vertical>

           </Container>


         </Container>
       


        </Container>


    );
}

export default Card;