import React from "react";
import Card from "@/components/Card";
import NodeJs from "../../public/images/Node.js_logo.svg";
import Express from "../../public/images/express.png";
import Bootstrap from "../../public/images/bootstrap_plain_wordmark_logo_icon_146620.png";
import Figma from "../../public/images/figma.webp";
import MongoDb from "../../public/images/MongoDB_Logo.svg.png";
import Mysql from "../../public/images/MySQL-Logo.png";
import Postman from "../../public/images/postman.png";
import ReactLogo from "../../public/images/React-Logo-1-300x289.png";
import Ubuntu from "../../public/images/Ubuntu-Emblem.png";
import Jquery from "../../public/images/jquery-ar21.png";
import Ec2 from "../../public/images/ec2.png";
import Typescript from "../../public/images/typescript.webp";
import NextJs from "../../public/images/nextjs-icon.png";
import PostgreSql from "../../public/images/postgresql-logo.webp";
import Redis from "../../public/images/redis.png";
import Netlify from "../../public/images/Netlify.png";
import Style from "@/styles/techSection.module.css";

function Block2() {
  const iKnow: HTMLImageElement[] = [
    Typescript,
    NodeJs,
    NextJs,
    Express,
    ReactLogo,
    MongoDb,
    Mysql,
    PostgreSql,
    Redis,
    Postman,
    Bootstrap,
    Ubuntu,
    Jquery,
    Netlify,
    Ec2,
    Figma,
  ];

  return (
    <div className={Style.container}>
      <p className={Style.title}>Technologies I have experience with</p>
      <div className={Style.card}>
        {iKnow.map((x, i) => (
          <div key={i} style={{ marginBottom: "20px" }}>
            <Card img={x} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Block2;
