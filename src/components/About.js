import React from "react";
import styled from "styled-components";

export const About = () => {
  return (
    <div>
      <FruitEmporium>
        Fruit emporium is founded on a very simple principle:{" "}
        <b>Fruit is good.</b>
      </FruitEmporium>

      <FinestSelection>
        We carry the finest selection of produce from around the world, from
        tart citrus to sweet cherries. Our sellers are world-class, and your
        fruit is guaranteed to be worthy of auction in Asian markets.
      </FinestSelection>
    </div>
  );
};

const FinestSelection = styled.div`
  margin-top: 1.5rem;
`;

const FruitEmporium = styled.div`
  margin-top: 1.5rem;
`;
