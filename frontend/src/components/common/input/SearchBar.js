import React from "react";
import { Input, Button, Box } from "@chakra-ui/react";

const SearchBar = ({ search, setSearch, handleSearch }) => {
  return (
    <Box display="flex" pb={2}>
      <Input
        placeholder="Search by name or email"
        mr={2}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Button onClick={handleSearch}>Search</Button>
    </Box>
  );
};

export default SearchBar;
