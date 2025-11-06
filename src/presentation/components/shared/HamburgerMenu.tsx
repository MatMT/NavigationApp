import { Pressable, Text, View } from 'react-native';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { IonIcon } from './IonIcon';
import { globalColors } from '../../theme/theme';

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
          <IonIcon name="menu-outline" color={globalColors.primary} />
        </Pressable>
      ),
    });
  }, []);

  return (
    <></>
  )
};
