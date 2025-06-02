import { Stack } from "@mui/joy";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import IngredientList from "../../LoggedIngredient/IngredientList";

import EmptyListPlaceholder from "../../LoggedIngredient/EmptyListPlaceholder";

import IngredientListHeader from "../../LoggedIngredient/IngredientListHeader";

const FrequentIngredients = () => {
  /*   const { frequentIngredients } = useSelector((state) => state.ingredient);
  const { mealTitle } = useParams(); */

  const listActions = [];
  const ingredientActions = ["log", "addToFavorites"];

  /** TEST */
  const frequentIngredients = [];

  return (
    <>
      {frequentIngredients.length === 0 ? (
        <EmptyListPlaceholder text="Még nincsenek gyakoriak." />
      ) : (
        <Stack>
          <IngredientListHeader
            listTitle="Gyakoriak"
            listName="frequentIngredients"
            listActions={listActions}
          />
          <IngredientList
            listName="frequentIngredients"
            ingredientList={frequentIngredients}
            actions={ingredientActions}
            mealName={mealTitle}
          />
        </Stack>
      )}
    </>
  );
};

export default FrequentIngredients;
