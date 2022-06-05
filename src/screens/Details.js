import {View, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import PlanetHeader from "../components/text/PlanetHeader";
import Text from "../components/text/text";
import { colors } from "../theme/colors";
import { spacing } from "../theme/spacing";
export default function Details({ navigation, route }) {
  
  return (
    <SafeAreaView style={styles.container}>
      <PlanetHeader backbutton={true} /> 
      <Text>Details Here</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    flex: 1,
  },
  imageView: {
    padding: spacing[5],
    alignItems: "center",
    justifyContent: "center",
  },
  detailView: {
    marginTop: spacing[10],
    marginHorizontal: spacing[6],
    alignItems: "center"
  },
  name: {
    textTransform: "uppercase",
    textAlign: "center"
  },

});