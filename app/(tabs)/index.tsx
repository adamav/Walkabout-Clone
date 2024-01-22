import React from "react";
import Container from "components/Container/Container";
import SearchInputField from "components/SearchInputField";
import ButtonText from "components/ButtonText";
import ScrollView from "components/ScrollView/ScrollView";
import { useWindowDimensions } from "react-native";
import Card from "components/Card";
import Horizontal from "components/Horizontal";
import FlexableSpace from "components/FlexableSpace";


export const Home = () =>{

  const {width} = useWindowDimensions();

  
  return (
    
    <Container height="100%" backgroundColor="white">

     
      <SearchInputField />

      <ButtonText text="More" textStyle={{
      
        color:'#266acd',
        fontWeight:'bold',
        marginLeft:'auto',
        marginRight:10
      }} />


       <Container>
        <ScrollView 
          
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={width + 5}
          snapToAlignment="start"
          decelerationRate='fast'

      
          
          
         
         >

           
          
          

          <Card />
          <Card />
          <Card />
          <Card />
          <Card />


        
        
         
        
        
      </ScrollView>
      </Container>

      {/* <Container >
        <Horizontal>
          <FlexableSpace/>
       {Array.from({length:5},(_, index) =>{

        return <Container key={index} style={{
          backgroundColor:'black',
          height:5,
          width:5,
          borderRadius:50,
          margin:5
        }}/>
       })}
        <FlexableSpace/>
      </Horizontal>
      </Container>
      */}
     
       

    </Container>
  );
}

export default Home;


