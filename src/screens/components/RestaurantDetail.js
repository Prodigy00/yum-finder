import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";

const RestaurantDetail = ({ restaurant }) => {
  return (
    <View>
      <Text>{restaurant.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default RestaurantDetail;
