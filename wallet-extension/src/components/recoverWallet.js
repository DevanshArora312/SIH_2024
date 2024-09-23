import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import {Input, Button} from 'antd';
import { ethers } from 'ethers';
const {TextArea} = Input
const RecoverWallet = ({setWallet, setSeedPhrase}) => {
    const navigate = useNavigate();
    const [typedSeed, setTypedSeed] = useState("");
    const [valid, setValid] = useState(true);

    const seedAdjust = (e)=>{
        setTypedSeed(e.target.value);
    }

    const recoverWallet = ()=>{
        try{
            const recoveredWallet = ethers.Wallet.fromPhrase(typedSeed);
            setSeedPhrase(typedSeed);
            setWallet(recoveredWallet.address);
            navigate('/wallet');
        } catch(err){
            setValid(false);
        }
    }
    return (
    <div >
          <div className='text-[#faad14] mt-4 bg-[#fffbe6] border-1 border-[#ffe58f] p-[5px] display-flex flex-start items-center text-sm'>
            Type your seed phrase in the field below to recover your wallet (it
            should include 12 words seperated with spaces)
          </div>    
          <div className='w-full flex flex-col items-start mt-16 px-2'>
            <TextArea
                value={typedSeed}
                onChange={seedAdjust}
                rows={8}
                className="seedPhraseContainer"
                placeholder="Type your seed phrase here..."
            />
          </div>
          <div className='mt-2'>
            <Button 
                disabled={
                typedSeed.split(" ").length !== 12 || typedSeed.slice(-1) === " "
                }
                className="frontPageButton"
                type="primary"
                onClick={recoverWallet}
            >
                Recover Wallet
            </Button>
          </div>
    </div>
  )
}

export default RecoverWallet