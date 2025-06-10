import React from "react";
import { Card, Stack, Typography, Sheet } from "@mui/joy";
import { IoScaleOutline } from "react-icons/io5";

const DailyWeightCard = () => {
  return (
    <Card
      sx={{
        boxShadow: "md",
        flex: 1,
        p: 2,
        gridColumn: "span 2",
        border: "none",
      }}
    >
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography level="title-md" component="h2" color="neutral">
          Testsúly
        </Typography>
        <Sheet color="primary" variant="soft" sx={{ p: 1, borderRadius: "md" }}>
          <Typography component="span" color="neutral" fontSize={22}>
            {" "}
            <IoScaleOutline />
          </Typography>
        </Sheet>
      </Stack>
      <Stack
        height="100%"
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Typography fontSize={40} fontWeight={600}>
          104{" "}
          <Typography fontSize={20} fontWeight={400}>
            kg
          </Typography>
        </Typography>
        <Stack direction="row" alignItems="center" gap={1}>
          <Typography component="span">🎯</Typography>
          <Typography color="neutral">A célig: 14 kg</Typography>
        </Stack>
      </Stack>
    </Card>
  );
};

export default DailyWeightCard;
