import React from "react";
import styled from "styled-components";
import BgImage from "../assets/images/lol.jpg";
import Title from "./Title";

const HeroMain = styled.section`
  height: 80vh;
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
        title="League of Legends: KDA"
        subtitle="Champion Data"
        desc="Learn about a champion's journey through the guidance of K/DA, the virtual Korean Pop group."
      />
    </HeroMain>
  );
};

export default Hero;
