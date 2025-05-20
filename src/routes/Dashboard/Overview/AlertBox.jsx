import { Alert, Typography } from "@mui/joy";

const AlertBox = ({ calorieDifference }) => {
  return (
    <Alert variant="soft" color="warning" size="sm" sx={{ width: "inherit" }}>
      <Typography textAlign="center" level="body-sm" fontSize={12}>
        A mai napon{" "}
        <Typography fontWeight={700}>{calorieDifference} kcal</Typography>{" "}
        többletben vagy a célhoz képest!
      </Typography>{" "}
    </Alert>
  );
};

export default AlertBox;
