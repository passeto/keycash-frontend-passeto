import React, { useContext } from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { enableScreens } from 'react-native-screens';
import Home from 'containers/Home';
import Product from 'containers/Product'


enableScreens();
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Stack.Navigator
      mode="modal"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Product" component={Product} />
    </Stack.Navigator>

  );
};

export default App;
