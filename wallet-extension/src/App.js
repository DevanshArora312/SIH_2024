import {useState} from 'react'; 
import { Select } from "antd";
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
function App() {
  const [wallet, setWallet] = useState(null);
  const [seedPhrase, setSeedPhrase] = useState(null);
  const [selectedChain, setSelectedChain] = useState("Ethereum");
  return (
    <div className="text-center w-[350px] h-[600px] flex flex-col items-center justify-start border border-black">
      <header className='flex flex-row items-center justify-between w-full px-4 my-4'>
            <div className='text-[18px] font-bold text-stone-400'>
                Apophis
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
      <Routes>
        <Route path={"/"} element={<Home/>}/>
        {/* <Route path={"/recover"} element={<RecoverAccount setSeedPhrase={setSeedPhrase} setWallet={setWallet}/>}/> */}
        {/* <Route path={"/yourwallet"} element={<CreateAccount setSeedPhrase={setSeedPhrase} setWallet={setWallet}/>}/> */}
      </Routes>
    </div>
  );
}

export default App;
