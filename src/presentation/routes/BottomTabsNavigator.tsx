import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tab1Screen, Tab2Screen, Tab3Screen } from '../screens/tabs';
import { globalColors, globalStyles } from '../theme/theme';
import { Text } from 'react-native-gesture-handler';
import { TopTabsNavigator } from './TopTabsNavigator';
import { StackNavigator } from './StackNavigator';
import { IonIcon } from '../components/shared/IonIcon';

const Tab = createBottomTabNavigator();

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        // headerShown: false,
        tabBarStyle: {
          backgroundColor: globalColors.background,
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarLabelStyle: {
          marginTop: 5,
        },
        headerStyle: {
          elevation: 0,
          borderColor: 'transparent',
          shadowColor: 'transparent',
        },
      }}
    >
      <Tab.Screen
        name="Tab1"
        options={{
          title: 'Tab 1',
          tabBarIcon: ({color}) => <IonIcon name="chatbox-outline" color={color} />,
        }}
        component={Tab1Screen}
      />

       <Tab.Screen
        name="Home"
        options={{
          title: 'Tab 3',
          tabBarIcon: ({color}) => <IonIcon name="home" color={color} />,
        }}
        component={StackNavigator}
      />

      <Tab.Screen
        name="Tab2"
        options={{
          title: 'Tab 2',
          tabBarIcon: ({color}) => <IonIcon name='person-circle-outline' color={color} />,
        }}
        component={TopTabsNavigator}
      />
     
    </Tab.Navigator>
  );
};
