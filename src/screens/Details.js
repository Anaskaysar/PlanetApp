import { View, StyleSheet, SafeAreaView, ScrollView, Pressable } from "react-native";
import React from "react";
import PlanetHeader from "../components/text/PlanetHeader";
import Text from "../components/text/text";
import { colors } from "../theme/colors";
import { spacing } from "../theme/spacing";
import {
  MercurySvg,
  EarthSvg,
  JupiterSvg,
  MarsSvg,
  NeptuneSvg,
  SaturnSvg,
  UranusSvg,
  VenusSvg,
} from "../svg";

export default function Details({ navigation, route }) {
  const planet = route.params.planet;
  const { name, description } = planet;

  const renderImage = (name) => {
    switch (name) {
      case "mercury":
        return <MercurySvg />;
      case "earth":
        return <EarthSvg />;
      case "jupitar":
        return <JupiterSvg />;
      case "mars":
        return <MarsSvg />;
      case "saturn":
        return <SaturnSvg />;
      case "neptune":
        return <NeptuneSvg />;
      case "uranus":
        return <UranusSvg />;
      case venus:
        return <VenusSvg />;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <PlanetHeader backbutton={true} />
      <ScrollView>
        <View style={styles.imageView}>{renderImage(name)}</View>
        <View style={styles.detailView}>
          <Text preset="h1" style={styles.name}>
            {name}
          </Text>
          <Text style={styles.description}>{description}</Text>
          <Pressable style={styles.source}>
            <Text>Source : </Text>
            <Text preset="h4" style={styles.wikipedia}> Wikipedia</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    flex: 1,
  },
  imageView: {
    marginTop: spacing[8],
    alignItems: "center",
    justifyContent: "center",
  },
  detailView: {
    marginTop: spacing[10],
    marginHorizontal: spacing[6],
    alignItems: "center",
  },
  name: {
    marginTop: spacing[6],
    textTransform: "uppercase",
    textAlign: "center",
  },
  description: {
    textAlign: "justify",
    padding: spacing [2],
    marginTop: spacing[5],
    lineHeight: 25
  },
  source: {
    padding: spacing[8],
    flexDirection: "row",
    alignItems:'center'
  },
  wikipedia: {
    fontWeight: "bold",
    textDecorationLine:"underline"
  }
});
