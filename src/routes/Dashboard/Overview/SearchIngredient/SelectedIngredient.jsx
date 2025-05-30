/* import { db } from "../../firebase/firestore_config";
import { doc, setDoc } from "firebase/firestore"; */

import {
  Stack,
  FormControl,
  Input,
  Button,
  Card,
  CardOverflow,
  AspectRatio,
  Typography,
  Avatar,
} from "@mui/joy";

/* import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router"; */

import NutritionDetailCard from "./NutritionDetailCard";

import IngredientPlaceholderImg from "../../../../assets/images/chicken_breast.webp";

/* import {
  setIngredientActionFeedback,
  setMealIngredients,
  setNewIngredientInput,
  setSearchQueryInput,
  setSearchResultList,
  setIngredientList,
} from "../../store/ingredientSlice"; */

/* import { transformNutritionData } from "../../utils"; */

const mealTexts = {
  breakfast: "a reggelihez",
  meal2: "a 2. étkezéshez",
  meal3: "a 3. étkezéshez",
  meal4: "a 4. étkezéshez",
  snack: "a nasihoz",
};

const SelectedIngredient = (/* { selectedIngredient } */) => {
  /*  const dispatch = useDispatch();

  const { mealTitle } = useParams();

  const { recentIngredients } = useSelector((state) => state.ingredient);

  const { newIngredientInput } = useSelector((state) => state.ingredient.UI);
  let ingredients = useSelector(
    (state) => state.ingredient.addedIngredients[mealTitle]
  );

  let transformedNutritionData;
  if (selectedIngredient) {
    transformedNutritionData = transformNutritionData(
      selectedIngredient.nutritionData,
      newIngredientInput,
      selectedIngredient.unitage
    );
  }

  const handleNewIngredientAmountChange = (e) => {
    const amount = e.target.value;
    if (amount < 0) {
      return;
    } else {
      dispatch(setNewIngredientInput(amount));
    }
  };

  const handleAddIngredient = () => {
    // 1) Check if selectedIngredient exists in state list
    let ingredientsCopy = [...ingredients];
    let recentIngredientsCopy = [...recentIngredients];
    let newIngredient;

    const existingIngredientIndex = ingredientsCopy.findIndex((ingredient) => {
      return ingredient.id === selectedIngredient.id;
    });

    // No matching ingredient based on ID
    if (existingIngredientIndex === -1) {
      newIngredient = {
        ...selectedIngredient,
        nutritionData: transformedNutritionData,
        amount: +newIngredientInput,
        nutritionDataPerUnit: selectedIngredient.nutritionData,
      };

      ingredientsCopy.push(newIngredient);
      // Selected ingredient exists
    } else {
      let newNutritionData = {
        ...ingredientsCopy[existingIngredientIndex].nutritionData,
      };

      let newAmount = ingredientsCopy[existingIngredientIndex].amount;
      newAmount += +newIngredientInput;
      for (let [key, value] of Object.entries(
        selectedIngredient.nutritionData
      )) {
        newNutritionData[key] += value;
      }
      newIngredient = {
        ...selectedIngredient,
        nutritionData: newNutritionData,
        amount: newAmount,
        nutritionDataPerUnit: selectedIngredient.nutritionData,
      };

      ingredientsCopy[existingIngredientIndex] = newIngredient;
    }

    /********* ADD INGREDIENT TO RECENT LIST *********/

  /* Have to check if ingredient and amount exists in list!!! If yes, replace this ingredient with new amount */
  /* const existingRecentIngredientIndex = recentIngredientsCopy.findIndex(
      (ing) => {
        return ing.id === selectedIngredient.id;
      }
    );

    let newRecentIngredient = {
      ...selectedIngredient,
      nutritionData: transformedNutritionData,
      amount: +newIngredientInput,
      nutritionDataPerUnit: selectedIngredient.nutritionData,
    };

    if (existingRecentIngredientIndex !== -1) {
      recentIngredientsCopy[existingRecentIngredientIndex] =
        newRecentIngredient;
    } else {
      if (recentIngredientsCopy.length > 2) {
        recentIngredientsCopy.splice(-1, 1);
      }
      recentIngredientsCopy.unshift(newRecentIngredient);
    }

    /********************************************************* */

  /*
    const newIngredientList = {
      ingredients: [...ingredientsCopy],
    };

    const newRecentIngredientsList = {
      ingredients: [...recentIngredientsCopy],
    };

    (async function (mealTitle) {
      await setDoc(doc(db, "addedIngredients", mealTitle), newIngredientList);
      await setDoc(
        doc(db, "recentIngredients", "data"),
        newRecentIngredientsList
      );
      dispatch(
        setIngredientList({
          ingredientList: newRecentIngredientsList.ingredients,
          listName: "recentIngredients",
        })
      );
      dispatch(
        setMealIngredients({
          mealName: mealTitle,
          ingredientList: newIngredientList.ingredients,
        })
      );
      dispatch(
        setIngredientActionFeedback({
          message: `${newIngredientInput} ${selectedIngredient.unit} ${selectedIngredient.ingredientName} hozzáadva ${mealTexts[mealTitle]}`,
          status: "success",
          isShown: true,
        })
      );
      dispatch(setSearchQueryInput(""));
      dispatch(setSearchResultList([]));
    })(mealTitle);
  }; */

  /** TEST */
  const selectedIngredient = {
    id: "1",
    ingredientName: "Alma",
    unitage: 100,
    unit: "g",
    nutritionData: {
      carb: 14,
      protein: 0.3,
      fat: 0.2,
      energy: 52,
    },
  };

  const transformedNutritionData = {
    energy: 100,
    carb: 20,
    protein: 20,
    fat: 10,
  };

  const newIngredientInput = 100;
  return (
    <Card
      color="primary"
      variant="solid"
      sx={{ boxShadow: "lg" }}
      invertedColors
    >
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography level="h4">Csirkecsöcs</Typography>
        <Avatar variant="soft" size="xl" src={IngredientPlaceholderImg} />
      </Stack>
      <NutritionDetailCard
        nutritionData={transformedNutritionData}
        amount={newIngredientInput}
        unit={selectedIngredient.unit}
      />

      <form>
        <Stack direction="row" gap={2} my={1} width="100%">
          <FormControl sx={{ flex: 1 }}>
            <Input
              type="number"
              endDecorator={selectedIngredient.unit}
              value={newIngredientInput}
              /* onChange={handleNewIngredientAmountChange} */
              slotProps={{ input: { style: { width: "90%" } } }}
              size="sm"
            />
          </FormControl>
          <FormControl sx={{ flex: 1 }}>
            <Button size="sm" /* onClick={handleAddIngredient} */>
              Hozzáad
            </Button>
          </FormControl>
        </Stack>
      </form>
    </Card>
  );
};

export default SelectedIngredient;
