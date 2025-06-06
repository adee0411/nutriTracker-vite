// React Hooks
import React, { useState } from "react";
import { useNavigate } from "react-router";
// Joy UI components
import { Box, Button, Stack } from "@mui/joy";

// Components
import FeatureLayout from "./FeatureLayout";

// Assets
import ImageMan from "../../../assets/images/Diet-bro.svg";
import ImageWoman from "../../../assets/images/Diet-sis.svg";
import LogImage from "../../../assets/images/healthy food-amico.svg";
import TrackImage from "../../../assets/images/analytics-bro.svg";
import EditImage from "../../../assets/images/Setup-rafiki.svg";

// Features Map
const FEATURES = [
  {
    title: "Köszöntünk a Nutritracker alkalmazásban!",
    description:
      "Örülünk, hogy csatlakoztál! Az egészségesebb táplálkozás útja itt kezdődik. Kövesd az étkezéseidet, állíts be célokat, és szerezz hasznos visszajelzéseket, hogy egyre egészségesebb életet élhess — falatonként. Vágjunk bele! 💪",
    image: ImageMan,
  },
  {
    title: "Ételek, alapanyagok naplózása",
    description:
      "Keress rá a nap során elfogyasztott ételeidre és alapanyagaidra egy folyamatosan bővülő adatbázisban, naplózd őket és kövesd a napi tápanyag-beviteledet!",
    image: LogImage,
  },
  {
    title: "Saját alapanyagok, kedvencek",
    description:
      "Ha nem találod a keresett alapanyagot, adj hozzá sajátokat! Mentsd el kedvenceidet, hogy gyorsan naplózni tudd őket!",
    image: EditImage,
  },
  {
    title: "Határozz meg célokat, érj el eredményeket",
    description:
      "Ha konkrét céljaid vannak, kezdj el egy diétás periódust és kövesd a fejlődésed!",
    image: TrackImage,
  },
  {
    title: "Személyre szabott tippek, érdekességek",
    description:
      "Segítünk a céljaid elérésében személyre szabott tippekkel, ötletekkel és naponta kaphatsz tanulmányokkal alátámasztott érdekességeket.",
    image: TrackImage,
  },
];

const Welcome = () => {
  const [currentFeature, setCurrentFeature] = useState(0);
  const navigate = useNavigate();

  const handleNextFeature = () => {
    if (currentFeature === FEATURES.length - 1) return;
    setCurrentFeature(currentFeature + 1);
  };

  const navigateToDashboard = () => {
    const currentDate = new Date();
    const formattedDate = `${currentDate.getFullYear()}-${String(
      currentDate.getMonth() + 1
    ).padStart(2, "0")}-${String(currentDate.getDate()).padStart(2, "0")}`;
    navigate(`/dashboard/${formattedDate}`);
  };

  return (
    <Box
      className="centered"
      sx={{
        height: "100%",
        margin: "0 auto",
        p: 10,
      }}
    >
      <Box
        sx={{
          height: "100%",
          width: "80%",
          maxWidth: "800px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "0 auto",
          p: 2,
        }}
      >
        <FeatureLayout currentFeature={currentFeature} features={FEATURES} />

        <Stack direction="row" gap={10} width="100%" justifyContent="center">
          <Button
            variant="outlined"
            fullWidth
            sx={{ maxWidth: 250 }}
            onClick={navigateToDashboard}
          >
            Elkezdem
          </Button>

          {currentFeature !== FEATURES.length - 1 ? (
            <Button
              variant="solid"
              fullWidth
              sx={{ maxWidth: 250 }}
              onClick={handleNextFeature}
            >
              {currentFeature === 0 ? "Felfedezés" : "Következő"}
            </Button>
          ) : (
            ""
          )}
        </Stack>
      </Box>
    </Box>
  );
};

export default Welcome;
