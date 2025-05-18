import React, { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link, Stack, Typography, Button, Sheet } from "@mui/joy";
import Logo from "../../assets/icons/logo_200px_primary.svg";
import { useContext } from "react";
import { AuthContext } from "../../../backend/authentication/authContext";

const Header = () => {
  const [isHeaderSolid, setIsHeaderSolid] = useState(false);

  // Auth context
  const authContext = useContext(AuthContext);
  const { isLoading, loginUser, isLoggedIn } = authContext;

  const navigate = useNavigate();

  const handleLoginUser = (e) => {
    e.preventDefault();
    loginUser("adee0411@gmail.com", "000000").then((response) => {
      if (response) {
        console.log(isLoggedIn);
        navigate("/dashboard");
      } else {
        console.log("Login failed");
      }
    });
  };

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
              onClick={handleLoginUser}
              loading={isLoading}
            >
              Log In
            </Button>
          </Stack>
        </Stack>
      </header>
    </Sheet>
  );
};

export default Header;
