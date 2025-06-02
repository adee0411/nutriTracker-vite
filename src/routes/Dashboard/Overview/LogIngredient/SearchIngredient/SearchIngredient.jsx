import React from "react";
import { Stack, Box } from "@mui/joy";
import SearchForm from "./SearchForm";
import SelectedIngredient from "./SelectedIngredient";

const SearchIngredient = () => {
  return (
    <Stack direction="row" width="100%" sx={{ "& > *": { flex: 1 } }} gap={4}>
      <Box py={4}>
        <SearchForm />
      </Box>
      <Box py={4}>
        <SelectedIngredient />
      </Box>
    </Stack>
  );
};

export default SearchIngredient;
