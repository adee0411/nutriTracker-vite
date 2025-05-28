import { Stack, Card } from "@mui/joy";
const TEST_WEIGHT_DATA = [100, 99, 98, 97, 96, 95, 94];

const PrevWeights = () => {
  return (
    <Stack direction="horizontal" flexWrap="wrap" gap={1}>
      {TEST_WEIGHT_DATA.map((data) => (
        <Card variant="plain" sx={{ boxShadow: "md" }}>
          {data} kg
        </Card>
      ))}
    </Stack>
  );
};

export default PrevWeights;
