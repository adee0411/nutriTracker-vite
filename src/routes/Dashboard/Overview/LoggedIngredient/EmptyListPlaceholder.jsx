import { Sheet, Typography } from "@mui/joy";

import EmptyListImg from "../../../../assets/images/undraw_breakfast_psiw.svg";

const EmptyListPlaceholder = ({ text }) => {
  return (
    <Sheet
      sx={{
        backgroundColor: "transparent",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 4,
        mt: 10,
        mb: 5,
      }}
    >
      <img
        style={{ width: "max(10%, 200px)" }}
        src={EmptyListImg}
        alt="no-data-img"
      />
      <Typography color="neutral" textAlign="center">
        {text}
      </Typography>
    </Sheet>
  );
};

export default EmptyListPlaceholder;
