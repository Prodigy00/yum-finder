import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import RestaurantDetail from "../components/RestaurantDetail";
const RestaurantsList = ({ title, restaurants }) => {
  const renderItem = ({ item }) => {
    return <RestaurantDetail restaurant={item} />;
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        data={restaurants}
        keyExtractor={restaurant => restaurant.id}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 15,
    marginBottom: 5
  },
  container: {
    marginBottom: 10
  }
});

export default RestaurantsList;
