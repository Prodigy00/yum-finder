import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";

const RestaurantDetail = ({ restaurant }) => {
  return (
    <View>
      <Image style={styles.image} source={{ uri: restaurant.image_url }} />
      <Text style={styles.name}>{restaurant.name}</Text>
      <Text>
        {restaurant.rating} Stars, {restaurant.review_count} Reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 250,
    height: 120,
    borderRadius: 4
  },
  name: {}
});

export default RestaurantDetail;

//native image components won't show anything until you give them a height and width > 0
