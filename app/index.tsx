import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '@/components/HomeScreen';
import DetailsScreen from '@/components/DetailsScreen';
import DownloadScreen from '@/components/DownloadScreen';
import { NewsProvider } from '@/components/NewsContext';

const Stack = createStackNavigator();

export default function App() {
  return (
      <NewsProvider>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              title: 'Tech News',
              headerStyle: { backgroundColor: '#AADDEE' },
              headerTintColor: '#000',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
          <Stack.Screen
            name="Details"
            component={DetailsScreen}
            options={{
              title: 'Notícia',
              headerStyle: { backgroundColor: '#AADDEE' },
              headerTintColor: '#000',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
          <Stack.Screen
            name="index2"
            component={DownloadScreen}
            options={{
              title: 'Downloads',
              headerStyle: { backgroundColor: '#AADDEE' },
              headerTintColor: '#000',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
        </Stack.Navigator>
      </NewsProvider>
  );
}
