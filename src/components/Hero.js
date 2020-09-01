import React from "react";
import styled from "styled-components";
import BgImage from "../assets/images/diablo-reaper-of-souls.jpg";
import Title from "./Title";

const HeroMain = styled.section`
  height: 60vh;
  background-image: url(${BgImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  background-attachment: fixed;
  margin-top: 4rem;
  @media (max-width: 767px) {
    background-attachment: scroll;
  }
`;

const Hero = () => {
  return (
    <HeroMain>
      <Title
        title="Diablo III: Reaper of Souls"
        subtitle="Hero Lore"
        desc="Learn about a character's journey to find and stop Malthael, the fallen angel."
      />
    </HeroMain>
  );
};

export default Hero;
