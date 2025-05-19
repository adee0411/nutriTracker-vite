import React, { useState } from "react";
import { Typography, Box, Button, Stack } from "@mui/joy";

import FeatureLayout from "./FeatureLayout";

import ImageMan from "../../../assets/images/Diet-bro.svg";
import ImageWoman from "../../../assets/images/Diet-sis.svg";

import LogImage from "../../../assets/images/healthy food-amico.svg";
import TrackImage from "../../../assets/images/analytics-bro.svg";
import EditImage from "../../../assets/images/Setup-rafiki.svg";

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

  const handleNextFeature = () => {
    if (currentFeature === FEATURES.length - 1) return;
    setCurrentFeature(currentFeature + 1);
  };

  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: "0 auto",
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
          p: 10,
        }}
      >
        <FeatureLayout currentFeature={currentFeature} features={FEATURES} />

        <Stack direction="row" gap={10} width="100%" justifyContent="center">
          <Button variant="outlined" fullWidth sx={{ maxWidth: 250 }}>
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
