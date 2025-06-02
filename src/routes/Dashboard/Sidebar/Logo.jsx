// Joy UI components
import { Box, Typography } from "@mui/joy";

// Assets
import LogoImg from "../../../assets/icons/logo_200px_primary.svg";

const Logo = () => {
  return (
    <Box
      display={"flex"}
      flexDirection="column"
      justifyContent={"center"}
      alignItems="center"
      padding={2}
      borderBottom={"none"}
    >
      <img
        src={LogoImg}
        alt="Logo"
        width={40}
        height={"auto"}
        style={{ aspectRatio: 1 }}
      />
      <Typography level="h1" color="primary" fontSize={20}>
        NutriTracker
      </Typography>
    </Box>
  );
};

export default Logo;
