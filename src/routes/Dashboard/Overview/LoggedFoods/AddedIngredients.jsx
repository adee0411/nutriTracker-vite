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
    <Stack my={4} gap={2}>
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
