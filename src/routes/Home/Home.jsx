import "./Home.css";

import { Stack, Typography } from "@mui/joy";

import Header from "./Header";
import Hero from "./Hero";
import Features from "./Features";

const Home = () => {
  return (
    <>
      {/***** HEADER *****/}
      <Header />

      {/***** HERO SECTION *****/}
      <Hero />

      {/***** MAIN CONTENT *****/}
      <main className="main-content">
        <Features />
      </main>
    </>
  );
};

export default Home;
