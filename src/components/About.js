import React from 'react';
import styled from 'styled-components';

const AboutStyle = styled.div`
    font-weight: 600;
    margin-top: 0;
    font-size: 1.5rem;
`;

const Paragraph = styled.p`
    margin-top: 0;
`;

const MegaBold = styled.b`
    font-weight: 900;
`;

const About = () => {
   return (
   <AboutStyle>
      <Paragraph>Fruit emporium is founded on a very simple principle: 
      <MegaBold> Fruit is good.</MegaBold></Paragraph>
      <p>We carry the finest selection of produce from around the world, from tart citrus to sweet cherries. Our sellers are world-class, and your fruit is guaranteed to be worthy of auction in Asian markets.</p>
    </AboutStyle>);

};

export default About;