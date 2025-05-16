import React from "react";
import { Typography, Button, Stack, Link } from "@mui/joy";

import TestimonialCard from "./TestimonialCard";

import { FaApple } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";
import Mockup from "../../assets/images/mockup1.PNG";

import TESTIMONIALS from "./testimonials";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <Typography level="h2" fontSize={80}>
            NutriTracker
          </Typography>
          <Typography level="h3" fontSize={40} color="neutral" fontWeight={400}>
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
            Support your goals with this easy-to-use tool, take it wherever you
            are and let it be your personal assistant
          </Typography>
          <Stack direction="row" spacing={2} marginTop={3}>
            <Button to="/signup" variant="outlined" color="primary" size="lg">
              More info
            </Button>
            <Button to="/signup" variant="solid" color="primary" size="lg">
              Sign Up
            </Button>
          </Stack>
          <Stack direction="row" spacing={2} marginTop={5} flexWrap="nowrap">
            {TESTIMONIALS.map((testimonial, index) => (
              <TestimonialCard testimonial={testimonial} index={index} />
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
  );
};

export default Hero;
