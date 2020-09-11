import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/images/diablo-logo.jpg";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Burger from "./Burger";

// import {
//   faFacebook,
//   faTwitter,
//   faSquarespace,
// } from "@fortawesome/free-brands-svg-icons";
// import { GiDiabloSkull } from "react-icons/gi";

// const Nav = styled.div`
//   position: fixed;
//   top: 0;
//   width: 100%;
//   background: black;
//   z-index: 1;
//   color: white;
// `;

const NavCenter = styled.div`
  max-width: 80vw;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.2rem 1.25rem;

  img {
    width: 200px;
  }
`;

// const NavLinks = styled.ul`
//   height: auto;
//   display: flex;
//   background: none;
//   position: relative;
//   width: auto;
//   padding-top: 0;
//   font-size: 1rem;
//   list-style-type: none;

//   a {
//     font-size: 1rem;
//     color: white;
//     text-decoration: none;
//     padding: 0 1rem;
//     font-weight: bold;
//     text-transform: uppercase;
//   }
// `;

// const SocialLinks = styled.div`
//   display: flex;
//   line-height: 0;

//   a {
//     color: white;
//     margin: 0 0.5rem;
//     font-size: 1rem;
//   }
// `;

const Nav = styled.nav`
  position: fixed;
  width: 100%;
  top: 0;
  /* height: 55px; */
  background: black;
  color: white;
  padding: 0 20px;
  display: flex;
  z-index: 1;
  justify-content: space-between;
`;
const Navbar = () => {
  return (
    <Nav>
      <NavCenter>
        <NavHeader>
          <Link to="/">
            <img src={logo} alt="diablo 3 reaper of souls logo" />
          </Link>
          {/* <NavLinks>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </NavLinks> */}
        </NavHeader>
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
      </NavCenter>
      <Burger />
    </Nav>
  );
};

export default Navbar;
