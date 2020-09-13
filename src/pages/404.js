import React from "react";
import Layout from "../components/Layout";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ErrorPage = styled.header`
  background: white;
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const BackButton = styled.button`
  background-color: #663399;
  color: #ffffff;
  padding: 15px;
  margin: 10px;
`;

export default function error() {
  return (
    <Layout>
      <ErrorPage>
        <p>
          <h1>Oops, We Hit A Dead End! :(</h1>
        </p>
        <p>
          <Link to="/">
            <BackButton> Go Back Home</BackButton>
          </Link>
        </p>
      </ErrorPage>
    </Layout>
  );
}
