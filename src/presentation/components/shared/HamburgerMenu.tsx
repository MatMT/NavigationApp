import { Pressable, Text, View } from 'react-native';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';

export const HamburgerMenu = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Pressable
          onPress={() => {
            navigation.dispatch(DrawerActions.toggleDrawer);
          }}
        >
          <Text>Menú</Text>
        </Pressable>
      ),
    });
  }, []);

  return (
    <></>
  )
};
