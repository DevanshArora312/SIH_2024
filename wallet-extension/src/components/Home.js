import React from 'react'
import apophis_logo from '../assets/apophis.jpg';
import { Button } from 'antd';
const Home = () => {
  return (
    <div className='flex flex-col items-center my-16'>
        <div>
            <img src={apophis_logo} width={250} height={250} className='rounded-full'/>
        </div>
        <h2 className='text-[28px] font-bold text-stone-600'>Welcome Back!</h2>
        <div className='text-[14px] font-semibold text-stone-400'>The DECENTRALIZED WEB Awaits...</div>
        <div className='my-8 flex flex-row items-center gap-4'>
            <Button
                onClick={()=>{

                }}
                type='primary'
            >
                Create A Wallet
            </Button>
            <Button
                onClick={()=>{

                }}
                type='default'
            >
                Sign In
            </Button>
        </div>
    </div>
  )
}

export default Home