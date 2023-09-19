import React from "react";
import styled from "styled-components";
import Image from "next/image";

type imagePara = {
  img: HTMLImageElement;
};
const Div = styled.div`
  border: solid #825507 2px;
  border-radius: 10px;
  height: 160px;
  width: 250px;
  padding: 15px;
  box-shadow: 0px 0px 5px black;
`;

const Img = styled(Image)`
  width: 240px;
  height: 140px;
`;

function Card(props: imagePara) {
  return (
    <Div>
      <Img src={props.img} alt="" />
    </Div>
  );
}

export default Card;
