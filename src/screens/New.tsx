import { Feather } from '@expo/vector-icons'
import { useState } from 'react'
import {
  Alert,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import colors from 'tailwindcss/colors'
import { BackButton } from '../components/BackButton'
import { Checkbox } from '../components/Checkbox'
import { api } from '../lib/axios'

const availableWeekDays = [
  'Domingo',
  'Segunda-feira',
  'Terça-feira',
  'Quarta-feira',
  'Quinta-feira',
  'Sexta-feira',
  'Sábado',
]

export function New() {
  const [title, setTitle] = useState('')
  const [weekDays, setWeekDays] = useState<number[]>([])

  function handleToggleWeekDay(weekDayIndex: number) {
    if (weekDays.includes(weekDayIndex)) {
      setWeekDays(weekDays.filter((item) => item !== weekDayIndex))
    } else {
      setWeekDays([...weekDays, weekDayIndex])
    }
  }

  async function handleCreateNewHabit() {
    try {
      if (!title.trim() || weekDays.length === 0) {
        Alert.alert(
          'Novo hábito',
          'Informe o nome do hábito e escolha a recorrência',
        )
      }

      await api.post('habits', { title, weekDays })

      setTitle('')
      setWeekDays([])

      Alert.alert('Novo hábito', 'Hábito criado com sucesso!')
    } catch (error) {
      console.log(error)
      Alert.alert('Ops', 'Não foi possível criar o novo hábito')
    }
  }

  return (
    <View className="flex-1 bg-background px-8 pt-16">
      <ScrollView showsVerticalScrollIndicator={false}>
        <BackButton />

        <Text className="mt-6 text-white font-extrabold text-3xl">
          Criar hábito
        </Text>

        <Text className="mt-6 text-white font-semibold text-base">
          Qual seu comprometimento?
        </Text>
        <TextInput
          className="h-12 pl-4 rounded-lg mt-3 bg-zinc-900 text-white border-2 border-zinc-800 focus:border-green-600"
          placeholder="Exercícios, dormir bem, etc..."
          placeholderTextColor={colors.zinc[600]}
          onChangeText={setTitle}
          value={title}
        />

        <Text className="text-white mt-5 mb-3 font-semibold text-base">
          Qual é a recorrência?
        </Text>

        {availableWeekDays.map((weekDay, index) => {
          return (
            <Checkbox
              key={`${index}-${weekDay}`}
              title={weekDay}
              checked={weekDays.includes(index)}
              onPress={() => handleToggleWeekDay(index)}
            />
          )
        })}

        <TouchableOpacity
          className="w-full h-14 mt-6 flex-row items-center bg-green-500 rounded-lg justify-center"
          activeOpacity={0.7}
          onPress={handleCreateNewHabit}
        >
          <Feather name="check" size={20} color={colors.white} />
          <Text className="ml-2 font-semibold text-base text-white">
            Confirmar
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  )
}
