import React from 'react';
import styled from 'styled-components';

const Paragraph = styled.p`
    font-size: 28px;
    margin: 50px 80px 40px 80px;

    & span {
        font-weight: bold;
    }
`;


const About = () => {
    return (
        <>
        <Paragraph>Fruit emporium is founded on a very simple principle: <span>Fruit is good.</span></Paragraph>
        <Paragraph>We carry the finest selection of produce from around the world, from tart citrus to sweet cherries. Our sellers are world-class, and your fruit is guaranteed to be worthy of auction in Asian markets.</Paragraph>
        </>
    );
}

export default About;