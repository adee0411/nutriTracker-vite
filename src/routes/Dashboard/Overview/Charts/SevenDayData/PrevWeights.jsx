import { Stack, Card, Typography, Box } from "@mui/joy";
import { LineChart } from "@mui/x-charts/LineChart";

const TEST_WEIGHT_DATA = [
  {
    data: 100,
    date: "05.20.",
  },
  {
    data: 100,
    date: "05.20.",
  },
  {
    data: 100,
    date: "05.20.",
  },
  {
    data: 100,
    date: "05.20.",
  },
  {
    data: 100,
    date: "05.20.",
  },
  {
    data: 100,
    date: "05.20.",
  },
  {
    data: 100,
    date: "05.20.",
  },
];

const PrevWeights = () => {
  return (
    <>
      <LineChart
        xAxis={[
          {
            data: [
              "05.20",
              "05.21",
              "05.22",
              "05.23",
              "05.24",
              "05.25",
              "05.26",
            ],
            scaleType: "band",
          },
        ]}
        series={[
          {
            data: [104.2, 104.4, 104.1, 104.0, 103.8, 103.66, 103.9],
            color: "var(--joy-palette-primary-500, #0B6BCB)",
            showMark: false,
          },
        ]}
        height={150}
      />
      {/**    <Stack
      direction="horizontal"
      flexWrap="wrap"
      gap={1}
      justifyContent="center"
    >
      {TEST_WEIGHT_DATA.map((data) => (
        <Card variant="plain" sx={{ boxShadow: "md", flex: 1, p: 1 }}>
          <Stack justifyContent="center" alignItems="center">
            <Typography level="body-sm">{data.date}</Typography>
            <Typography level="body-sm" fontWeight={600} textAlign="center">
              {data.data} kg
            </Typography>
          </Stack>
        </Card>
      ))}
    </Stack> */}
    </>
  );
};

export default PrevWeights;
