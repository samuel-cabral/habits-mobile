import { View } from 'react-native';

import { Logo } from './Logo';
import { NewHabitButton } from './NewHabitButton';

export function Header() {
  return (
    <View className="w-full flex-row items-center justify-between">
      <Logo />
      <NewHabitButton />
    </View>
  )
}