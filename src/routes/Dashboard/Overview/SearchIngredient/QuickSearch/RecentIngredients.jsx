import { useSelector } from "react-redux";
import IngredientList from "../../LoggedFoods/IngredientList";

import EmptyListPlaceholder from "../../LoggedFoods/EmptyListPlaceholder";

import IngredientListHeader from "../../LoggedFoods/IngredientListHeader";
import { Stack } from "@mui/joy";
import { useParams } from "react-router";

const RecentIngredients = () => {
  const { recentIngredients } = useSelector((state) => state.ingredient);
  const { mealTitle } = useParams();

  const listActions = [];
  const ingredientActions = ["log", "addToFavorites"];

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
