import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { ProfileScreen } from '../screens/profile/ProfileScreen';
import { globalColors } from '../theme/theme';
import { Text, useWindowDimensions, View } from 'react-native';
import { BottomTabNavigator } from './BottomTabsNavigator';
import { IonIcon } from '../components/shared/IonIcon';

const Drawer = createDrawerNavigator();

export const SideMenuNavigator = () => {
  const dimensions = useWindowDimensions();

  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerType: dimensions.width >= 758 ? 'permanent' : 'slide',
        headerShown: false,

        drawerActiveBackgroundColor: globalColors.primary,
        drawerActiveTintColor: 'white',
        drawerInactiveTintColor: globalColors.primary,
        drawerItemStyle: {
          borderRadius: 100,
          paddingHorizontal: 20,
        },
      }}
    >
      {/* <Drawer.Screen name="StackNavigator" component={StackNavigator} /> */}

      <Drawer.Screen
        options={{
          drawerIcon: ({ color }) => (
            <IonIcon name="file-tray-stacked-outline" color={color} />
          ),
        }}
        name="Tabs"
        component={BottomTabNavigator}
      />

      <Drawer.Screen
        options={{
          drawerIcon: ({ color }) => (
            <IonIcon name="person-circle-outline" color={color} />
          ),
        }}
        name="Profile"
        component={ProfileScreen}
      />

    </Drawer.Navigator>
  );
};

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  const dimensions = useWindowDimensions();

  return (
    <DrawerContentScrollView>
      <View
        style={{
          height: dimensions.width >= 758 ? 150 : 250,
          backgroundColor: globalColors.primary,
          margin: 30,
          borderRadius: 50,
        }}
      />

      <Text style={{ textAlign: 'center' }}>Hello World!</Text>

      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};
