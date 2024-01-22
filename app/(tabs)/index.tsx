import React from "react";
import Container from "components/Container/Container";
import SearchInputField from "components/SearchInputField";
import ButtonText from "components/ButtonText";
import ScrollView from "components/ScrollView/ScrollView";
import { useWindowDimensions } from "react-native";
import Card from "components/Card";


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


       
        <ScrollView 
          
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={width}
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
  );
}

export default Home;


