import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        <Drawer.Screen
          name="index" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Inicio',
            title: '',
            drawerIcon: ({ color, size }) => (
              <MaterialIcons name="home" color={color} size={size} />
            ),
            headerStyle: { backgroundColor: '#AADDEE' },
            headerTintColor: '#000',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Drawer.Screen
          name="index4" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Login',
            title: '',
            drawerIcon: ({ color, size }) => (
              <FontAwesome name="user" color={color} size={size} />
            ),
            headerStyle: { backgroundColor: '#AADDEE' },
            headerTintColor: '#000',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
         <Drawer.Screen
          name="index2" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Download',
            title: 'Download',
            drawerIcon: ({ color, size }) => (
              <FontAwesome name="download" color={color} size={size} />
            ),
            headerStyle: { backgroundColor: '#AADDEE' },
            headerTintColor: '#000',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
