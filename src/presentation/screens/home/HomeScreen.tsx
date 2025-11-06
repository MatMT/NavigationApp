import { Pressable, Text, useWindowDimensions, View } from 'react-native';
import { globalStyles } from '../../theme/theme';
import {
  DrawerActions,
  NavigationProp,
  useNavigation,
} from '@react-navigation/native';
import { PrimaryButton } from '../../components/shared/PrimaryButton';
import { RootStackParams } from '../../routes/StackNavigator';
import { useEffect } from 'react';
import { HamburgerMenu } from '../../components/shared/HamburgerMenu';

export default function HomeScreen() {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();
  const dimensions = useWindowDimensions();

  // Execute when the component is rendered
  // useEffect(() => {
  //   navigation.setOptions({
  //     headerLeft: () => {
  //       if (dimensions.width >= 758) return null;

  //       return (
  //         <Pressable
  //           onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}
  //         >
  //           <Text>Menu</Text>
  //         </Pressable>
  //       );
  //     },
  //   });
  // }, [navigation, dimensions]);

  return (
    <View style={globalStyles.container}>
      <HamburgerMenu />

      {/* <Pressable
        onPress={() => navigation.navigate('Products' as never)}
        style={globalStyles.primaryButton}
      >
        <Text style={globalStyles.buttonText}>Productos</Text>
      </Pressable> */}

      <PrimaryButton
        onPress={() => navigation.navigate('Products')}
        label="Products"
      />

      <PrimaryButton
        onPress={() => navigation.navigate('Profile')}
        label="Profile"
      />

      <PrimaryButton
        onPress={() => navigation.navigate('Settings')}
        label="Settings"
      />
    </View>
  );
}
