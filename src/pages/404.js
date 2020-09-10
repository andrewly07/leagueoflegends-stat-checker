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

export default function error() {
  return (
    <Layout>
      <ErrorPage title="oops dead end">
        <p>
          <h1>Oops, we went to a dead end!</h1>
        </p>
        <p>
          <Link to="/" className="btn-block btn">
            Go Back Home{" "}
          </Link>
        </p>
      </ErrorPage>
    </Layout>
  );
}
