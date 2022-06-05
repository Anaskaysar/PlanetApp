import { View, StyleSheet, Pressable } from "react-native";
import React from "react";
import Text from "./text";
import { spacing } from "../../theme/spacing";
import { colors } from "../../theme/colors";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function PlanetHeader({ backbutton, title = "THE PLANETS" }) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {backbutton && (
        <Pressable
          onPress={() => {
            navigation.goBack();
          }}
          style={{ marginRight: spacing[4] }}
        >
          <AntDesign name="left" size={24} color="white" />
        </Pressable>
      )}
      <Text preset="h1" style={styles.container}>
        {title}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: spacing[4],
    borderBottomWidth: 0.3,
    borderBottomColor: colors.white,
    flexDirection: "row",
    alignItems: "center",
  },
});
