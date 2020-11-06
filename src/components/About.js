import React from 'react';
import styled from 'styled-components';

const AboutStyle = styled.div`
    font-weight: 600;
    margin-top: 2rem;
    font-size: 1.25rem;
`;

const MegaBold = styled.b`
    font-weight: 900;
`;

const About = () => {
   return (
   <AboutStyle>
      <p>Fruit emporium is founded on a very simple principle: 
      <MegaBold> Fruit is good.</MegaBold></p>
      <p>We carry the finest selection of produce from around the world, from tart citrus to sweet cherries. Our sellers are world-class, and your fruit is guaranteed to be worthy of auction in Asian markets.</p>
    </AboutStyle>);

};

export default About;