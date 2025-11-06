import Icon from '@react-native-vector-icons/ionicons';
import ionicGlyphmap from '@react-native-vector-icons/ionicons/glyphmaps/Ionicons.json';

interface Props {
    name: keyof typeof ionicGlyphmap;
    size?: number;
    color?: string;
}

export const IonIcon = ({size = 25, name, color = 'black'}: Props) => {
  return (
      <Icon name={name} size={size} color={color} />
  )
}
