import { Stack } from "@mui/joy";

import { useSelector } from "react-redux";
import { useParams } from "react-router";
import IngredientList from "../../LoggedIngredient/IngredientList";

import EmptyListPlaceholder from "../../LoggedIngredient/EmptyListPlaceholder";

import IngredientListHeader from "../../LoggedIngredient/IngredientListHeader";

const FavoriteIngredients = () => {
  const { favoriteIngredients } = useSelector((state) => state.ingredient);

  const { mealTitle } = useParams();

  const listActions = ["empty"];
  const ingredientActions = ["log", "update", "remove"];

  return (
    <>
      {favoriteIngredients.length === 0 ? (
        <EmptyListPlaceholder text="Még nincsenek kedvencek." />
      ) : (
        <Stack>
          <IngredientListHeader
            listTitle="Kedvencek"
            listName="favoriteIngredients"
            listActions={listActions}
          />
          <IngredientList
            listName="favoriteIngredients"
            ingredientList={favoriteIngredients}
            actions={ingredientActions}
            mealName={mealTitle}
          />
        </Stack>
      )}
    </>
  );
};

export default FavoriteIngredients;
