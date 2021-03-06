import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Photo = ({ file, count }) => {
  const [like, setLike] = useState(count);

  const increment = () => {
    setLike(like + 1);
  };
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={file} />
      <TouchableOpacity onPress={increment}>
        <Text>{like} likes</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#CDDDDD",
    borderWidth: 2,
    marginVertical: 10,
    paddingVertical: 10,
    shadowColor: "#000000",
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.3,
  },
  text: {
    fontSize: 22,
    color: "#000000",
    marginVertical: 10,
  },
  img: {
    height: 180,
    width: 180,
  },
});

export default Photo;
