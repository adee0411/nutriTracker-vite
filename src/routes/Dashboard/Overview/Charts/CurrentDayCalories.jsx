import { Card, Typography } from "@mui/joy";
import CalorieGoalDetails from "../CalorieGoalDetails";

const CurrentDayCalories = () => {
  return (
    <Card
      sx={{
        boxShadow: "md",
        flex: 1,
        p: 2,
      }}
      color="neutral"
      variant="plain"
    >
      <Typography level="title-sm" color="neutral">
        Napi tápanyag-bevitel
      </Typography>
      <CalorieGoalDetails current={2100} goal={2000} />
    </Card>
  );
};

export default CurrentDayCalories;
