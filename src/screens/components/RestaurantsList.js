import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import RestaurantDetail from "../components/RestaurantDetail";
const RestaurantsList = ({ title, restaurants }) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        data={restaurants}
        keyExtractor={restaurant => restaurant.id}
        renderItem={({ item }) => {
          return <RestaurantDetail restaurant={item} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 15
  }
});

export default RestaurantsList;
