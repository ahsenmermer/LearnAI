import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../pages/Bottom/Home';
import Profile from '../pages/Bottom/Profile';
import PenguinChat from '../pages/Bottom/PenguinChat';
import TabBar from '../components/TabBar';

const Tab = createBottomTabNavigator();

export default function LearnAINavigator({route}: any) {
  return (
    <Tab.Navigator
      tabBar={props => <TabBar {...props} />}
      screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="Home"
        component={Home}
        initialParams={{
          image: require('../constants/assets/home.png'),
          id: route.params.id,
        }}
      />
      <Tab.Screen
        name="PenguinChat"
        component={PenguinChat}
        initialParams={{
          image: require('../constants/assets/penguin.png'),
          id: route.params.id,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        initialParams={{
          image: require('../constants/assets/profile.png'),
          id: route.params.id,
        }}
      />
    </Tab.Navigator>
  );
}
