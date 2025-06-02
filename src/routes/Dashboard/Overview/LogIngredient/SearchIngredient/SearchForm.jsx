import { FormControl, Input, Stack, Typography } from "@mui/joy";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import ResultList from "./ResultList";
import { unix } from "dayjs";

/* import {
  setSelectedIngredient,
  setSearchQueryInput,
  setSearchResultList,
} from "../../store/ingredientSlice"; */

const SearchForm = () => {
  /*   const dispatch = useDispatch();

  const { searchQueryInput } = useSelector((state) => state.ingredient.UI);
  const { ingredientList, searchResultList } = useSelector(
    (state) => state.ingredient
  );

  const handleQueryInputChange = (e) => {
    const alphabetRegex = /^[A-Za-z]+$/;
    if (!e.target.value.match(alphabetRegex) && e.target.value !== "") {
      return;
    } else {
      dispatch(setSearchQueryInput(e.target.value));
      if (e.target.value === "") setSelectedIngredient("");
    }
  };

  useEffect(() => {
    const resultList =
      searchQueryInput === ""
        ? []
        : ingredientList.filter(
            (data) =>
              data.ingredientName
                .toLowerCase()
                .includes(searchQueryInput.toLowerCase()) &&
              searchQueryInput.length > 2
          );

    dispatch(setSearchResultList(resultList));
  }, [searchQueryInput, dispatch, ingredientList]); */

  /** TEST */
  const searchResultList = [
    {
      id: "1",
      ingredientName: "Alma",
      unitage: 100,
      unit: "g",
      nutritionData: { carb: 14, protein: 0.3, fat: 0.2, energy: 52 },
    },
    {
      id: "2",
      ingredientName: "Banán",
      unitage: 100,
      unit: "g",
      nutritionData: { carb: 23, protein: 1.3, fat: 0.3, energy: 89 },
    },
    {
      id: "3",
      ingredientName: "Narancs",
      unitage: 100,
      unit: "g",
      nutritionData: { carb: 12, protein: 0.9, fat: 0.1, energy: 47 },
    },
  ];

  return (
    <Stack gap={2}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          return;
        }}
      >
        <Typography level="title-sm">Alapanyag keresése:</Typography>{" "}
        <Stack direction="row" my={1}>
          <FormControl sx={{ flex: 1 }}>
            <Input
              type="search"
              name="ingredient"
              placeholder="Keresés..."
              size="sm"
            ></Input>
          </FormControl>
        </Stack>
      </form>
      {searchResultList.length === 0 ? (
        ""
      ) : (
        <ResultList resultList={searchResultList} />
      )}
    </Stack>
  );
};

export default SearchForm;
