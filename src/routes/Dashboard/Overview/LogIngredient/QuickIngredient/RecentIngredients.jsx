import { useSelector } from "react-redux";
import IngredientList from "../../LoggedIngredient/IngredientList";

import EmptyListPlaceholder from "../../LoggedIngredient/EmptyListPlaceholder";

import IngredientListHeader from "../../LoggedIngredient/IngredientListHeader";
import { Stack } from "@mui/joy";
import { useParams } from "react-router";

const RecentIngredients = () => {
  /*   const { recentIngredients } = useSelector((state) => state.ingredient);*/
  const { mealTitle } = useParams();

  const listActions = [];
  const ingredientActions = ["log", "addToFavorites"];

  /*** TEST*** */
  const recentIngredients = [
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
    <>
      {recentIngredients.length === 0 ? (
        <EmptyListPlaceholder text="Még nincsenek legutóbbiak." />
      ) : (
        <Stack>
          <IngredientListHeader
            listTitle="Legutóbbiak"
            listName="recentIngredients"
            listActions={listActions}
          />
          <IngredientList
            listName="recentIngredients"
            ingredientList={recentIngredients}
            actions={ingredientActions}
            mealName={mealTitle}
          />
        </Stack>
      )}
    </>
  );
};

export default RecentIngredients;
