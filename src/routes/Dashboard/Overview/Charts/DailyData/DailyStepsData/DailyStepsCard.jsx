import { Card, Stack, Typography, Sheet } from "@mui/joy";
import { IoFootstepsOutline } from "react-icons/io5";

const DailyStepsCard = () => {
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
          Lépésszám
        </Typography>
        <Sheet color="warning" variant="soft" sx={{ p: 1, borderRadius: "md" }}>
          <Typography component="span" color="neutral" fontSize={22}>
            {" "}
            <IoFootstepsOutline />
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
          7240{" "}
          <Typography fontSize={20} fontWeight={400}>
            lépés
          </Typography>
        </Typography>
        <Stack direction="row" alignItems="center" gap={1}>
          <Typography component="span">⭐</Typography>
          <Typography color="neutral">Rekord: 17244</Typography>
        </Stack>
      </Stack>
    </Card>
  );
};

export default DailyStepsCard;
