import {
  Stack,
  Typography,
  Card,
  ButtonGroup,
  IconButton,
  CardOverflow,
  AspectRatio,
  Button,
} from "@mui/joy";

import { Link } from "react-router-dom";

/*
import { useParams, Link } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";*/

import MealNutritionSummary from "./MealNutritionSummary";
import EmptyListPlaceholder from "./EmptyListPlaceholder";
import AddedIngredients from "./AddedIngredients";

/*
import {
  setIsEditIngredientModalOpen,
  setLastRemoved,
} from "../store/ingredientSlice";*/

const MealDetails = ({ mealName }) => {
  //const dispatch = useDispatch();

  // Get meal's name
  //const { mealTitle } = useParams();

  //fetch the selected meal's ingredientlist from store
  /* const mealIngredients = useSelector(
    (state) => state.ingredient.addedIngredients[mealTitle]
  ); */

  // Initialize total nutrition object
  /*  let totalMealNutritionData = {
    carb: 0,
    protein: 0,
    fat: 0,
    energy: 0,
  };

  // Reduce all ingredient's nutrition data
  mealIngredients.forEach((ingredient) => {
    for (const [key, value] of Object.entries(ingredient.nutritionData)) {
      totalMealNutritionData[key] += value;
    }
  });

  useEffect(() => {
    dispatch(setLastRemoved(null));

    // Reset edit ingredient modal on first render
    dispatch(setIsEditIngredientModalOpen(false));
  }, []); */

  /******** TEST *********/
  const mealIngredients = [];

  return (
    <Card variant="plain" sx={{ boxShadow: "md" }}>
      <Stack gap={2}>
        <MealNutritionSummary mealName={mealName} isSimple={true} />
        <AddedIngredients mealName={mealName} />
      </Stack>
    </Card>
  );
};

export default MealDetails;
