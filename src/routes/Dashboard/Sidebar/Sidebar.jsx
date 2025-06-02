// Joy UI components
import { Sheet } from "@mui/joy";

// Custom CSS styles
import "./Sidebar.css";

// Components
import Logo from "./Logo";
import Navigation from "./Navigation";

const Sidebar = () => {
  return (
    <nav id="dashboard-nav">
      <Sheet color="primary" variant="plain" sx={{ height: "100%" }}>
        <header>
          <Logo />
        </header>
        <Navigation />
      </Sheet>
    </nav>
  );
};

export default Sidebar;
