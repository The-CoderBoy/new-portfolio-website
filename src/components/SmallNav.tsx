import React from "react";
import styled from "styled-components";
import Link from "next/link";

const MainDiv = styled.div`
  background-color: white;
  width: 80%;
  margin: auto;
  padding: 20px;
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const BoxDiv = styled.div`
  width: 280px;
  border: solid 1px #9c833e;
  text-align: center;
  padding: 5px;
  box-shadow: 0px 0px 5px black;
`;

const Lik = styled(Link)`
  text-decoration: none;
  color: #9c833e;
  font-size: 25px;
  margin-bottom: 5px;
`;

function SmallNav() {
  return (
    <MainDiv>
      <Lik href="/project">
        <BoxDiv>My Projects </BoxDiv>
      </Lik>

      <Lik href="/experience">
        <BoxDiv>My Experience</BoxDiv>
      </Lik>

      <Lik href="/about">
        <BoxDiv>About Me</BoxDiv>
      </Lik>
    </MainDiv>
  );
}

export default SmallNav;
