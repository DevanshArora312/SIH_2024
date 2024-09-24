import { View, Text, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Header  from '../../components/header/Header'

const SeedPhrase = ({navigation} : {navigation : any}) => {
  const [isVisisble,setVisible] = useState<boolean>(false);
  const words = ["aryan","akhand","chutiya","tha","hai","aur","rahega","also","aryan","mera","beta","hai"];
  return (
    <KeyboardAvoidingView className='w-full h-screen justify-center items-center'>
        <Header/>
        <View className='gap-y-10 w-full items-center justify-center'>
          <View className='w-full p-2 py-5 bg-yellow-100 flex-row justify-center items-center'>
            <Text className='text-center text-[18px] text-yellow-500'> Once you generate the seed phrase , save it in a securely to recover your wallet in the future</Text>
          </View>
          {
            isVisisble ? 
            <View className='bg-blue-100 flex flex-wrap flex-row p-5 gap-4 w-full justify-center'>
              {
                words.map((item,index)=>{
                  return (
                    <Text key={index} className='text-blue-600 bg-blue-300 p-2 rounded-2xl'>
                      {item}
                    </Text>
                  )
                })
              }
            </View>
            : null
          }
          <View className='flex-col w-full gap-y-5 justify-center text-[20px] items-center'>
              <TouchableOpacity 
                onPress={()=>navigation.navigate("Recover")} 
                className='bg-blue-600 rounded-lg py-3 px-5 '
              >
                <Text className='text-white text-lg'>Create Wallet</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                onPress={()=>setVisible(!isVisisble)} 
                className='bg-gray-200 rounded-lg py-3 px-6 border-[0.5px] border-gray-600'
              >
                <Text className='text-black text-lg' >Generate Seed Phrase</Text>
              </TouchableOpacity>
          </View>
        </View>
    </KeyboardAvoidingView>
  )
}

export default SeedPhrase