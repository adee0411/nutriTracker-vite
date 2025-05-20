import { Typography, Stack } from "@mui/joy";

import AlertBox from "./AlertBox";

import DailyGoalProgress from "./DailyGoalProgress";

import TargetIcon from "../../../assets/icons/target_128.png";
import FoodIcon from "../../../assets/icons/healthy-food.png";

const CalorieGoalDetails = ({ current, goal }) => {
  const calorieDifference = current - goal;

  return (
    <Stack alignItems="center" justifyContent="center" gap={2} flex={1}>
      <DailyGoalProgress
        current={current}
        goal={goal}
        size="sm"
        type="circular"
      />

      <Stack
        direction="row"
        justifyContent="space-between"
        width="100%"
        textAlign="center"
      >
        <Stack alignItems="center" gap={1} flex={1}>
          <img src={FoodIcon} alt="food" width={24} />
          <Typography level="title-sm">Bevitt</Typography>
          <Typography level="body-sm" fontWeight={600}>
            {current} kcal
          </Typography>
        </Stack>

        <Stack flex={1}>
          <Typography
            level="title-sm"
            color={calorieDifference > 0 ? "danger" : "primary"}
          >
            {calorieDifference > 0 ? "Túllépve" : "Maradt"}
          </Typography>
          <Typography
            level="body-lg"
            fontWeight={800}
            color={calorieDifference > 0 ? "danger" : "primary"}
          >
            {Math.abs(calorieDifference)} kcal
          </Typography>
        </Stack>
        <Stack alignItems="center" gap={1} flex={1}>
          <img src={TargetIcon} alt="food" width={24} />
          <Typography level="title-sm">Cél</Typography>
          <Typography level="body-sm" fontWeight={600}>
            {goal} kcal
          </Typography>
        </Stack>
      </Stack>
      {calorieDifference > 0 ? (
        <AlertBox calorieDifference={calorieDifference} />
      ) : (
        ""
      )}
    </Stack>
  );
};

export default CalorieGoalDetails;
