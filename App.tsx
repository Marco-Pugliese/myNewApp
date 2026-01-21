import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Button from "./Components/Button";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>
        <Button />
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6363",
    alignItems: "center",
    justifyContent: "center",
  },
});
