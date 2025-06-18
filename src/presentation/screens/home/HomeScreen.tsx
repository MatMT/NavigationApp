import { Pressable, Text, View } from 'react-native';
import { globalStyles } from '../../theme/theme';
import { useNavigation } from '@react-navigation/native';
import { PrimaryButton } from '../../components/shared/PrimaryButton';

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={globalStyles.container}>
      {/* <Pressable
        onPress={() => navigation.navigate('Products' as never)}
        style={globalStyles.primaryButton}
      >
        <Text style={globalStyles.buttonText}>Productos</Text>
      </Pressable> */}

      <PrimaryButton
        onPress={() => navigation.navigate('Products' as never)}
        label="Products"
      />

      <PrimaryButton
        onPress={() => navigation.navigate('Profile' as never)}
        label="Profile"
      />

      <PrimaryButton
        onPress={() => navigation.navigate('Settings' as never)}
        label="Settings"
      />
    </View>
  );
}
