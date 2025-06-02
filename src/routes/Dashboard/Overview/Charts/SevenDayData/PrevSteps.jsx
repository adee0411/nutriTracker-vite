import { Stack } from "@mui/joy";
import CustomBarChart from "../CustomBarChart";

const TEST_STEPS_DATA = [
  { date: "05.20.", value: 2300 },
  { date: "05.21.", value: 12400 },
  { date: "05.22.", value: 5500 },
  { date: "05.23.", value: 9450 },
  { date: "05.24.", value: 17432 },
  { date: "05.25.", value: 7654 },
  { date: "05.26.", value: 1204 },
];

const PrevSteps = () => {
  const goal = 10000;

  return (
    <>
      <CustomBarChart
        data={TEST_STEPS_DATA}
        goal={goal}
        unit=""
        fillType="reversed"
      />
    </>
  );
};

export default PrevSteps;
