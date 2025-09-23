import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { PrimaryButton } from '../../components/shared/PrimaryButton';
import { DrawerActions, useNavigation } from '@react-navigation/native';

export const ProfileScreen = () => {
  const navigation = useNavigation();
  const { top } = useSafeAreaInsets();

  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 20,
        marginTop: top,
      }}
    >
      
      <Text style={{marginBottom: 10}}>ProfileScreen</Text>

      <PrimaryButton
      onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}
      label='Open Menu'
      />
    </View>
  );
};
