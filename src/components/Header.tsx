import { useNavigation } from '@react-navigation/native'
import { View } from 'react-native'

import { Logo } from './Logo'
import { NewHabitButton } from './NewHabitButton'

export function Header() {
  const { navigate } = useNavigation()

  return (
    <View className="w-full flex-row items-center justify-between">
      <Logo />
      <NewHabitButton onPress={() => navigate('new')} />
    </View>
  )
}
