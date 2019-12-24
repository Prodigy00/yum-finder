import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import SearchBar from "./components/SearchBar";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  return (
    <View>
      <SearchBar
        onTermSubmit={() => console.log("Submitted")}
        term={term}
        onTermChange={newTerm => setTerm(newTerm)}
      />
      <Text>Search Screen</Text>
      <Text>{term}</Text>
    </View>
  );
};
const styles = StyleSheet.create({});

export default SearchScreen;
