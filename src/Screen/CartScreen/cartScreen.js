import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Pressable,
  Image,
  Modal,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import config from "../../config";
import { Tick } from "../../assest/Images";

const CartScreen = ({ route, navigation }) => {
  const [count, setCount] = useState(1);
  const [priceDouble, setPriceDouble] = useState(route.params.price);
  const [modalVisible, setModalVisible] = useState(false);
  const plusItem = () => {
    setCount(count + 1);
    setPriceDouble(priceDouble * 2);
  };
  const minusItem = () => {
    if (count > 1) {
      setCount(count - 1);
      setPriceDouble(priceDouble / 2);
    }
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.mainContainerModal}>
          <View style={styles.containerModal}>
            <Image source={Tick} style={styles.imageModal} />
            <Text style={{ fontSize: 20, marginBottom: 20 }}>
              Order Confirmed
            </Text>
      
            <Pressable
              onPress={() => navigation.navigate(config.routes.HOME)}
              style={styles.modalButton}
            >
              <Text>OK</Text>
            </Pressable>
            <Pressable
                  onPress={() => setModalVisible(false)}
              style={styles.modalButton}
            >
              <Text>Cancel</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <View style={styles.header}>
        <View style={styles.backButton}>
          <Pressable onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back-sharp" size={28} color="black" />
          </Pressable>
        </View>

        <Text style={styles.headerText}>Order</Text>
      </View>
      <View style={styles.container}>
        <Image source={route.params.image} style={styles.imageStyle} />
        <View>
          <Text style={styles.coffeeName}>{route.params.name}</Text>
          <Text style={styles.coffeeType}>{route.params.type}</Text>
        </View>
        <View style={styles.buttonStyle}>
          <View style={styles.minusContainer}>
            <Pressable onPress={() => minusItem()}>
              <Text style={styles.minus}>-</Text>
            </Pressable>
          </View>

          <Text style={styles.countText}>{count}</Text>
          <Pressable onPress={() => plusItem()} style={styles.plusContainer}>
            <Text style={styles.plus}>+</Text>
          </Pressable>
        </View>
      </View>

      <View style={styles.paymentContainer}>
        <Text style={styles.paymentText}>Payment Summary</Text>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View>
            <Text>Price</Text>
            <Text>Delivery Fee</Text>
          </View>
          <View>
            <Text style={{ fontWeight: "500" }}> $ {priceDouble}</Text>

            {count === 2 ? (
              <Text style={{ fontWeight: "500" }}>$ 1.00</Text>
            ) : null}
            {count > 2 ? (
              <Text style={{ fontWeight: "500", color: "green" }}>
                Delivery Free
              </Text>
            ) : null}

            {count === 1 ? (
              <Text style={{ fontWeight: "500" }}>$ 1.50</Text>
            ) : null}
          </View>
        </View>
      </View>
      <View style={styles.orderButtonMainContainer}>
        <Pressable
          style={styles.orderButtonContainer}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.orderButtonText}>Order</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};
export default CartScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  header: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    flexDirection: "row",
  },
  imageStyle: {
    width: 80,
    height: 80,
    marginTop: -10,
    borderRadius: 10,
  },
  backButton: {
    right: 160,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "500",
  },
  container: {
    marginTop: 250,
    marginHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  coffeeName: {
    fontSize: 20,
    fontWeight: "500",
    color: config.colors.deepBlue,
  },
  coffeeType: {
    color: config.colors.oceanBlue,
  },
  buttonStyle: {
    flexDirection: "row",
    marginTop: 10,
  },
  plus: {
    fontSize: 20,
  },
  minus: {
    fontSize: 20,
  },
  minusContainer: {
    width: 30,
    height: 30,
    borderWidth: 1,
    borderColor: config.colors.oceanBlue,
    alignItems: "center",
    borderRadius: 20,
    marginRight: 20,
  },
  plusContainer: {
    width: 30,
    height: 30,
    borderWidth: 1,
    borderColor: config.colors.oceanBlue,
    alignItems: "center",
    borderRadius: 20,
    marginLeft: 20,
  },
  countText: {
    marginTop: 5,
  },
  paymentText: {
    fontSize: 20,
    fontWeight: "500",
  },
  paymentContainer: {
    marginTop: 120,
    marginHorizontal: 20,
  },
  orderButtonMainContainer: {
    marginTop: 50,
    marginHorizontal: 20,
  },
  orderButtonContainer: {
    backgroundColor: config.colors.darkOrange,
    height: 60,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  orderButtonText: {
    fontSize: 20,
    fontWeight: "500",
  },
  mainContainerModal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(89, 86, 105, 0.75)",
  },
  containerModal: {
    width: 330,
    minHeight: 200,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 10,
  },
  modalButton: {
    width: "90%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: config.colors.darkOrange,
    marginBottom:20
  },
  imageModal: {
    width: 50,
    height: 50,
  },
});
