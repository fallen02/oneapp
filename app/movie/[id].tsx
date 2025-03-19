import { Text, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'


export default function MovieScreen() {
    const {id} = useLocalSearchParams()
    return (
      <SafeAreaView className='flex justify-center items-center'>
        <Text className='text-foreground'>{ id }</Text>
      </SafeAreaView>
    )
}