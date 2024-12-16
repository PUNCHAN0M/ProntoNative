import React from "react";
import { View, Image, StyleSheet } from "react-native";

const DetailImage = ({ image }) => {
  return (
    <View>
      <Image 
        source={image ? image : null} 
        style={styles.image} 
      />
    </View>
  );
};

export default DetailImage;

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain', // ปรับขนาดภาพให้พอดี
  },
});
