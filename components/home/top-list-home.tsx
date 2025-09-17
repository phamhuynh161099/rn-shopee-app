import React from "react";
import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import Banner from "./banner";

const data = Array(10).fill(1);
const data1 = Array(20).fill(1);

const TopListHome = () => {
  return (
    <>
      <View style={styles.topList} className="bg-white p-2">
        <Banner />
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          directionalLockEnabled={true}
          alwaysBounceVertical={false}
        >
          <FlatList
            contentContainerStyle={{ alignSelf: "flex-start" }}
            numColumns={Math.ceil(data1.length / 2)}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            data={data1}
            renderItem={({ item, index }) => {
              return (
                <View
                  style={{
                    padding: 10,
                    margin: 5,
                    borderWidth: 1,
                    borderColor: "#ccc",
                    width: 50,
                    height: 50,
                    alignSelf: "flex-start",
                  }}
                >
                  <Text>{index + 1}</Text>
                </View>
              );
            }}
          />
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  topList: {
    minHeight: 100,
    marginBottom: 6,
    width: "100%",
  },
});

export default TopListHome;
