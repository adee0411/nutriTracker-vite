import { Card, Typography, ButtonGroup, Button, Stack } from "@mui/joy";
import PrevCalories from "./PrevCalories";
import PrevWeights from "./PrevWeights";
import PrevSteps from "./PrevSteps";

import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { useState } from "react";

const dataTypes = [
  { type: "energy", component: <PrevCalories />, title: "Kalória" },
  { type: "weight", component: <PrevWeights />, title: "Testsúly" },
  { type: "steps", component: <PrevSteps />, title: "Lépésszám" },
];

const LastSevenDaysData = () => {
  const [currentData, setCurrentData] = useState(0);

  const handleDataRender = (e) => {
    const stepType = e.currentTarget.ariaRoleDescription;
    switch (stepType) {
      case "inc":
        currentData === dataTypes.length - 1
          ? setCurrentData(0)
          : setCurrentData(currentData + 1);
        break;
      case "dec":
        currentData === 0
          ? setCurrentData(dataTypes.length - 1)
          : setCurrentData(currentData - 1);
        break;
      default:
        return;
    }
  };
  return (
    <Card
      sx={{
        boxShadow: "md",
        flex: 1,
        p: 2,
      }}
      variant="plain"
    >
      <Stack direction="row" justifyContent="space-between">
        <Typography level="title-sm" color="neutral">
          Elmúlt 7 nap {`(${dataTypes[currentData].title})`}
        </Typography>
        <ButtonGroup variant="plain" color="neutral" size="sm" spacing={2}>
          <Button onClick={handleDataRender} aria-roledescription="dec">
            <IoIosArrowBack />
          </Button>
          <Button onClick={handleDataRender} aria-roledescription="inc">
            <IoIosArrowForward />
          </Button>
        </ButtonGroup>
      </Stack>
      {dataTypes[currentData].component}
    </Card>
  );
};
export default LastSevenDaysData;
