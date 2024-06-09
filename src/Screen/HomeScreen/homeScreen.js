import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Image,
  Pressable,
} from "react-native";
import config from "../../config";

const HomeScreen = ({ navigation }) => {
  const [coffee] = useState(config.Coffee);

  const renderItem = ({ item }) => {
    return (
      <View style={styles.container}>
        <Image source={item.image} style={styles.imageStyle}/>
        <Text style={styles.nameText}>{item.name}</Text>
        <Text style={styles.typeText}>{item.type}</Text>
        <View style={styles.box}>
          <Text style={styles.priceText}>$ {item.price}</Text>
          <Pressable
            style={styles.buttonContainer}
            onPress={() =>
              navigation.navigate(config.routes.DETAILS, {
                name: item.name,
                description: item.description,
                price: item.price,
                id: item.id,
                type: item.type,
                image:item.image
              })
            }
          >
            <Text>+</Text>
          </Pressable>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <FlatList data={coffee} key={(item) => item.id} renderItem={renderItem} numColumns={2} horizontal={false} />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 260,
    backgroundColor: "white",
    borderRadius: 15,
    marginTop: 40,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 30,
   
  },imageStyle:{
    width:'95%',
    height:'55%',
    borderRadius:20
  },
  mainContainer: {
    flexDirection:'row'
  },
  nameText: {
    fontSize: 22,
    fontWeight: "600",
  },
  typeText: {
    fontSize: 18,
    fontWeight: "600",
    color: config.colors.lightGrey,
  },
  priceText: {
    fontSize: 23,
    fontWeight: "600",
    marginTop: 5,
    color: config.colors.deepBlue,
  },
  box: {
    flexDirection: "row",
  },
  buttonContainer: {
    width: 25,
    height: 25,
    backgroundColor: config.colors.darkOrange,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginLeft: 10,
    marginTop: 10,
  },
});
