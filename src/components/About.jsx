import React from "react";
import styled from "styled-components";
const About = () => {
  return (
    <div>
      <Wrapper>
        <Wrapper1>
          Fruit emporium is founded on a very simple principle:
        </Wrapper1>
        <Wrapper2> Fruit is good. </Wrapper2>
        <Wrapper3>
          We carry the finest selection of produce from around the world, from
          tart citrus to sweet cherries. Our sellers are world-class, and your
          fruit is guaranteed to be worthy of auction in Asian markets.
        </Wrapper3>
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.div`
  padding-top: 20px;
  font-size: 20px;
  margin-left: 40px;
  margin-right: 150px;
`;

const Wrapper1 = styled.span`
  padding-top: 20px;
  font-size: 20px;
`;
const Wrapper2 = styled.span`
  font-size: 20px;
  margin-right: 150px;
  font-weight: bold;
`;
const Wrapper3 = styled.div`
  font-size: 20px;
  margin-right: 150px;
  padding-top: 20px;
`;
export default About;
