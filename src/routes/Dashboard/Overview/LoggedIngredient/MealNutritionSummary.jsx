import { Alert, Sheet, Stack, Typography, Card } from "@mui/joy";

/* import { useSelector } from "react-redux";
import { useParams } from "react-router"; */
import { useEffect, useRef } from "react";
import CountUp from "react-countup";
import { AnimatePresence, motion } from "framer-motion";

import DailyGoalProgress from "./DailyGoalProgress";
import MealNutritionSummaryMacro from "./MealNutritionSummaryMacro";

import CarbIcon from "../../../../assets/icons/carbohydrate.png";
import ProteinIcon from "../../../../assets/icons/proteins.png";
import FatIcon from "../../../../assets/icons/pizza-slice.png";
import CalorieIcon from "../../../../assets/icons/burn_outlined_64.png";

import { CiWarning } from "react-icons/ci";

const macroIcons = {
  carb: CarbIcon,
  protein: ProteinIcon,
  fat: FatIcon,
  energy: CalorieIcon,
};

const mealNameMap = {
  breakfast: "Reggeli",
  meal2: "2. étkezés",
  meal3: "3. étkezés",
  meal4: "4. étkezés",
  snack: "Snack",
};

const MealNutritionSummary = ({ isSimple, mealName }) => {
  /* const { addedIngredients } = useSelector((state) => state.ingredient);

  const { mealName } = useParams();

  const mealIngredients = addedIngredients[mealName];

  const reduceMealNutritionData = (ingredients) => {
    // Initialize total nutrition object
    let totalNutritionData = {
      carb: 0,
      protein: 0,
      fat: 0,
      energy: 0,
    };

    if (ingredients.length > 0) {
      // Reduce all ingredient's nutrition data
      ingredients.forEach((ingredient) => {
        for (const [key, value] of Object.entries(ingredient.nutritionData)) {
          totalNutritionData[key] += value;
        }
      });
    }

    return totalNutritionData;
  };

  const mealNutritionData = reduceMealNutritionData(mealIngredients);

  const reduceTotalNutritionData = (mealCollection) => {
    // Initialize total nutrition object
    let totalNutritionData = {
      carb: 0,
      protein: 0,
      fat: 0,
      energy: 0,
    };

    mealCollection.forEach((meal) => {
      const mealNutritionData = Object.values(meal)[0];
      for (const [key, value] of Object.entries(mealNutritionData)) {
        totalNutritionData[key] += value;
      }
    });

    return totalNutritionData;
  };

  const mealTotalNutritionCollection = Object.entries(addedIngredients).map(
    (meal) => {
      const mealName = meal[0];
      const ingredientData = meal[1];
      const mealTotalNutritionData = reduceMealNutritionData(ingredientData);

      return {
        [mealName]: mealTotalNutritionData,
      };
    }
  );

  const totalNutritionData = reduceTotalNutritionData(
    mealTotalNutritionCollection
  );

  const totalEnergyRef = useRef(totalNutritionData.energy);

  const { calorieGoal } = useSelector((state) => state.profile.profileData);

  const isCalorieSufficit = totalNutritionData.energy > calorieGoal;



  const currentDate = new Date().toLocaleDateString();

  useEffect(() => {
    totalEnergyRef.current = totalNutritionData.energy;
  }, [totalNutritionData.energy]); */

  /*   const isMeal = mealName.includes("meal"); // Check if meal's title is Meal (number)
  const formattedmealName = isMeal
    ? `${mealName.at(-1)}. étkezés`
    : mealName === "breakfast"
    ? "Reggeli"
    : "Snack"; */

  /****** TEST *******/
  const currentDate = "05.20";
  const mealNutritionData = {
    carb: 300,
    protein: 400,
    fat: 500,
  };
  const totalNutritionData = {
    carb: 300,
    protein: 400,
    fat: 500,
  };
  const calorieGoal = 2000;
  const isCalorieSufficit = true;
  const totalEnergyRef = 1000;
  const mealEnergy = 600;

  return (
    <Card
      variant="plain"
      sx={{
        display: "flex",
        flexDirection: "row",
        gap: 2,
        alignItems: "center",
        justifyContent: "space-between",
        p: 0,
        mb: 2,
      }}
    >
      <Stack>
        <Typography
          level="title-lg"
          color="neutral"
          variant="plain"
          fontWeight={600}
          fontSize={26}
        >
          {mealNameMap[mealName]}
        </Typography>
        <Typography
          level="title-lg"
          color="neutral"
          variant="plain"
          fontWeight={600}
          fontSize={22}
        >
          {mealEnergy}{" "}
          <Typography component="span" fontSize={18} fontWeight={400}>
            kcal
          </Typography>
        </Typography>
      </Stack>

      <Stack mt={0} gap={2}>
        <Stack direction="row" gap={8} flex={1}>
          {Object.entries(mealNutritionData).map((macro) => {
            const macroName = macro[0];
            const macroValue = macro[1];
            return (
              <MealNutritionSummaryMacro
                key={macroName}
                macroName={macroName}
                icon={macroIcons[macroName]}
                value={macroValue}
              />
            );
          })}
        </Stack>
        {!isSimple ? (
          <Stack gap={2}>
            <Typography textAlign="center" fontSize={12}>
              A mai napon eddig bevitt kalória:{" "}
              <CountUp
                start={totalEnergyRef.current}
                end={totalNutritionData.energy}
                delay={0}
                duration={1}
                suffix=" kcal"
              >
                {({ countUpRef }) => (
                  <Typography
                    level="body-lg"
                    component="span"
                    fontWeight={600}
                    slotProps={{ root: { ref: countUpRef } }}
                  ></Typography>
                )}
              </CountUp>
            </Typography>
            <DailyGoalProgress
              current={totalNutritionData.energy}
              goal={calorieGoal}
              size="sm"
              type="linear"
            />
            {isCalorieSufficit ? (
              <Alert
                size="sm"
                sx={{
                  backgroundColor: "transparent",
                  justifyContent: "center",
                }}
              >
                <Typography
                  color="danger"
                  level="body-sm"
                  fontWeight={300}
                  display="flex"
                  alignItems="center"
                  gap={0.5}
                >
                  {" "}
                  <CiWarning style={{ fontSize: 18 }} /> Túllépted a mai napra
                  meghatározott célt!
                </Typography>
              </Alert>
            ) : (
              ""
            )}
          </Stack>
        ) : (
          ""
        )}
      </Stack>
    </Card>
  );
};

export default MealNutritionSummary;
