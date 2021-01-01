import React from "react";
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TextInput,
  Platform,
} from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

const App = () => {
  return (
    <SafeAreaProvider style={styles.container}>
      <ScrollView>
        <Text>First line of Text.</Text>
        <View>
          <Text>Second line of text.</Text>
          <Image
            source={{ uri: "https://reactnative.dev/docs/assets/p_cat2.png" }}
            style={{ width: 200, height: 200 }}
          />
        </View>
        <TextInput
          style={{ height: 40, borderColor: "aqua", borderWidth: 1 }}
          placeholder="Fill me, will ya please!"
        />
      </ScrollView>
    </SafeAreaProvider>
  );
};

console.log("statusBarHeight: ", StatusBar.currentHeight);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    ...Platform.select({
      ios: {
        paddingTop: StatusBar.currentHeight,
      },
      android: {
        paddingTop: StatusBar.currentHeight,
        backgroundColor: "aqua",
      },
      default: {
        paddingTop: 30,
        backgroundColor: "orange",
      },
    }),
  },
});

export default App;
