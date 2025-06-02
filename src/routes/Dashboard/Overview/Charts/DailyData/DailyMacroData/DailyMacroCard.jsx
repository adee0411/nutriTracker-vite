import { Card, Stack, Typography, Sheet } from "@mui/joy";
import MacroGoalDetails from "./MacroGoalDetails";
import { SiMoleculer } from "react-icons/si";

const DailyMacroCard = () => {
  return (
    <Card sx={{ gridColumn: "span 2", border: "none", boxShadow: "md" }}>
      <Stack justifyContent="space-between" gap={2} height="100%">
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Stack>
            <Typography level="title-md" component="h2" color="neutral">
              Makronutriensek
            </Typography>
            <Typography
              level="title-sm"
              component="h2"
              color="neutral"
              fontWeight={300}
              fontSize={12}
            >
              Magas szénhidrát
            </Typography>
          </Stack>

          <Sheet
            color="warning"
            variant="soft"
            sx={{ p: 1, borderRadius: "md" }}
          >
            <Typography component="span" color="neutral" fontSize={22}>
              {" "}
              <SiMoleculer />
            </Typography>
          </Sheet>
        </Stack>
        <MacroGoalDetails
          macroType="Szénhidrát"
          goal={200}
          current={150}
          color="primary"
        />
        <MacroGoalDetails
          macroType="Fehérje"
          goal={200}
          current={100}
          color="warning"
        />
        <MacroGoalDetails
          macroType="Zsír"
          goal={80}
          current={90}
          color="success"
        />
      </Stack>
    </Card>
  );
};

export default DailyMacroCard;
