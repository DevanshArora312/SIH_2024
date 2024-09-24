import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Dropdown from './Dropdown'

const Header = () => {
  return (
    <SafeAreaView className='absolute top-0 left-0 w-full text-[35px] p-5 flex-row justify-between items-center'>
      <Text className='text-blue-700 text-2xl font-semibold'>Apophis</Text>
      <Dropdown/>
    </SafeAreaView>
  )
}

export default Header