import Welcome from "./Welcome/Welcome";

const DashboardIndex = () => {
  const isFirstLogin = true; // Replace with actual logic to check if it's the first login
  return isFirstLogin ? <Welcome /> : "";
};

export default DashboardIndex;
