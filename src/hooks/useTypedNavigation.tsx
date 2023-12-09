import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { MainStackParamList } from '../navigation';

function useTypedNavigation() {
  const navigation =
    useNavigation<NativeStackNavigationProp<MainStackParamList>>();

  return navigation;
}

export default useTypedNavigation;
