
import React from 'react';
import { View,ScrollView, Text, TouchableOpacity, Image } from 'react-native';
import BlogDetails from "./BlogScreen";
const HomeScreen = ({ navigation }) => {
  const blogs = [
    {
      id: 1,
      title: "Blog 1",
      image: require("../assets/blog1.jpg"),
      content: "Hakuna Matata",
      fullContent: "This is the full content of Blog 1.",
    },
    {
      id: 2,
      title: "Blog 2",
      image: require("../assets/background.jpg"),
      content: "WorkLife Balance.",
      fullContent: "In a perfect world, maintaining a work-life balance lets you prioritize both work and life responsibilities equally. Since we don’t live in an ideal world, creating a flawless balance between your work and personal duties can be challenging. This doesn’t mean that you can’t strive to create a healthy balance between your work and life responsibilities, though. Instead, it means that you must set realistic goals at home and at the office.",
    },
    {
      id: 3,
      title: "Blog 3",
      image: require("../assets/p1.jpg"),
      content: "IKIGAI",
      fullContent: "This is the full content of Blog 3.",
    },
  ];

  const handleBlogPress = (blog) => {
    navigation.navigate('BlogDetails', { blog });
  };

  // const handleCreateBlog = () => {
  //   navigation.navigate('CreateBlog');
  // };

  return (
    <ScrollView>
    <View style={styles.container}>
      {blogs.map((blog) => (
        <TouchableOpacity
          key={blog.id}
          onPress={() => handleBlogPress(blog)}
          style={styles.blogContainer}
        >
          <Image source={blog.image} style={styles.blogImage} />
          <Text style={styles.blogTitle}>{blog.title}</Text>
          <Text style={styles.blogSummary}>{blog.content}</Text>
        </TouchableOpacity>
      ))}
    </View>
    </ScrollView>
  );
};

const styles = {
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  blogContainer: {
    marginBottom: 20,
  },
  blogImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 8,
  },
  blogTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  blogSummary: {
    fontSize: 16,
    lineHeight: 24,
  },
};

export default HomeScreen;




