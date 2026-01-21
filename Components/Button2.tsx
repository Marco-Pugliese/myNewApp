import { Pressable, StyleSheet, Text } from "react-native";

const Button2 = () => {
  const styles = StyleSheet.create({
    button: {
      backgroundColor: "red",
      padding: 12,
      borderRadius: 10,
      shadowColor: "black",
      shadowOffset: { width: 0, height: 4 },
      shadowRadius: 6,
      shadowOpacity: 0.15,

      //
      elevation: 6,
    },
    text: { fontWeight: "800" },
  });
  return (
    <Pressable style={styles.button} onPress={restoreCount}>
      <Text style={styles.text}>
        Press me carefully. The count is {ActualCount}
      </Text>
    </Pressable>
  );
};

export default Button2;
