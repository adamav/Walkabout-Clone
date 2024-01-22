import React from "react";
import Container from "components/Container/Container";
import Horizontal from "components/Horizontal";
import Vertical from "components/Vertical";
import FlexableSpace from "components/FlexableSpace";
import { AntDesign } from "@expo/vector-icons";
import InputField from "components/InputField";
const SearchInputField = () =>{

    return (


        <Container style={{
            borderColor:'#747d84',
            borderWidth:1,
            height:45,
            backgroundColor:'white',
            borderRadius:50,
            marginHorizontal:10,
            marginTop:10,
            marginBottom:10,
            paddingHorizontal:10,
           
            
          }}>
    
            <Horizontal height="100%">
    
              <Vertical>
                <FlexableSpace/>
                <AntDesign name="search1" size={20}/>
                <FlexableSpace/>
              </Vertical>
    
              <InputField style={{
                width:'100%',
                height:'100%',
                marginLeft:5
              }}/>
            
    
            </Horizontal>
    
          </Container>
    
    );
}

export default SearchInputField;