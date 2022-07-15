import React from "react";
import Layout from "../components/Layout";
// import Hero from '../components/Hero'
import Stats from "../components/InputStats";
import CountdownTimer from "../components/CountdownTimer";

export default function home() {
  return (
    <Layout>
      <CountdownTimer />
      <Stats />
    </Layout>
  );
}
