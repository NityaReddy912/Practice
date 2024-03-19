import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

const BlogScreen = ({ navigation }) => {
  const handleBlogItemPress = () => {
    navigation.navigate('IndividualBlog');
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={require('./assets/blog1.jpg')} style={styles.backgroundImage}>
        <TouchableOpacity style={styles.blogItem} onPress={handleBlogItemPress}>
          <Text style={styles.blogTitle}>Blog 1</Text>
        </TouchableOpacity>
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
  blogItem: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 20,
    borderRadius: 5,
    alignSelf: 'center',
  },
  blogTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default BlogScreen;
