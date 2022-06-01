// Packages
import { View, ScrollView } from "react-native";
import SafeAreaView, { SafeAreaProvider } from 'react-native-safe-area-view';
import React, { useEffect, useState } from "react";
// Component
import HeaderTabs from "../components/home/HeaderTabs";
import SearchBar from "../components/home/SearchBar";
import Categories from "../components/home/Categories";
import RestaurantItems from "../components/home/RestaurantItems";
import { Divider } from "react-native-elements/dist/divider/Divider";
import BottomTabs from "../components/home/BottomTabs";
// Utils

const YELP_API_KEY =
  "TphA3FGXPdzGsKWoFDL0owcUkD4yiNAC3iVVbZRkwuxoikHoOWGkRWK_mFW2JA7E3an6X1FdP2U8xIhipdKkEcNf0jsBEzGmyqwNhc_0-XWBDJSj5qdadSUv8RWXYnYx";

export default function Home() {
  const [restaurantData, setRestaurantData] = useState([]);
  const [city, setCity] = useState("Istanbul");
  const [activeTab, setActiveTab] = useState("Delivery");

  useEffect(() => {
    getRestaurantsFromYelp();
  }, [city, activeTab])

  const getRestaurantsFromYelp = async () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };

    const res = await fetch(yelpUrl, apiOptions);
    const data = await res.json();
    setRestaurantData(data.businesses);
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
        <View style={{ backgroundColor: "#FFF", padding: 15 }}>
          <HeaderTabs />
          <SearchBar />
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Categories />
          <RestaurantItems restaurantData={restaurantData} />
        </ScrollView>
        <Divider width={1} />
        <BottomTabs />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
