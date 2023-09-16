import React from "react";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import Style from "@/styles/banner.module.css";

function Block() {
  return (
    <div className="container mt-2">
      <div className={Style.bannerBlock}>
        <div>
          <div>
            <Image
              width={500}
              height={396}
              className={Style.img}
              src="/images/gj.jpg"
              alt=""
            />
            <Image
              width={300}
              height={250}
              className={Style.imgM}
              src="/images/gjm.png"
              alt=""
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
            I am a MERN Stack Developer
          </p>
          <p
            style={{
              textAlign: "center",
              fontFamily: "Lato, sans-serif",
              color: "#9c833e",
            }}
          >
            By Education i am an Electrical Engineer By Profession i am a MERN
            Developer
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
