import React, { useState, useEffect } from "react";
import "./Home.css";
import { Sheet, Typography, Button, Stack, Link } from "@mui/joy";
import { Link as RouterLink } from "react-router";
import Logo from "../../assets/icons/logo_200px_primary.svg";
import Mockup from "../../assets/images/mockup1.PNG";
import AppleIcon from "../../assets/icons/apple_200px_white.svg";
import { FaGooglePlay } from "react-icons/fa";

import { FaApple } from "react-icons/fa";

const Home = () => {
  const [isHeaderSolid, setIsHeaderSolid] = useState(false);
  const handleScroll = () => {
    const headerHeight = document.querySelector("header").offsetHeight;
    if (window.scrollY > headerHeight) {
      setIsHeaderSolid(true);
    } else {
      setIsHeaderSolid(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <Sheet
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          background: `${
            isHeaderSolid ? "rgb(255 255 255 / 80%)" : "transparent"
          }`,
          transition: "background-color 0.3s ease",
          backdropFilter: `${isHeaderSolid ? "blur(10px)" : "none"}`,
        }}
      >
        <header
          style={{
            display: "flex",
            alignItems: "center",
            padding: "1rem 0",
            background: "transparent",
            width: "70%",
            margin: "0 auto",
          }}
        >
          <Link
            component={RouterLink}
            to="/"
            sx={{
              textDecoration: "none",
              "&:hover": { textDecoration: "none" },
            }}
          >
            <Stack direction="row" spacing={1} alignItems="center">
              {" "}
              <img src={Logo} alt="Logo" style={{ height: "50px" }} />
              <Typography level="h1" color="primary">
                NutriTracker
              </Typography>
            </Stack>
          </Link>
          <Stack direction={"row"} spacing={8} marginLeft="auto">
            <nav>
              <Stack
                direction="row"
                height="100%"
                spacing={10}
                alignItems="center"
                sx={{
                  "& a": {
                    textDecoration: "none",
                    color: `${
                      isHeaderSolid
                        ? "var(--joy-palette-primary-500, #0B6BCB)"
                        : "rgba(255, 255, 255, 0.8)"
                    }`,
                    fontSize: "1rem",
                    "&:hover": {
                      textDecoration: "none",
                    },
                  },
                }}
              >
                <Link component={RouterLink} to="/features">
                  Features
                </Link>
                <Link component={RouterLink} to="/pricing">
                  Pricing
                </Link>
                <Link component={RouterLink} to="/about">
                  About
                </Link>
              </Stack>
            </nav>
            <Stack direction={"row"} spacing={2}>
              <Button color="primary" variant="solid" sx={{ fontSize: "1rem" }}>
                Sign Up
              </Button>
              <Button
                color="primary"
                variant="outlined"
                sx={{ fontSize: "1rem" }}
              >
                Sign In
              </Button>
            </Stack>
          </Stack>
        </header>
      </Sheet>
      <div className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <Typography level="h2" fontSize={80}>
              NutriTracker
            </Typography>
            <Typography
              level="h3"
              fontSize={40}
              color="neutral"
              fontWeight={400}
            >
              Start a{" "}
              <Typography component="span" color="primary">
                healthy life
              </Typography>{" "}
              by tracking what you eat
            </Typography>
            <Typography
              level="h3"
              fontSize={20}
              width="80%"
              color="neutral"
              fontWeight={400}
            >
              Support your goals with this easy-to-use tool, take it wherever
              you are and let it be your personal assistant
            </Typography>
            <Stack direction="row" spacing={2} marginTop={3}>
              <Button
                component={RouterLink}
                to="/signup"
                variant="outlined"
                color="primary"
                size="lg"
              >
                More info
              </Button>
              <Button
                component={RouterLink}
                to="/signup"
                variant="solid"
                color="primary"
                size="lg"
              >
                Sign Up
              </Button>
            </Stack>
            <Stack direction="row" spacing={2} marginTop={5} flexWrap="nowrap">
              {[
                {
                  name: "Dereck Korner",
                  text: '"NutriTracker has completely changed the way I track my meals. It\'s so easy to use!"',
                  rating: 5,
                  image: "https://via.placeholder.com/100",
                },
                {
                  name: "Arthur McGuire",
                  text: '"I love how NutriTracker helps me stay on top of my fitness goals. Highly recommend!"',
                  rating: 4,
                  image: "https://via.placeholder.com/100",
                },
                {
                  name: "Sevana Johnson",
                  text: '"The best app for nutrition tracking. It has everything I need!"',
                  rating: 5,
                  image: "https://via.placeholder.com/100",
                },
              ].map((testimonial, index) => (
                <Sheet
                  key={index}
                  sx={{
                    width: "250px",
                    padding: "1.5rem",
                    borderRadius: "8px",
                    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                    textAlign: "center",
                    margin: "1rem",
                  }}
                >
                  <Typography level="title-sm" fontSize={14} fontWeight={500}>
                    {testimonial.name}
                  </Typography>
                  <Typography
                    level="body1"
                    fontSize={12}
                    color="neutral"
                    marginY={1}
                  >
                    {testimonial.text}
                  </Typography>
                  <Typography level="body2" fontSize={14} color="primary">
                    {"⭐".repeat(testimonial.rating)}
                  </Typography>
                </Sheet>
              ))}
            </Stack>
            <Stack direction="row" spacing={2} marginTop={3}>
              <Link
                to="/signup"
                sx={{
                  backgroundColor: "#000",
                  color: "#fff",
                  borderRadius: "6px",
                  padding: "0.7rem 1rem",
                }}
                size="lg"
                startDecorator={<FaApple />}
              >
                Download on the App Store
              </Link>
              <Link
                to="/signup"
                sx={{
                  backgroundColor: "#000",
                  borderRadius: "6px",
                  color: "#fff",
                  padding: "0.7rem 1rem",
                }}
                size="lg"
                startDecorator={<FaGooglePlay />}
              >
                Download on Google Play
              </Link>
            </Stack>
          </div>
          <div className="hero-image">
            <img
              src={Mockup}
              alt="mockup"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>
      </div>
      <main className="main-content">
        <section className="features"></section>
      </main>
    </>
  );
};

export default Home;
