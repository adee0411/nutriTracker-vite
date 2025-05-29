import { Box, Stack, Typography } from "@mui/joy";
import CustomProgressBar from "./CustomProgressBar";

const CustomBarChart = ({ data, goal, unit, fillType }) => {
  const goalLineStyle = {
    width: "110%",
    height: "0",
    borderTop: "1px dashed #ccc",
    position: "absolute",
    top: "calc(20% + 2px)" /** maximum bar value * 4/5 */,
    left: "-5%",
    transform: "translateY(-50%)",
  };
  // Bar height = goal height + 25%
  const barMaxValue = goal * 1.25;
  const average = (
    data.reduce((acc, data) => {
      let correctedValue = data.value;
      if (data.value === 0) correctedValue = goal;
      return (acc += correctedValue);
    }, 0) / data.length
  ).toFixed(0);
  return (
    <Stack
      height="100%"
      width="90%"
      marginInline="auto"
      flexDirection="column"
      gap={2}
    >
      <Stack
        direction="row"
        width="100%"
        height="100%"
        justifyContent="space-between"
        position="relative"
      >
        <div style={goalLineStyle}></div>
        {data.map((data, i) => {
          return (
            <CustomProgressBar
              key={i}
              value={data.value}
              date={data.date}
              barMaxValue={barMaxValue}
              unit={unit}
              goal={goal}
              fillType={fillType}
            />
          );
        })}
      </Stack>
      <Stack direction="row" width="100%" justifyContent="space-between">
        <Typography color="neutral" textAlign="center" level="body-sm">
          Cél: {goal} {unit}
        </Typography>
        <Typography color="neutral" textAlign="center" level="body-sm">
          Átlag: {average} {unit}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default CustomBarChart;
