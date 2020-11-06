import React from 'react'; 
import styled from 'styled-components';

const AboutDiv = styled.div`
& p { 
    font-size: 15px ; 
    & strong {
        font-size: 15px 
    }; 
};
` 

const About = (props) => {
    return (
        <AboutDiv>
            <p>Fruit emporium is founded on a very simple principle: <strong>Fruit is good.</strong></p>
            <p>We carry the finest selection of produce from around the world, from tart citrus 
            to sweet cherries. Our sellers are world-class, and your fruit is guaranteed to 
            be worthy of auction in Asian markets.</p>
        </AboutDiv>
    ); 
}; 

export default About;