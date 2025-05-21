import { Alert, Typography } from "@mui/joy";

const AlertBox = ({ calorieDifference }) => {
  return (
    <Alert
      variant="plain"
      color="warning"
      size="sm"
      sx={{ width: "inherit", background: "transparent" }}
    >
      <Typography
        textAlign="center"
        level="body-sm"
        fontSize={12}
        color="warning"
      >
        A mai napon{" "}
        <Typography fontWeight={700}>{calorieDifference} kcal</Typography>{" "}
        többletben vagy a célhoz képest!
      </Typography>{" "}
    </Alert>
  );
};

export default AlertBox;
