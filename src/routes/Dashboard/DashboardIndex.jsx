// Components
import Welcome from "./Welcome/Welcome";
import Overview from "./Overview/Overview";

const DashboardIndex = () => {
  const isFirstLogin = false; // Replace with actual logic to check if it's the first login

  // Render Features Carousel OR Dashboard Index based on first login state
  return isFirstLogin ? <Welcome /> : <Overview />;
};

export default DashboardIndex;
