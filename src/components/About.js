import React from 'react'; 
import styled from 'styled-components';

const FirstParagraph = styled.div`
    margin-top: 20px;
`; 

const SecondParagraph = styled.div`
    margin-top: 20px;
`; 


const About = () => {
    return (
        <div>
        <FirstParagraph>
            Fruit emporium is founded on a very simple principle:{" "} 
                <strong>Fruit is good.</strong>
            </FirstParagraph>
        <SecondParagraph>
            We carry the finest selection of produce from around the world, from tart citrus 
            to sweet cherries. Our sellers are world-class, and your fruit is guaranteed to 
            be worthy of auction in Asian markets.
        </SecondParagraph>
        </div>
    ); 
}; 

export default About; 