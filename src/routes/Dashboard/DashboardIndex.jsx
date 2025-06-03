// Components
import { Navigate } from "react-router";
import Welcome from "./Welcome/Welcome";

const DashboardIndex = () => {
  // Check if user logged in first ever
  const isFirstLogin = true;

  const currentDate = new Date();
  const formattedDate = `${currentDate.getFullYear()}-${String(
    currentDate.getMonth() + 1
  ).padStart(2, "0")}-${String(currentDate.getDate()).padStart(2, "0")}`;
  // Render Features Carousel OR Dashboard Index based on first login state
  return isFirstLogin ? <Welcome /> : <Navigate to={formattedDate} />;
};

export default DashboardIndex;
