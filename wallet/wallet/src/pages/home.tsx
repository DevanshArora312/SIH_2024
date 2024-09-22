import crypto from '../assets/crypto.webp';
import icons from '../assets/crypto icons.png';
export const Home = () => {
    return (
    <div className='py-[4rem] px-[2rem] flex flex-col items-center justify-between w-full mx-auto'>
        <div className='w-[800px] mx-auto flex flex-col gap-2'>
            <div className='text-[68px] font-bold bg-gradient-to-r from-blue-600 to-blue-200 bg-clip-text text-transparent'>
                BlockVault Wallet
            </div>
            <div className='text-[20px] text-stone-400 font-semibold'>
                Buy And Sell Crypto
            </div>
        </div>
        <div className="w-[80vw] mx-auto flex flex-row items-center">
            <div className='flex flex-col items-start justify-start gap-4 text-lg text-stone-500'>
                <div>Store and manage all of your crypto, NFTs, and multiple wallets in one place</div>
                <div>Support for Bitcoin, Ethereum, Solana, Dogecoin, and all Ethereum-compatible networks</div>
                <div>Explore thousands of tokens and dapps on your phone or browser</div>
                <div>Protect your digital assets with industry-leading security</div>
                <div className='bg-blue-500 text-white py-2 px-4 rounded-full cursor-pointer hover:bg-blue-600 duration-200'>Download BlockVault</div>
            </div>
            <div>
                <img src={crypto}/>
            </div>
        </div>
        <div className='py-24'>
            <img src={icons}/>
        </div>
    </div>
  )
}