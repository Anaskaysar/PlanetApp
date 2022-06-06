import {
  View,
  SafeAreaView,
  StyleSheet,
  FlatList,
  Pressable,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import PlanetHeader from "../components/text/PlanetHeader";
import { colors } from "../theme/colors";
import { PLANET_LIST } from "../data/Planet-List";
import Text from "../components/text/text";
import { spacing } from "../theme/spacing";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const PlanetItem = ({ item }) => {
  const { name, color } = item;
  const navigation = useNavigation();

  return (
    <Pressable
      onPress={() => {
        navigation.navigate("Details", { planet: item });
      }}
      style={styles.item}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View style={[styles.circle, { backgroundColor: color }]}></View>
        <Text preset="h4" style={styles.itemName}>
          {name}
        </Text>
      </View>
      <AntDesign name="right" size={18} color="white" />
    </Pressable>
  );
};

export default function HomeScreen() {
  const [list, setList] = useState(PLANET_LIST);

  const renderItem = ({ item }) => {
    return <PlanetItem item={item} />;
  };

  const searchFilter = (text) => {
    const filteredList = PLANET_LIST.filter((item) => {
      const itemName = item.name.toLowerCase();
      const userTypedText = text.toLowerCase();
      return itemName.indexOf(userTypedText) > -1;
    });
    setList(filteredList);
  };
  return (
    <SafeAreaView style={styles.container}>
      <PlanetHeader />
      <TextInput
        placeholder="Type The Planet Name"
        placeholderTextColor={colors.white}
        autoCorrect={false}
        style={styles.searchinput}
        onChangeText={(text) => searchFilter(text)}
      />
      <FlatList
        contentContainerStyle={styles.list}
        data={list}
        keyExtractor={(item) => item.name}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    flex: 1,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: spacing[4],
  },
  list: {
    padding: spacing[4],
  },
  itemName: {
    textTransform: "uppercase",
    marginLeft: spacing[4],
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  separator: {
    borderBottomWidth: 0.5,
    borderBottomColor: colors.white,
  },
  searchinput: {
    padding: spacing[4],
    color: colors.white,
    borderBottomColor: colors.white,
    borderBottomWidth: 1,
    margin: spacing[5],
  },
});