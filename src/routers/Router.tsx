// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider} from 'react-native-paper';
import LearnAINavigator from './learnAI-navigator';
import Intro from '../pages/Stack/Intro';
import Login from '../pages/Stack/Login';
import Register from '../pages/Stack/Register';
import Chat from '../pages/Stack/Chat';
import ContactUs from '../pages/Stack/ContactUs';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Provider>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="BottomNavBar" component={LearnAINavigator} />
          <Stack.Screen name="Intro" component={Intro} />
          <Stack.Screen name="Register" component={Register} />

          <Stack.Screen name="Chat" component={Chat} />
          <Stack.Screen
            name="ContactUs"
            component={ContactUs}
            options={{headerShown: true, title: 'Contact Us'}}
          />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}

export default App;
