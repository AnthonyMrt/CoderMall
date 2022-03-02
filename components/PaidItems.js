import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import globalStyles from "../styles/globalStyles";
import { AntDesign } from "@expo/vector-icons";
import CoursesOverview from "./CoursesOverview";

const PaidItems = ({ totalPrice, date, courseDetails }) => {
  const [isShowing, setisShowing] = useState(false);

  const handleShow = () => {
    setisShowing((prevState) => !prevState);
  };

  return (
    <ScrollView style={styles.paidCoursesContainer}>
      <View style={styles.paidCourses}>
        <Text style={styles.totalPaid}>{totalPrice.toFixed(2)} €</Text>
        <Text style={styles.datePayment}>{date}</Text>
      </View>

      <TouchableOpacity style={styles.iconBtn} onPress={handleShow}>
        <AntDesign
          name={isShowing ? "minuscircleo" : "pluscircleo"}
          size={24}
          color="black"
        />
      </TouchableOpacity>

      {isShowing && (
        <View style={styles.detailPaidCourses}>
          {courseDetails.courses.map((course) => (
            <CoursesOverview
              key={course.id}
              title={course.title}
              price={course.price}
            />
          ))}
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  paidCoursesContainer: {
    backgroundColor: globalStyles.white,
    borderRadius: 10,
    margin: 20,
    padding: 15,
  },
  paidCourses: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginBottom: 15,
  },
  totalPaid: {
    fontSize: 18,
  },
  datePayment: {
    fontSize: 16,
  },
  iconBtn: {
    alignSelf: "flex-end",
  },
  detailPaid: {
    marginTop: 20,
    borderTopColor: globalStyles.lightGrey,
    borderTopWidth: 1,
  },
});

export default PaidItems;
