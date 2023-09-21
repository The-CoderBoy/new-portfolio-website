"use client";
import React, { useState } from "react";
import Link from "next/link";
import Styles from "@/styles/navbar.module.css";
import { BsFilterRight } from "react-icons/bs";

function Navbar() {
  const [hide, setHide] = useState(false);

  const hideHandler = () => {
    setHide(!hide);
  };

  return (
    <div>
      <div className={Styles.div}>
        <div className={Styles.flex}>
          <Link className={Styles.logo} href="/">
            Gaurav Joshi
          </Link>
          <Link className={Styles.lik} href="/">
            Home
          </Link>
          <Link className={Styles.lik} href="/experience">
            Experience
          </Link>
          <Link className={Styles.lik} href="/project">
            Projects
          </Link>
          {/* <Link className={Styles.lik} href="/resume">
            Resume
          </Link> */}
          <Link className={Styles.lik} href="/about">
            About Me
          </Link>
        </div>
      </div>
      <div className={Styles.divM}>
        <div className={Styles.flex}>
          <Link className={Styles.logo} href="/">
            Gaurav Joshi
          </Link>
          <BsFilterRight
            onClick={hideHandler}
            style={{ fontSize: "40px", color: "white" }}
          />
        </div>
        {hide && (
          <div>
            <div
              style={{ width: "100%", backgroundColor: "white", height: "1px" }}
            ></div>
            <p style={{ textAlign: "center" }}>
              <Link className={Styles.lik} href="/experience">
                Experience
              </Link>
            </p>
            <p style={{ textAlign: "center" }}>
              <Link className={Styles.lik} href="/project">
                Projects
              </Link>
            </p>
            {/* <p style={{ textAlign: "center" }}>
              <Link className={Styles.lik} href="/resume">
                Resume
              </Link>
            </p> */}
            <p style={{ textAlign: "center", paddingBottom: "20px" }}>
              <Link className={Styles.lik} href="/about">
                About Me
              </Link>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
