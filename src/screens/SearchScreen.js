import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import SearchBar from "./components/SearchBar";
import useRestaurants from "../hooks/useRestaurants";
import RestaurantsList from "./components/RestaurantsList";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, restaurants, errorMessage] = useRestaurants();
  //   console.log({ restaurants });

  const filterResultsByPrice = price => {
    return restaurants.filter(restaurant => {
      return restaurant.price === price;
    });
  };

  return (
    <View>
      <SearchBar
        onTermSubmit={() => searchApi(term)}
        term={term}
        onTermChange={setTerm}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We have found {restaurants.length} restaurants</Text>
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
    </View>
  );
};
const styles = StyleSheet.create({});

export default SearchScreen;
