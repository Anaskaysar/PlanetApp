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
  
});
