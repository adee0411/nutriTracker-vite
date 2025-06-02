import { Card, Typography, ButtonGroup, Button, Stack } from "@mui/joy";
import { useState } from "react";

import PrevCalories from "./PrevCalories";
import PrevWeights from "./PrevWeights";
import PrevSteps from "./PrevSteps";

import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { IoScaleOutline } from "react-icons/io5";
import { IoFootstepsOutline } from "react-icons/io5";
import { LiaBurnSolid } from "react-icons/lia";

const dataTypes = [
  {
    type: "energy",
    component: <PrevCalories />,
    title: "Kalória",
    icon: <LiaBurnSolid />,
  },
  {
    type: "weight",
    component: <PrevWeights />,
    title: "Testsúly",
    icon: <IoScaleOutline />,
  },
  {
    type: "steps",
    component: <PrevSteps />,
    title: "Lépésszám",
    icon: <IoFootstepsOutline />,
  },
];

const LastSevenDaysCard = () => {
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
        height: "100%",
        gridColumn: "span 3",
      }}
      variant="plain"
    >
      <Stack direction="row" justifyContent="space-between">
        <Stack gap={0} direction="column">
          <Typography
            level="title-sm"
            component="h2"
            color="neutral"
            display="flex"
            gap={1}
            alignItems="center"
          >
            <Typography component="span">
              {" "}
              {dataTypes[currentData].icon}
            </Typography>
            <Typography component="span">{`${dataTypes[currentData].title}`}</Typography>
          </Typography>
          <Typography
            level="title-sm"
            component="h2"
            color="neutral"
            fontWeight={300}
            fontSize={12}
          >
            Elmúlt 7 nap
          </Typography>
        </Stack>

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
export default LastSevenDaysCard;
