import { Text, View } from 'react-native';
import { globalStyles } from '../../theme/theme';
import { PrimaryButton } from '../../components/shared/PrimaryButton';
import { StackActions, useNavigation } from '@react-navigation/native';

export const SettingsScreen = () => {
  const navigator = useNavigation();

  return (
    <View style={globalStyles.container}>
      <Text>Settings Screen</Text>

      <PrimaryButton label="Back" onPress={() => navigator.goBack()} />

      <PrimaryButton label="Go Home" onPress={() => navigator.dispatch(StackActions.popToTop())} />
    </View>
  );
};
