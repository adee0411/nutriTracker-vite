import {
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemDecorator,
  Stack,
} from "@mui/joy";
import IngredientListItemContent from "../LoggedFoods/IngredientListItemContent";
/* import { useDispatch, useSelector } from "react-redux"; */

/* import {
  setSelectedIngredient,
  setNewIngredientInput,
} from "../../store/ingredientSlice"; */

import { FaRegUser } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";

const ResultList = ({ resultList }) => {
  /*   const dispatch = useDispatch();

  const { selectedIngredient } = useSelector((state) => state.ingredient);

  const handleSelectedIngredient = (e) => {
    const ingredientID = e.currentTarget.id;
    const ingredient = resultList.find(
      (ingredient) => ingredient.id === ingredientID
    );
    dispatch(setSelectedIngredient(ingredient));
    dispatch(setNewIngredientInput(ingredient.unitage));
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
  return (
    <Stack>
      <Typography level="title-sm">Találatok:</Typography>
      <List
        variant="plain"
        color="primary"
        sx={{
          borderRadius: "md",
          p: 0,
          overflow: "hidden",
          my: 1,
        }}
      >
        {/*resultList.map((result) => {
          const ingredientName =
            result.ingredientName[0].toUpperCase() +
            result.ingredientName.slice(1);
          return (
            <ListItem key={result.id}>
              <ListItemButton
                sx={{
                  fontWeight: result.id === selectedIngredient?.id ? 500 : 300,
                }}
                id={result.id}
                /*  onClick={handleSelectedIngredient} */
        /*
              >
                <Stack direction="row" alignItems="center">
                  {result.id === selectedIngredient?.id ? (
                    <ListItemDecorator>
                      <FaCheck fontSize={10} />
                    </ListItemDecorator>
                  ) : (
                    ""
                  )}
                  <Typography level="body-sm" component="span" fontSize={12}>
                    {ingredientName}
                  </Typography>
                  <ListItemDecorator>
                    {result.id.includes("custom") ? (
                      <FaRegUser style={{ fontSize: 10 }} />
                    ) : (
                      ""
                    )}
                  </ListItemDecorator>
                </Stack>
              </ListItemButton>
            </ListItem>
          );
        })*/}
        <ListItem>
          <ListItemButton>
            <IngredientListItemContent
              ingredientName="Teszt"
              amount={100}
              unit="g"
              nutritionData={{
                energy: 10,
                protein: 20,
                carb: 30,
                fat: 40,
              }}
            />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <IngredientListItemContent
              ingredientName="Teszt"
              amount={100}
              unit="g"
              nutritionData={{
                energy: 10,
                protein: 20,
                carb: 30,
                fat: 40,
              }}
            />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <IngredientListItemContent
              ingredientName="Teszt"
              amount={100}
              unit="g"
              nutritionData={{
                energy: 10,
                protein: 20,
                carb: 30,
                fat: 40,
              }}
            />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <IngredientListItemContent
              ingredientName="Teszt"
              amount={100}
              unit="g"
              nutritionData={{
                energy: 10,
                protein: 20,
                carb: 30,
                fat: 40,
              }}
            />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <IngredientListItemContent
              ingredientName="Teszt"
              amount={100}
              unit="g"
              nutritionData={{
                energy: 10,
                protein: 20,
                carb: 30,
                fat: 40,
              }}
            />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <IngredientListItemContent
              ingredientName="Teszt"
              amount={100}
              unit="g"
              nutritionData={{
                energy: 10,
                protein: 20,
                carb: 30,
                fat: 40,
              }}
            />
          </ListItemButton>
        </ListItem>
      </List>
    </Stack>
  );
};

export default ResultList;
