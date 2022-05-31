import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";

export default function SearchBar() {
  return (
    <View style={styles.wrapper}>
      <GooglePlacesAutocomplete
        placeholder="Search"
        styles={styles.searchBar}
        renderLeftButton={() => (
          <View style={{ marginLeft: 10 }}>
            <Ionicons name="location-sharp" size={24} />
          </View>
        )}
        renderRightButton={() => (
          <View style={styles.searchButton}>
            <AntDesign name="clockcircle" size={11} style={{ marginRight: 6 }} />
            <Text>Search</Text>
          </View>
        )}
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
        }}
        query={{
          key: "YOUR API KEY",
          language: "en",
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 15,
    flexDirection: "row",
  },
  searchBar: {
    textInput: {
      backgroundColor: "#EEE",
      borderRadius: 36,
      fontWeight: "600",
      marginTop: 6,
    },
    textInputContainer: {
      backgroundColor: "#EEE",
      borderRadius: 36,
      flexDirection: "row",
      alignItems: "center",
      marginRight: 10,
    },
  },
  searchButton: {
    flexDirection: "row",
    marginRight: 8,
    backgroundColor: "#FFF",
    padding: 9,
    borderRadius: 24,
    alignItems: "center",
  },
});
