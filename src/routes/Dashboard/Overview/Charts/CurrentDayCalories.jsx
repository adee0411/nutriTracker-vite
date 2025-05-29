import { Card, Typography, Stack, Sheet } from "@mui/joy";
import CalorieGoalDetails from "../CalorieGoalDetails";
import { LiaBurnSolid } from "react-icons/lia";

const CurrentDayCalories = () => {
  return (
    <Card
      sx={{
        boxShadow: "md",
        flex: 1,
        p: 2,
        height: "100%",
        gridColumn: "span 4",
      }}
      color="neutral"
      variant="plain"
    >
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography level="title-md" component="h2" color="neutral">
          Bevitt kalória
        </Typography>
        <Sheet color="success" variant="soft" sx={{ p: 1, borderRadius: "md" }}>
          <Typography component="span" color="neutral" fontSize={22}>
            {" "}
            <LiaBurnSolid />
          </Typography>
        </Sheet>
      </Stack>
      <CalorieGoalDetails current={2100} goal={2000} />
    </Card>
  );
};

export default CurrentDayCalories;
