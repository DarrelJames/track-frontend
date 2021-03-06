import React, { useContext } from "react";
import { SafeAreaView } from "react-navigation";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/AuthContext";
import { FontAwesome } from "@expo/vector-icons";

const AccountScreen = ({}) => {
  const { signout } = useContext(AuthContext);

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text>I'm AccountScreen</Text>
      <Spacer>
        <Button title="Sign Out" onPress={() => signout()} />
      </Spacer>
    </SafeAreaView>
  );
};

AccountScreen.navigationOptions = {
  title: "Account",
  tabBarIcon: <FontAwesome name="gear" size={20} />,
};
export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
