import React from "react";
import styled from "styled-components";
import AboutImg from "../assets/images/lisa-buijteweg-kda-small.jpg";
import ReactPlayer from "react-player/youtube";

const AboutPage = styled.header`
  background: white;
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: black;
  /* overflow: auto; */
  padding: 100px;
`;
const AboutContent = styled.section`
  background: white;
  height: 100%;
  /* display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: black; */
  /* display: inline-block; */
`;

const AboutAhri = styled.section`
  background: white;
  height: 100%;
  display: fl;
`;

const MusicVid = styled.section`
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  flex-grow: 1;
`;
const About = () => {
  return (
    <AboutPage>
      <h1>About</h1>
      <p>Meet K/DA</p>
      <img src={AboutImg} height="400px"></img>
      <AboutContent>
        <h2>The Girls</h2>
        <p>(Click Through)</p>
      </AboutContent>
      <h2>The Music Videos</h2>

      <MusicVid>
        <ReactPlayer
          url={
            "https://www.youtube.com/watch?v=UOxkGD8qRB4&ab_channel=LeagueofLegends"
          }
        ></ReactPlayer>
        <ReactPlayer
          url={
            "https://www.youtube.com/watch?v=RkID8_gnTxw&feature=emb_title&ab_channel=LeagueofLegends"
          }
        ></ReactPlayer>
      </MusicVid>
    </AboutPage>
  );
};

export default About;
