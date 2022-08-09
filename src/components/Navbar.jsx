import React from "react";
import styled from "styled-components";
import logo from "../assets/remelife-logo.png";

const Container = styled.div`
  height: 60px;
  background-color: #032438;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const RemeLogo = styled.img.attrs({
  src: `${logo}`,
})`
  max-height: 5vh;
`;

const Center = styled.div`
  flex: 8;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const NavLink = styled.div`
  font-size: 1.2vw;
  color: #ffffff;
`;

const Right = styled.div`
  flex: 1;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <RemeLogo />
        </Left>
        <Center>
          <NavLink>Home</NavLink>
          <NavLink>Token Ecosystem</NavLink>
          <NavLink>Media</NavLink>
          <NavLink>Team</NavLink>
          <NavLink>FAQs</NavLink>
          <NavLink>RemeLife</NavLink>
          <NavLink>Tokens</NavLink>
          <NavLink>Contact</NavLink>
        </Center>
        <Right></Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
