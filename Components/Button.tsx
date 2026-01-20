import { useEffect, useState } from "react";
import { Pressable, Text, StyleSheet } from "react-native";

const Button = () => {
  const [count, setCount] = useState(63);
  useEffect(() => {
    if (count === 0) {
      setCount(63);
    }
  });
  return (
    <Pressable
      style={styles.button}
      onPress={() => {
        if (count <= 11 && count > 1) {
          alert("Ouch! You clicked me");
        } else if (count === 1) {
          alert("Yeah!!! Let's do it again, it was fun!");
        }
        setCount(count - 1);
      }}
    >
      <Text style={styles.text}>Press me carefully. The count is {count}</Text>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  button: {
    backgroundColor: "orange",
    padding: 12,
    borderRadius: 10,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    shadowOpacity: 0.15,

    //
    elevation: 6,
  },
  text: { fontWeight: 600 },
});
export default Button;
