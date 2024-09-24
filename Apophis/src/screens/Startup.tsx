import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { sendLocation } from '../utils/locationUtils';
import { requestLocationPermission, requestSmsPermission } from '../utils/getPermissions';
import { useDispatch,useSelector } from 'react-redux';

const Startup = ({navigation} : {navigation : any}) => {
    const dispatch = useDispatch();
    const activeState = useSelector((state : any) => state.active)
    const checkPermissions = async () => {
        await requestLocationPermission();
        await requestSmsPermission();
    }
    const checkLoggedIn = () => {
        try{
            const isLogged = useSelector((state : any) => state.auth.userId);
            if(!isLogged || isLogged == null) return false;
            else return true;
        } catch(err){
            return false;
        }
    }
    
    useEffect(()=>{
        checkPermissions()
        .then(_ => {
            const res = checkLoggedIn();
            console.log(res);
            if(!res){
                navigation.replace("Landing");
            }
            else{
                navigation.replace("App")
            }
        })
        .catch(err => {
            console.log(err)
        })
        // setTimeout(()=>{
        //     navigation.replace("App")
        // },1000)
    },[])
  return (
    <View className='h-screen justify-center items-center'>
      <Text className='text-[30px] text-black '>ProtecTech</Text>
    </View>
  )
}

export default Startup