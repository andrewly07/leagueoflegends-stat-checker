import React from "react";
import Layout from "../components/Layout";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ErrorPage = styled.section`
  background: white;
  min-height: calc(100vh - 62px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function error() {
  return (
    <Layout>
      <ErrorPage title="oops dead end">
        <h1>Oops, we made a mistake!</h1>
        <Link to="/" className="btn">
          Go Back Home
        </Link>
      </ErrorPage>
    </Layout>
  );
}
