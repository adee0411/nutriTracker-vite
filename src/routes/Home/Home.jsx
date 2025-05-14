import React from "react";
import { Sheet, Typography, Button, Stack, Link } from "@mui/joy";
import { Link as RouterLink } from "react-router";
import Logo from "../../assets/icons/logo_200px_primary.svg";
import Mockup from "../../assets/images/mockup1.PNG";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Sheet
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          background: "transparent",
        }}
      >
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "1rem 5rem",
            backgroundColor: "transparent",
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
          <nav>
            <Stack direction="row" spacing={10}>
              <Link
                component={RouterLink}
                to="/features"
                sx={{ "&:hover": { color: "pink", textDecoration: "none" } }}
              >
                Features
              </Link>
              <Link
                component={RouterLink}
                to="/pricing"
                sx={{ "&:hover": { color: "pink", textDecoration: "none" } }}
              >
                Pricing
              </Link>
              <Link
                component={RouterLink}
                to="/about"
                sx={{ "&:hover": { color: "pink", textDecoration: "none" } }}
              >
                About
              </Link>
            </Stack>
          </nav>
          <Stack direction={"row"} spacing={2}>
            <Button color="primary" variant="solid">
              Sign Up
            </Button>
            <Button color="primary" variant="outlined">
              Sign In
            </Button>
          </Stack>
        </header>
      </Sheet>
      <div className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <Typography level="h2" fontSize={80}>
              NutriTracker Track Your Nutrition
            </Typography>
            <Typography level="h2" color="neutral" fontWeight={400}>
              Stay healthy and fit with NutriTracker
            </Typography>
            <Button
              component={RouterLink}
              to="/signup"
              variant="solid"
              color="primary"
              size="lg"
            >
              Get Started
            </Button>
          </div>
        </div>
        <div className="hero-image">
          <img
            src={Mockup}
            alt="mockup"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </div>
    </>
  );
};

export default Home;
