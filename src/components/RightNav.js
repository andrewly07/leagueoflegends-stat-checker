import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faFacebook,
//   faTwitter,
//   faSquarespace,
// } from "@fortawesome/free-brands-svg-icons";

const Ul = styled.ul`
  height: auto;
  display: flex;
  background: none;
  position: relative;
  width: auto;
  padding-top: 0;
  font-size: 1rem;

  a {
    font-size: 1rem;
    color: white;
    text-decoration: none;
    padding: 0 1rem;
    font-weight: bold;
    text-transform: uppercase;
  }
  list-style: none;

  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #663399;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
  }
`;

const NavCenter = styled.div`
  max-width: 80vw;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavLinks = styled.ul`
  height: auto;
  display: flex;
  background: none;
  position: relative;
  width: auto;
  padding-top: 0;
  font-size: 1rem;
  list-style-type: none;

  a {
    font-size: 1rem;
    color: white;
    text-decoration: none;
    padding: 0 1rem;
    font-weight: bold;
    text-transform: uppercase;
  }
`;

// const SocialLinks = styled.div`
//   display: flex;
//   top: 0;
//   text-align: right;
//   line-height: 0;

//   a {
//     color: white;
//     margin: 0 0.5rem;
//     font-size: 1rem;
//   }
//   @media (max-width: 768px) {
//     justify-content: center;
//     text-align: center;
//     margin: 10px;
//   }
// `;

const RightNav = ({ open }) => {
  return (
    <NavCenter>
      <NavLinks>
        <Ul open={open}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">contact</Link>
          </li>
          <li>
            <a href="https://andrewly.dev">portfolio</a>
          </li>
          {/* <SocialLinks>
          <a href="https://twitter.com/Diablo">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://www.facebook.com/Diablo">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://us.diablo3.com/en/">
            <FontAwesomeIcon icon={faSquarespace} />
          </a>
        </SocialLinks> */}
        </Ul>
      </NavLinks>
    </NavCenter>
  );
};

export default RightNav;
