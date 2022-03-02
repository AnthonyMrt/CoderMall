import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import CoursesInCart from "../components/CoursesInCart";
import EmptyMsg from "../components/EmptyMsg";
import { addPayment } from "../redux/actions/actionPayment";
import { removeCourseCart } from "../redux/actions/actionRemoveCourseCart";
import globalStyles from "../styles/globalStyles";

const Cart = () => {
  const cartCourses = useSelector((state) => state.cart.cartCourses);
  const total = useSelector((state) => state.cart.total);

  const dispatch = useDispatch();

  const handlePayment = (cartCourses, total) => {
    dispatch(addPayment(cartCourses, total));
    alert("Paiement effectué");
  };

  return (
    <View style={styles.cartContainer}>
      {cartCourses.length > 0 ? (
        <View>
          <FlatList
            data={cartCourses}
            renderItem={({ item }) => (
              <CoursesInCart
                title={item.title}
                price={item.price}
                onDelete={() => dispatch(removeCourseCart(item.id))}
              />
            )}
            keyExtractor={(item) => item.id}
          />

          <View style={styles.totalContainer}>
            <Text style={styles.totalText}>
              Total:
              <Text style={styles.totalPrice}>{total.toFixed(2)} €</Text>
            </Text>
            <TouchableOpacity onPress={() => handlePayment(cartCourses, total)}>
              <View style={styles.btnDoPayment}>
                <Text style={styles.btnDoPaymentText}>Payer</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <EmptyMsg text="panier vide" />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  cartContainer: {
    margin: 20,
  },
  totalContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 19,
  },
  totalText: {
    fontWeight: "bold",
    fontSize: 19,
  },
  totalPrice: {
    color: globalStyles.green,
  },
  btnDoPayment: {
    borderRadius: 6,
    paddingVertical: 9,
    paddingHorizontal: 25,
    backgroundColor: globalStyles.orange,
  },
  btnDoPaymentText: {
    fontSize: 19,
  },
});

export default Cart;
