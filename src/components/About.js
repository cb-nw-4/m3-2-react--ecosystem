import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
    & p {
        font-size: 1.5em;
    }
    & span {
        font-weight: bold;
    }
`;

const About = (props) => {
    return (
        <Div>
            <p>Fruit emporium is founded on a very simple principle: <span>Fruit is good.</span></p>
            <p>
                We carry the finest selection of produce from around the world, from tart citrus to sweet cherries. Our sellers are world-class,
                and your fruit is guaranteed to be worthy of auction in Asian markets.
            </p>
        </Div>
    );
}

export default About;