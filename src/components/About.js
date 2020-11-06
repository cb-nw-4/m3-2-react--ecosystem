import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';


const About=()=>{
    return(
        <>
            <Paragraph>Fruit emporium is founded on a very simple principle: <strong>Fruit is good.</strong>
                <p>
                    We carry the finest selection of produce from around the world, from tart citrus to sweet cherries. Our sellers are world-class, and your fruit is guaranteed to be worthy of auction in Asian markets.
                </p>
            </Paragraph>
        </>
    );
};

const Paragraph=styled.p`
    font-size:18px;
    padding:10px 0px 0px 0px;
    &>p{
        margin-top:20px;
        font-size:18px;
    }
`;


export default About;