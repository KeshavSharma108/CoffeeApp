import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";

import { coffee } from "../../assest/Images";
import config from "../../config";
const FirstScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.containerImage}>
        <Image source={coffee} style={styles.imageStyle} />
        <View
          style={{
            marginTop: 420,
            marginHorizontal: 40,
            position: "absolute",
            width: 320,
            alignItems: "center",
          }}
        >
          <Text style={styles.heading}>Fall in Love with</Text>
          <Text style={styles.heading}>Coffee in Blissful</Text>
        </View>
      </View>
      <View style={styles.containerText}>
        <Text style={styles.heading}>Delight!</Text>
        <View style={styles.subHeadingText}>
          <Text style={styles.textStyle}>
            Welcome to our cozy coffee corner,where
          </Text>
          <Text style={styles.textStyle}>
            every cup is a delightful for you.
          </Text>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => navigation.replace(config.routes.HOME)}
          >
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default FirstScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: "center",
  },
  containerImage: {
    width: "100%",
  },
  imageStyle: {
    width: "100%",
  },
  containerText: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    backgroundColor: "black",
    shadowOpacity: 50,
  },
  textStyle: {
    color: config.colors.lightGrey,
  },
  buttonText: {
    color: "white",
  },
  buttonContainer: {
    width: "100%",
    height: 50,
    backgroundColor: config.colors.darkOrange,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  subHeadingText: {
    width: "75%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  heading: {
    color: "white",
    fontSize: 40,
    fontWeight: "600",
  },
});
