import React from "react";
import { Text, View, StyleSheet } from "react-native";

const showRestaurant = ({ navigation }) => {
  const id = navigation.getParam("id");
  console.log({ id });
  return (
    <View>
      <Text>Show Restaurant</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default showRestaurant;
