import React from "react";
import Image from "next/image";
import img1 from "../../public/images/gj.jpg";
import img2 from "../../public/images/gjm.png";
import { Typewriter } from "react-simple-typewriter";
import Style from "@/styles/banner.module.css";

function Block() {
  return (
    <div className="container mt-2">
      <div className={Style.bannerBlock}>
        <div>
          <div>
            <Image
              className={Style.img}
              src={img1}
              alt="Gaurav The Coder Boy"
            />
            <Image
              className={Style.imgM}
              src={img2}
              alt="Gaurav The Coder Boy"
            />
          </div>
        </div>
        <div>
          <p
            style={{
              textAlign: "center",
              fontFamily: "Lato, sans-serif",
              color: "#9c833e",
              fontSize: "30px",
            }}
          >
            <Typewriter
              words={["My name is Gaurav Joshi"]}
              cursor={true}
              cursorBlinking={true}
            />
          </p>
          <p
            style={{
              textAlign: "center",
              fontFamily: "Lato, sans-serif",
              color: "#9c833e",
            }}
          >
            I am a Web Developer & Designer
          </p>
          <p
            style={{
              textAlign: "center",
              fontFamily: "Lato, sans-serif",
              color: "#9c833e",
            }}
          >
            By Education i am an Electrical Engineer
          </p>
          <p
            style={{
              textAlign: "center",
              fontFamily: "Lato, sans-serif",
              color: "#9c833e",
            }}
          >
            I am so passionate about coding and new cutting edge technologies
          </p>
          <p
            style={{
              textAlign: "center",
              fontFamily: "Lato, sans-serif",
              color: "#9c833e",
            }}
          >
            I love Javascript Ecosystem and i have build my carrer around it
          </p>
        </div>
      </div>
    </div>
  );
}

export default Block;
