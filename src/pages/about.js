import React from "react";
import Layout from "../components/Layout";
import styled from "styled-components";
import About from "../components/About";

const AboutPage = styled.header`
  background: white;
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: black;
`;
export default function about() {
  return (
    <Layout>
      <About />
      {/* <h5>leave me a message</h5> */}
      {/* <h1>This is the contact page fool</h1> */}
      <AboutPage>
        {" "}
        <h1>About me</h1>
      </AboutPage>
    </Layout>
  );
}
