import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { CoursesNavigator } from "./CoursesStackNav";
import { CartNavigator } from "./CartStackNav";
import { PaymentNavigator } from "./PaymentStackNav";
import { UserNavigator } from "./UserStackNav";

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Home"
        component={CoursesNavigator}
        options={{
          title: "Catalogue",
          drawerIcon: () => (
            <MaterialIcons name="menu-book" size={24} color="black" />
          ),
        }}
      />
      <Drawer.Screen
        name="Cart"
        component={CartNavigator}
        options={{
          title: "Panier",
          drawerIcon: () => (
            <MaterialIcons name="shopping-cart" size={24} color="black" />
          ),
        }}
      />
      <Drawer.Screen
        name="Payments"
        component={PaymentNavigator}
        options={{
          title: "Achat",
          drawerIcon: () => (
            <MaterialIcons name="payment" size={24} color="black" />
          ),
        }}
      />
      <Drawer.Screen
        name="Mycourses"
        component={UserNavigator}
        options={{
          title: "Mes cours",
          drawerIcon: () => (
            <MaterialIcons name="mic" size={24} color="black" />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};
