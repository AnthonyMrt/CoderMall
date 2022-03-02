import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
} from "react-native";
import EmptyMsg from "../components/EmptyMsg";
import globalStyles from "../styles/globalStyles";
import { AntDesign } from "@expo/vector-icons";
import { deleteCourse } from "../redux/actions/actionDeleteCourse";

const UserCourses = ({ navigation }) => {
  const LoggedInMemberCourses = useSelector(
    (state) => state.courses.loggedInMemberCourses
  );

  const dispatch = useDispatch();

  const handleDeleteCourse = (courseId) => {
    Alert.alert("Attention:", "Voulez-vous supprimer ce cours?", [
      { text: "NON" },
      {
        text: "OUI",
        onPress: () => dispatch(deleteCourse(courseId)),
      },
    ]);
  };

  if (LoggedInMemberCourses.length > 0) {
    return (
      <FlatList
        data={LoggedInMemberCourses}
        kryExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.courseContainer}>
            <View style={styles.courseInfos}>
              <Text numberOfLines={1} style={styles.courseTitle}>
                {item.title}
              </Text>
              <Text style={styles.coursePrice}>{item.price} €</Text>
            </View>
            <View style={styles.btnIcons}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("Edit", {
                    courseId: item.id,
                  })
                }
                styles={styles.touchableIcon}
              >
                <AntDesign name="edit" size={24} color={globalStyles.green} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handleDeleteCourse(item.id)}
                style={styles.touchableIcon}
              >
                <AntDesign name="delete" size={24} color={globalStyles.green} />
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    );
  } else return <EmptyMsg text="Pas de cours à afficher" />;
};

export default UserCourses;

const styles = StyleSheet.create({
  courseContainer: {
    backgroundColor: globalStyles.white,
    borderRadius: 10,
    marginVertical: 9,
    marginHorizontal: 17,
    paddingTop: 15,
    paddingBottom: 15,
    paddingRight: 9,
    paddingLeft: 9,
  },
  courseInfos: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 9,
    paddingHorizontal: 9,
  },
  courseTitle: {
    width: "80%",
  },
  coursePrice: {
    color: globalStyles.green,
  },
  btnIcons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  touchableIcon: {
    padding: 9,
  },
});
