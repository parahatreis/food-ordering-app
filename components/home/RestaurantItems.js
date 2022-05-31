import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export const localRestaurants = [
  {
    name: "Beachside Bar",
    image_url:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    categories: ["Cafe", "Bar"],
    price: "$$",
    reviews: 1244,
    rating: 4.5,
  },
  {
    name: "Benihana",
    image_url:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    categories: ["Cafe", "Bar"],
    price: "$$",
    reviews: 1244,
    rating: 3.7,
  },
  {
    name: "India's Grill",
    image_url:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    categories: ["Indian", "Bar"],
    price: "$$",
    reviews: 700,
    rating: 4.9,
  },
];

export default function RestaurantItems() {
  return (
    <>
      {localRestaurants.map((item, index) => (
        <TouchableOpacity
          key={index}
          activeOpacity={1}
        >
          <View style={styles.wrapper}>
            <RestaurantImage url={item.image_url} />
            <RestaurantInfo name={item.name} rating={item.rating} />
          </View>
        </TouchableOpacity>
      ))}
    </>
  )
}

const RestaurantImage = ({ url }) => (
  <>
    <Image
      source={{
        uri: url
      }}
      style={styles.image}
    />
    <TouchableOpacity style={styles.icon}>
      <MaterialCommunityIcons name="heart-outline" size={25} color="#fff" />
    </TouchableOpacity>
  </>
)

const RestaurantInfo = ({ name, rating }) => (
  <View style={styles.textWrapper}>
    <View>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.timeSlot}>30-45 • min</Text>
    </View>
    <View style={styles.ratingBlock}>
      <Text>{rating}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    marginTop: 10,
  },
  // image
  image: {
    height: 180,
    width: '100%'
  },
  icon: { position: "absolute", right: 20, top: 20 },
  // info
  textWrapper: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  name: {
    fontSize: 18,
    fontWeight: '700',
  },
  timeSlot: {
    fontSize: 14,
    fontWeight: '400',
    color: 'gray',
  },
  ratingBlock: {
    backgroundColor: '#EEE',
    borderRadius: 99,
    height: 30,
    width: 30,
    textAlign: 'center',
    alignItems: "center",
    justifyContent: "center",
    fontWeight: '700',
  }
});
