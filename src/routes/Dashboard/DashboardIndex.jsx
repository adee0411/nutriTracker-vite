import Welcome from "./Welcome/Welcome";
import Overview from "./Overview/Overview";

const DashboardIndex = () => {
  const isFirstLogin = true; // Replace with actual logic to check if it's the first login
  return isFirstLogin ? <Welcome /> : <Overview />;
};

export default DashboardIndex;
