import { View, Text, Keyboard, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import React from 'react'
import Header from '../../components/header/Header'

const Landing = ({navigation} : {navigation : any}) => {
  return (
    <KeyboardAvoidingView className='w-full h-screen justify-center items-center'>
        <Header/>
        <View className='gap-y-10 w-full items-center justify-center'>
          <Text className='text-[50px] text-black'> Apophis image</Text>
          <View className='my-3 items-center justify-center'>
              <Text className='text-gray-800 text-[35px] font-bold'>Welcome back!</Text>
              <Text className='text-slate-400 text-[20px] font-semibold' >The Decentralised Web awaits...</Text>
          </View>
          <View className='flex-row w-full gap-x-10 justify-center text-[20px] items-center'>
              <TouchableOpacity className='bg-blue-600 rounded-lg py-3 px-5 ' onPress={() => navigation.navigate("SeedPhrase")}>
                <Text className='text-white text-lg'>Create Wallet</Text>
              </TouchableOpacity>
              <TouchableOpacity className='bg-gray-200 rounded-lg py-3 px-6 border-[0.5px] border-gray-600'>
                <Text className='text-black text-lg'>Sign In</Text>
              </TouchableOpacity>
          </View>
        </View>
    </KeyboardAvoidingView>
  )
}

export default Landing