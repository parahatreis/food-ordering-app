import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from '@react-navigation/native';

export default function RestaurantItems({ restaurantData }) {
  const navigation = useNavigation();

  return (
    <>
      {restaurantData.length > 0 && restaurantData.map((item, index) => (
        <TouchableOpacity
          key={index}
          activeOpacity={1}
          onPress={() => {
            navigation.navigate("RestaurantDetails", {
              name: item.name,
              image: item.image_url,
              price: item.price,
              reviews: item.review_count,
              rating: item.rating,
              categories: item.categories,
            })
          }}
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
