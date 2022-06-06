import {
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Pressable,
  Linking,
} from "react-native";
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

const PlanetSection = ({ title, value }) => {
  return (
    <View style={styles.planetSection}>
      <Text preset="small" style={{ textTransform: "uppercase" }}>
        {title}
      </Text>
      <Text preset="h2">{value}</Text>
    </View>
  );
};

export default function Details({ route }) {
  const planet = route.params.planet;
  const {
    name,
    description,
    rotationTime,
    revolutionTime,
    radius,
    avgTemp,
    wikiLink,
  } = planet;

  const renderImage = () => {
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
      case "venus":
        return <VenusSvg />;
    }
  };

  const onPressLink = () => {
    Linking.openURL(wikiLink);
  };
  return (
    <SafeAreaView style={styles.container}>
      <PlanetHeader backbutton={true} />
      <ScrollView>
        <View style={styles.imageView}>{renderImage()}</View>
        <View style={styles.detailView}>
          <Text preset="h1" style={styles.name}>
            {name}
          </Text>
          <Text style={styles.description}>{description}</Text>
          <Pressable onPress={onPressLink} style={styles.source}>
            <Text>Source : </Text>
            <Text preset="h4" style={styles.wikipedia}>
              Wikipedia
            </Text>
          </Pressable>
        </View>
        <PlanetSection title="ROTATION TIME" value={rotationTime} />
        <PlanetSection title="REVOLUTION TIME" value={revolutionTime} />
        <PlanetSection title="RADIUS" value={radius} />
        <PlanetSection title="AVERAGE TEMP." value={avgTemp} />
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
    padding: spacing[2],
    marginTop: spacing[5],
    lineHeight: 25,
  },
  source: {
    marginTop: spacing[8],
    marginBottom: spacing[8],
    flexDirection: "row",
    alignItems: "center",
  },
  wikipedia: {
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
  planetSection: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: spacing[5],
    paddingVertical: spacing[4],
    marginHorizontal: spacing[6],
    marginBottom: spacing[4],
    borderWidth: 1,
    borderColor: colors.grey,
  },
});
