import React from "react";
import styled from "styled-components";

const Banner = styled.h2`
  padding: 10px;
  height: 20px;
  color: #ffffff;
  background-color: #044164;
  text-align: center;
  font-weight: 500;
`;

const SloganBanner = () => {
  return <Banner>The World's first reward based healthcare platform</Banner>;
};

export default SloganBanner;
