import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';

const IndividualBlogScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('./assets/individualBlog.jpg')} style={styles.backgroundImage}>
        <Text style={styles.blogContent}>This is the content of the individual blog.</Text>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  blogContent: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    padding: 20,
  },
});

export default IndividualBlogScreen;
