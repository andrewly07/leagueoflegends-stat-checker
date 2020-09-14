import React from "react";
import styled from "styled-components";
import AboutImg from "../assets/images/lisa-buijteweg-kda-small.jpg";
import ReactPlayer from "react-player/youtube";
import AhriImg from "../assets/images/AhriTeaser_carousel_notext.jpg";

const AboutPage = styled.header`
  background: rgb(30, 30, 38);
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: rgb(195, 195, 207);
  /* overflow: auto; */
  padding: 100px;
`;
const AboutContent = styled.section`
  margin: 50px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

// const GirlGroup = styled.section`
//   background: white;
//   height: 100%;
//   display: fl;
// `;

const MusicVid = styled.section`
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: 50px;
`;
const About = () => {
  return (
    <AboutPage>
      <h1>About</h1>
      <p>Meet K/DA</p>
      <img src={AboutImg} height="400px"></img>
      <AboutContent>
        <h2>The Girls</h2>

        <img src={AhriImg}></img>
        <h3></h3>
        <p>
          As the leader, founder, and main vocalist of K/DA, Ahri graces the
          stage with confident charm. The calm center of the group, she values
          authentic self-expression and encourages her team to do the same. Ahri
          takes pride in discovering new talents and shaping them towards their
          full potential.
        </p>
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
