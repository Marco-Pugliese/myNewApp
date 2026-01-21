import { useEffect, useState } from "react";
import { Pressable, Text, StyleSheet, View } from "react-native";

const Button = () => {
  const [count, setCount] = useState<number>(63);
  const [newnumber, setNewnumber] = useState<number>(36);
  useEffect(() => {
    if (count === 0 || count === 63) {
      handleChange();
    }
  }, [count]);
  const handlePress = (): void => {
    {
      if (count <= 6 && count > 1) {
        alert("Ouch! We almost ran out of it");
      } else if (count === 1) {
        alert("Yeah!!! it was fun, wasnt it!?");
      }
      setCount(count - 1);
    }
  };
  const handleChange = (): void => {
    if (count != 0 || 63) {
      setNewnumber(Math.floor(Math.random() * 63));
      setCount(newnumber);
      alert("Let's start over! new number is: " + newnumber);
    }
  };
  const handleAdd = (): void => {
    if (count > 57 && count < 62) {
      alert("Watch out, we almost reached the top");
    } else if (count === 62) {
      alert("Yeah!!! it was fun, wasnt it!?");
    }
    setCount(count + 1);
  };

  return (
    <>
      <View style={styles.view}>
        <Pressable style={styles.button} onPress={handlePress}>
          <Text style={styles.text}>Remove 1 please</Text>
        </Pressable>
        <Pressable style={styles.text2}>
          <Text>The Count is {count}</Text>
        </Pressable>
        <Pressable style={styles.button2} onPress={handleChange}>
          <Text style={styles.text}>Cmon. New number</Text>
        </Pressable>
        <Pressable style={styles.button3} onPress={handleAdd}>
          <Text style={styles.text}>Add 1 please</Text>
        </Pressable>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  view: {
    padding: 100,
    gap: 6,
    backgroundColor: "#6363",

    borderRadius: 10,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
    shadowOpacity: 0.12,
  },
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
  text: { fontWeight: "600" },
  text2: {
    color: "black",
    fontWeight: "600",
    padding: 12,
    backgroundColor: "lightyellow",

    borderRadius: 10,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    shadowOpacity: 0.15,
  },
  button2: {
    backgroundColor: "lightblue",
    padding: 12,
    borderRadius: 10,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    shadowOpacity: 0.15,

    //
    elevation: 6,
  },
  button3: {
    backgroundColor: "lightgreen",
    padding: 12,
    borderRadius: 10,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    shadowOpacity: 0.15,

    //
    elevation: 6,
  },
});
export default Button;
