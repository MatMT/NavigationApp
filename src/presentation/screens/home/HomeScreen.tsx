import { View } from 'react-native';
import { globalStyles } from '../../theme/theme';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { PrimaryButton } from '../../components/shared/PrimaryButton';
import { RootStackParams } from '../../routes/StackNavigator';

export default function HomeScreen() {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  return (
    <View style={globalStyles.container}>
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
