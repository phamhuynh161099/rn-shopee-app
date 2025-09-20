import CustomFlatList from "@/components/CustomFlatList/CustomFlatList";
import CollectionHome from "@/components/home/collection-home";
import HeaderHome from "@/components/home/header-home";
import TopListHome from "@/components/home/top-list-home";
import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const data = [
  { key: 1, name: "test 1", ref: "top-rating", description: "description 1" },
  { key: 2, name: "test 2", ref: "newcomer", description: "description 2" },
  { key: 3, name: "test 3", ref: "top-freeship", description: "description 3" },
];
export default function IndexPage() {
  return (
    <SafeAreaView style={styles.container}>
      <HeaderHome style={styles.header} />
      <CustomFlatList
        data={data}
        style={styles.list}
        renderItem={({ item }) => (
          <CollectionHome name={item.name} description={item.description} refAPI={item.ref} />
        )}
        // HeaderComponent={<View style={styles.header} />}
        // StickyElementComponent={<View />}
        // TopListElementComponent={<View style={styles.topList} />}
        TopListElementComponent={<TopListHome />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ecf0f1",
    flex: 1,
    // justifyContent: "center",
    overflow: "hidden",
  },
  header: {
    height: 50,
    marginBottom: 6,
    width: "100%",
  },
  list: {
    overflow: "hidden",
  },
  topList: {
    minHeight: 100,
    marginBottom: 6,
    width: "100%",
  },
});
