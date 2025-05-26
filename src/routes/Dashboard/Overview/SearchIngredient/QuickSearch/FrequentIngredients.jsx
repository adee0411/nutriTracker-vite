import { Stack } from "@mui/joy";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import IngredientList from "../../LoggedFoods/IngredientList";

import EmptyListPlaceholder from "../../LoggedFoods/EmptyListPlaceholder";

import IngredientListHeader from "../../LoggedFoods/IngredientListHeader";

const FrequentIngredients = () => {
  const { frequentIngredients } = useSelector((state) => state.ingredient);
  const { mealTitle } = useParams();

  const listActions = [];
  const ingredientActions = ["log", "addToFavorites"];

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
