import { Typography, Stack } from "@mui/joy";

const NutritionDetails = ({ nutritionData, unit, amount }) => {
  const { carb, protein, fat, energy } = nutritionData;
  return (
    <Stack gap={2} sx={{ zIndex: 1 }}>
      <Stack>
        <Typography textAlign="center" level="title-sm" fontWeight={300}>
          {`Tápanyagtartalom ${amount} ${unit}-${
            unit === "ml" ? "ben" : "ban"
          }`}
        </Typography>
      </Stack>

      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        textAlign="center"
      >
        <Stack>
          <Typography level="title-sm" fontSize={12}>
            Szénhidrát
          </Typography>
          <Typography
            level="body-sm"
            fontSize={14}
            fontWeight={300}
            color="neutral"
          >
            {carb} g
          </Typography>
        </Stack>
        <Stack>
          <Typography level="title-sm" fontSize={12}>
            Fehérje
          </Typography>
          <Typography
            level="body-sm"
            fontSize={14}
            fontWeight={300}
            color="neutral"
          >
            {protein} g
          </Typography>
        </Stack>
        <Stack>
          <Typography level="title-sm" fontSize={12}>
            Zsír
          </Typography>
          <Typography
            level="body-sm"
            fontSize={14}
            fontWeight={300}
            color="neutral"
          >
            {fat} g
          </Typography>
        </Stack>
        <Stack>
          <Typography level="title-sm" fontSize={12}>
            Energia
          </Typography>
          <Typography
            level="body-sm"
            fontSize={14}
            fontWeight={600}
            color="neutral"
          >
            {energy} cal
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default NutritionDetails;
