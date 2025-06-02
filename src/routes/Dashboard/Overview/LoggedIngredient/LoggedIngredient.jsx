import React, { useState } from "react";
import { Tabs, TabList, Tab, TabPanel, tabClasses } from "@mui/joy";
import MealDetails from "./MealDetails";

const LoggedIngredient = () => {
  const [selectedMeal, setSelectedMeal] = useState("breakfast");

  const handleMealChange = (e, newValue) => {
    setSelectedMeal(newValue);
  };
  return (
    <Tabs
      aria-label="Logged ingredients"
      sx={{ bgcolor: "transparent" }}
      size="sm"
      value={selectedMeal}
      onChange={handleMealChange}
    >
      <TabList
        disableUnderline
        sx={{
          p: 1,
          gap: 0.5,
          borderRadius: "xl",
          bgcolor: "background.level1",
          [`& .${tabClasses.root}[aria-selected="true"]`]: {
            boxShadow: "sm",
            bgcolor: "background.surface",
          },
          "& > *": {
            fontSize: 12,
          },
        }}
        tabFlex={1}
      >
        <Tab disableIndicator sx={{ textAlign: "center" }} value="breakfast">
          Reggeli
        </Tab>
        <Tab disableIndicator sx={{ textAlign: "center" }} value="meal2">
          2. étkezés
        </Tab>
        <Tab disableIndicator sx={{ textAlign: "center" }} value="meal3">
          3. étkezés
        </Tab>
        <Tab disableIndicator sx={{ textAlign: "center" }} value="meal4">
          4. étkezés
        </Tab>
        <Tab disableIndicator sx={{ textAlign: "center" }} value="snack">
          Snack
        </Tab>
      </TabList>
      <TabPanel value={selectedMeal}>
        <MealDetails mealName={selectedMeal} />
      </TabPanel>
    </Tabs>
  );
};

export default LoggedIngredient;
