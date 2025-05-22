import { Typography, Stack } from "@mui/joy";

import AlertBox from "./AlertBox";

import DailyGoalProgress from "./DailyGoalProgress";

import TargetIcon from "../../../assets/icons/target_128.png";
import FoodIcon from "../../../assets/icons/healthy-food.png";

const CalorieGoalDetails = ({ current, goal }) => {
  const calorieDifference = current - goal;

  return (
    <>
      <Stack direction="row" gap={2}>
        <Stack alignItems="center" gap={1} flex={1}>
          <Stack direction="column" alignItems="center" gap="2px">
            <img src={FoodIcon} alt="food" width={24} height={24} />
            <Typography level="title-sm" fontWeight={400}>
              Bevitt
            </Typography>
            <Typography level="body-lg" fontWeight={700}>
              {current} kcal
            </Typography>
          </Stack>
        </Stack>
        <Stack gap="4px" flex={1} justifyContent="center" alignItems="center">
          <DailyGoalProgress
            current={current}
            goal={goal}
            size="md"
            type="circular"
          />
        </Stack>
        <Stack direction="column" alignItems="center" gap="2px" flex={1}>
          <img src={TargetIcon} alt="food" width={24} height={24} />
          <Typography level="title-sm" fontWeight={400}>
            Cél
          </Typography>
          <Typography level="body-lg" fontWeight={700}>
            {goal} kcal
          </Typography>
        </Stack>
      </Stack>{" "}
      {calorieDifference > 0 ? (
        <AlertBox calorieDifference={calorieDifference} />
      ) : (
        ""
      )}
    </>
  );
};

export default CalorieGoalDetails;
