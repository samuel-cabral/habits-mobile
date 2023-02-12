import { View } from 'react-native'

interface Props {
  progress?: number
}

export function ProgressBar({ progress = 0 }: Props) {
  return (
    <View className="w-full bg-zinc-700 h-3 mt-4 rounded-lg justify-center">
      <View
        className="bg-violet-600 h-3 w-full rounded-lg"
        style={{ width: `${progress}%` }}
      />
    </View>
  )
}
