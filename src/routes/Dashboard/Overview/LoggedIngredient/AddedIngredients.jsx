import { Stack, Typography } from "@mui/joy";

import IngredientListHeader from "./IngredientListHeader";
import IngredientList from "./IngredientList";

import { useSelector } from "react-redux";

const AddedIngredients = ({ mealName }) => {
  /*   const ingredientList = useSelector(
    (state) => state.ingredient.addedIngredients[mealName]
  ); */

  const addedListActions = ["empty", "backup"];
  const ingredientActions = ["update", "addToFavorites", "remove"];

  /*** TEST*** */
  const ingredientList = [
    {
      id: "001",
      ingredientName: "csirkecsöcs",
      amount: 200,
      unit: "g",
      nutritionData: {
        protein: 20,
        carb: 1,
        fat: 0,
        energy: 80,
      },
    },
    {
      id: "002",
      ingredientName: "csirkecsöcs",
      amount: 200,
      unit: "g",
      nutritionData: {
        protein: 20,
        carb: 1,
        fat: 0,
        energy: 80,
      },
    },
    {
      id: "003",
      ingredientName: "csirkecsöcs",
      amount: 200,
      unit: "g",
      nutritionData: {
        protein: 20,
        carb: 1,
        fat: 0,
        energy: 80,
      },
    },
  ];

  return (
    <Stack gap={2}>
      <IngredientListHeader
        listTitle="Alapanyagok"
        listName="addedIngredients"
        listActions={addedListActions}
        mealName={mealName}
      />
      <IngredientList
        listName="addedIngredients"
        mealName={mealName}
        ingredientList={ingredientList}
        actions={ingredientActions}
      />
    </Stack>
  );
};

export default AddedIngredients;
