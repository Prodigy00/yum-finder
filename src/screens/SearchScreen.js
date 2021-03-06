import React, { useState } from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import SearchBar from "./components/SearchBar";
import useRestaurants from "../hooks/useRestaurants";
import RestaurantsList from "./components/RestaurantsList";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, restaurants, errorMessage] = useRestaurants();

  const filterResultsByPrice = price => {
    return restaurants.filter(restaurant => {
      return restaurant.price === price;
    });
  };

  return (
    <>
      <SearchBar
        onTermSubmit={() => searchApi(term)}
        term={term}
        onTermChange={setTerm}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}

      <ScrollView>
        <RestaurantsList
          restaurants={filterResultsByPrice("$")}
          title="Cost Effective"
        />
        <RestaurantsList
          restaurants={filterResultsByPrice("$$")}
          title="Bit Pricier"
        />
        <RestaurantsList
          restaurants={filterResultsByPrice("$$$")}
          title="Big Spender"
        />
      </ScrollView>
    </>
  );
};
const styles = StyleSheet.create({
  screenView: {
    flex: 1
  }
});
// if you have content that is being cut off, applying flex:1 to the
// parent view is a goood work around
export default SearchScreen;
