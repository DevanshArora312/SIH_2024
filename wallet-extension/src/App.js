import {useState} from 'react'; 
import { Select } from "antd";
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import CreateWallet from './components/createWallet';
import RecoverWallet from './components/recoverWallet';
import Wallet from './components/wallet';
import Apophis_logo from './assets/apophis.jpg';
function App() {
  const [wallet, setWallet] = useState(null);
  const [seedPhrase, setSeedPhrase] = useState(null);
  const [selectedChain, setSelectedChain] = useState("0x1");
  return (
    <div className="text-center w-[350px] h-[600px] flex flex-col items-center justify-start border border-slate-600">
      <header className='flex flex-row items-center justify-between w-full px-4 my-4'>
            <div className='text-[18px] font-bold text-blue-600 flex flex-row gap-2 justify-center items-center'>
                {wallet && <span className='animate-spin rounded-full '><img src={Apophis_logo} height={40} width={40}/></span>}Apophis
            </div>
            <div>
              <Select
                value={selectedChain}
                onChange={(val) => setSelectedChain(val)}
                options={
                  [
                    {
                      label: "Ethereum",
                      value: "0x1"
                    },
                    {
                      label: "Polygon",
                      value: "0x89"
                    },
                    {
                      label: "Avalanche",
                      value: "0xa86a"
                    }
                  ]
                }
              >
              </Select>
          </div>
      </header>
      {
        wallet && seedPhrase ? <Routes>
            <Route path={"/wallet"} element={<Wallet wallet={wallet} seedPhrase={seedPhrase} setSeedPhrase={setSeedPhrase} setWallet={setWallet} selectedChain={selectedChain}/>}/>
        </Routes> : <Routes>
          <Route path={"/"} element={<Home/>}/>
          <Route path={"/recover"} element={<RecoverWallet setSeedPhrase={setSeedPhrase} setWallet={setWallet}/>}/>
          <Route path={"/wallet"} element={<CreateWallet setSeedPhrase={setSeedPhrase} setWallet={setWallet}/>}/>
        </Routes>
      }
    </div>
  );
}

export default App;
