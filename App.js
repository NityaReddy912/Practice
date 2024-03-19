

// import React from 'react';
// import { View } from 'react-native-web';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import HomeScreen from './Views/HomeScreen';
// import BlogScreen from './Views/BlogScreen';
// import IndividualBlogScreen from './Views/IndividualBlogScreen';
// import BlogDetailsScreen from './Views/BlogDetailsScreen';
// import Header from './Views/Header';
// import CreateBlogScreen from './Views/CreateBlogScreen';

// const Stack = createStackNavigator();

// const App = () => {
//   return (
//     <View>
//     <Header/>
    
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Home">
//         <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
//         <Stack.Screen name="Blog" component={BlogScreen} options={{ title: 'Blog' }} />
//         <Stack.Screen name="CreateBlog" component={CreateBlogScreen} />
        
//         <Stack.Screen name="IndividualBlog" component={IndividualBlogScreen} options={{ title: 'Individual Blog' }} />
//       </Stack.Navigator>
//     </NavigationContainer>
//     </View>
//   );
// };

// export default App;
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import HomeScreen from './Views/HomeScreen';
import CreateScreen from './Views/CreateBlogScreen';
import AboutScreen from './Views/AboutScreen';
import LoginScreen from './Views/LoginScreen';
// import Header from './Views/Header';

const Tab = createBottomTabNavigator();

const App = () => {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <NavigationContainer>
      {/* <Header activeTab={activeTab} setActiveTab={setActiveTab} /> */}
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'Create') {
              iconName = 'plus';
            } else if (route.name === 'About') {
              iconName = 'info';
            } else if (route.name === 'Login') {
              iconName = 'user';
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Create" component={CreateScreen} />
        <Tab.Screen name="About" component={AboutScreen} />
        <Tab.Screen name="Login" component={LoginScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;





