import React from "react";
import icon from "assets/images/walkabout-icon.png";
import Image from "components/Image/Image";
import Container from "components/Container/Container";


const WalkaboutIconSmall = () =>{

    return <Container height="50px">
        <Image source={icon}/>
    </Container> 
}

export default WalkaboutIconSmall;