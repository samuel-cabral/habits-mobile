import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import { Feather } from '@expo/vector-icons'
import colors from 'tailwindcss/colors'

interface NewHabitButtonProps extends TouchableOpacityProps {}

export function NewHabitButton({ onPress }: NewHabitButtonProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      className="flex-row h-11 px-4 border border-violet-500 rounded-lg items-center"
      onPress={onPress}
    >
      <Feather name="plus" color={colors.violet[500]} size={20} />
      <Text className="text-white ml-3 font-semibold text-base">Novo</Text>
    </TouchableOpacity>
  )
}
