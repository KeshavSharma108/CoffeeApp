import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Pressable,
  Image,
} from "react-native";
import config from "../../config";
import { Ionicons } from "@expo/vector-icons";

const DetailedScreen = ({ route, navigation }) => {
  const [chooseSize, setChooseSize] = useState(1);
  const [priceCoffee, setPriceCoffee] = useState(route.params.price);

  const smallSize = () => {
    setChooseSize(0);
    setPriceCoffee(route.params.price / 2);
  };
  const MediumSize = () => {
    setChooseSize(1);
    setPriceCoffee(route.params.price);
  };
  const LargeSize = () => {
    setChooseSize(2);
    setPriceCoffee(route.params.price * 2);
  };
  return (
    <SafeAreaView style={styles.mainContainer}>
     <View style={styles.header}>
        <View style={styles.backButton}>
          <Pressable onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back-sharp" size={28} color="black" />
          </Pressable>
        </View>

        <Text style={styles.headerText}>Details</Text>
      </View>
      <View style={styles.container}>
        <Image source={route.params.image} style={styles.imageStyle} />
        <Text style={styles.nameText}>{route.params.name}</Text>
        <Text style={styles.descriptionHeading}>Description</Text>
        <Text style={styles.descriptionText}>{route.params.description}</Text>
        <Text style={styles.sizeHeading}>Size</Text>
      </View>

      <View style={styles.sizeContainer}>
        <Pressable onPress={() => smallSize(0)}>
          {chooseSize === 0 ? (
            <View style={styles.subHeadingContainer1}>
              <Text style={styles.smallSizeText}>S</Text>
            </View>
          ) : (
            <View style={styles.subHeadingContainer}>
              <Text>S</Text>
            </View>
          )}
        </Pressable>

        <Pressable onPress={() => MediumSize(1)}>
          {chooseSize === 1 ? (
            <View style={styles.subHeadingContainer1}>
              <Text style={styles.smallSizeText}>M</Text>
            </View>
          ) : (
            <View style={styles.subHeadingContainer}>
              <Text>M</Text>
            </View>
          )}
        </Pressable>
        <Pressable onPress={() => LargeSize(2)}>
          {chooseSize === 2 ? (
            <View style={styles.subHeadingContainer1}>
              <Text style={styles.smallSizeText}>L</Text>
            </View>
          ) : (
            <View style={styles.subHeadingContainer}>
              <Text>L</Text>
            </View>
          )}
        </Pressable>
      </View>
      <View style={styles.priceContainer}>
        <View>
          <Text style={styles.PriceHeading}>Price</Text>
          {chooseSize === 0 ? (
            <Text style={styles.priceText}>$ {priceCoffee}</Text>
          ) : null}
          {chooseSize === 2 ? (
            <Text style={styles.priceText}>$ {priceCoffee}</Text>
          ) : null}
          {chooseSize === 1 ? (
            <Text style={styles.priceText}>$ {priceCoffee}</Text>
          ) : null}
        </View>
        <View>
          <Pressable
            style={styles.buttonContainer}
            onPress={() =>
              navigation.navigate(config.routes.CART, {
                name: route.params.name,
                type: route.params.type,
                price: priceCoffee,
                image: route.params.image
              })
            }
          >
            <Text style={styles.buttonText}>Buy Now</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default DetailedScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageStyle: {
    borderRadius: 20,
  },
  container: {
    marginHorizontal: 24,
  },
  nameText: {
    fontSize: 28,
    fontWeight: "500",
  },
  descriptionHeading: {
    fontSize: 20,
    marginTop: 20,
  },
  descriptionText: {
    color: config.colors.oceanBlue,
    fontSize: 12,
  },
  sizeHeading: {
    fontSize: 20,
    marginTop: 20,
    marginBottom: 20,
  },
  priceContainer: {
    width: "100%",
    minHeight: 80,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: 30,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  PriceHeading: {
    color: config.colors.oceanBlue,
    fontSize: 20,
    fontWeight: "500",
  },
  priceText: {
    fontSize: 20,
    color: config.colors.darkOrange,
  },
  buttonContainer: {
    width: 200,
    height: 60,
    borderRadius: 20,
    backgroundColor: config.colors.darkOrange,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 2,
  },
  buttonText: {
    color: "white",
    fontSize: 12,
  },
  sizeContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  subHeadingContainer: {
    width: 80,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: config.colors.lightGrey,
    justifyContent: "center",
    alignItems: "center",
  },
  subHeadingContainer1: {
    width: 80,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: config.colors.darkOrange,
    justifyContent: "center",
    alignItems: "center",
  },
  smallSizeText: {
    color: config.colors.darkOrange,
  }, header: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    flexDirection: "row",
  }, backButton: {
    right: 160,
  },  headerText: {
    fontSize: 20,
    fontWeight: "500",
  },
});
