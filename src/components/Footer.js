import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/images/diablo-logo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faJediOrder,
} from "@fortawesome/free-brands-svg-icons";

const FooterMain = styled.footer`
  background: black;
  padding: 2rem;
  text-align: center;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FooterFlex = styled.div`
  display: flex;
`;

const DescriptionContainer = styled.div`
  width: 50%;
  color: white;
  padding: 1rem;

  img {
    width: 50%;
  }
`;

const LinksContainer = styled.div`
  width: 50%;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 1rem;

  a {
    color: white;
    text-decoration: none;
    outline: none;
    text-transform: uppercase;
    font-weight: bold;
    padding-bottom: 1rem;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  a {
    font-size: 1.5rem;
    padding: 0 1rem;
  }
`;

const CopyrightText = styled.p`
  font-size: 0.85rem;
  color: #c7c7c7;
  width: 80vw;
`;

const Footer = () => {
  return (
    <FooterMain>
      <FooterFlex>
        <DescriptionContainer>
          <Link to="/">
            <img src={logo} alt="diablo 3 reaper of souls logo" />
          </Link>
          <p>
            Quickly find your hero for Diablo III: Reaper of Souls. Built with
            React.
          </p>
        </DescriptionContainer>
        <LinksContainer>
          <Link to="/">Home</Link>
          <Link to="/contact">Contact</Link>
          <SocialLinks>
            <a href="https://www.instagram.com/callofduty">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://www.facebook.com/callofduty">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://www.callofduty.com">
              <FontAwesomeIcon icon={faJediOrder} />
            </a>
          </SocialLinks>
        </LinksContainer>
      </FooterFlex>
      <CopyrightText>
        Fair Use Notice: This web site contains copyrighted material whose use
        has not been authorized by Blizzard. This site is non-profit, and is
        intended for educational use, constituting a fair use of the copyrighted
        material (as provided for in section 107 of the US Copyright Law.) If
        you wish to use this copyrighted material for purposes that go beyond
        fair use, you must first obtain permission from Blizzard. All Diablo
        IIIrelated artwork and audio posted on this site is owned by Blizzard.
        This site is in no way affiliated or endorsed by Blizzard. For official
        Diablo III information please visit{" "}
        <a
          href="https://us.diablo3.com/en/"
          target="_blank"
          rel="noopener noreferrer"
        >
          diablo3.com
        </a>
      </CopyrightText>
    </FooterMain>
  );
};

export default Footer;
