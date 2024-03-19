// import React from 'react';
// import { View, Text, TouchableOpacity } from 'react-native';

// const Header = () => {
//   const handleCreateBlog = () => {
//     // Handle create blog functionality
//   };

//   const handleLogin = () => {
//     // Handle login functionality
//   };

//   const handleHome = () => {
//     // Handle home functionality
//   };

//   const handleAbout = () => {
//     // Handle about functionality
//   };

//   return (
//     <View style={styles.container}>
//       <TouchableOpacity onPress={handleCreateBlog}>
//         <Text style={styles.button}>Create Blog</Text>
//       </TouchableOpacity>
//       <TouchableOpacity onPress={handleLogin}>
//         <Text style={styles.button}>Login</Text>
//       </TouchableOpacity>
//       <TouchableOpacity onPress={handleHome}>
//         <Text style={styles.button}>Home</Text>
//       </TouchableOpacity>
//       <TouchableOpacity onPress={handleAbout}>
//         <Text style={styles.button}>About</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import CreateBlogScreen from './CreateBlogScreen';

const Header = ({ navigation }) => {
  const handleHome = () => {
    navigation.navigate('Home');
  };

  const handleCreateBlog = () => {
    navigation.navigate('CreateBlog');
  };

  const handleLogin = () => {
    navigation.navigate('Login');
  };

  const handleAbout = () => {
    navigation.navigate('About');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleHome}>
        <Text style={styles.headerOption}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleCreateBlog}>
        <Text style={styles.headerOption}>Create Blog</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleLogin}>
        <Text style={styles.headerOption}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleAbout}>
        <Text style={styles.headerOption}>About</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    height: 60,
    paddingHorizontal: 16,
  },
  headerOption: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginHorizontal: 8,
  },
};

export default Header;
