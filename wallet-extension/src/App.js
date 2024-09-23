import {useState} from 'react'; 
import { Select } from "antd";
import apophis_logo from './assets/apophis.jpg';
function App() {
  const [wallet, setWallet] = useState(null);
  const [seedPhrase, setSeedPhrase] = useState(null);
  const [selectedChain, setSelectedChain] = useState("Ethereum");
  return (
    <div className="text-center w-[350px] h-[600px] flex items-center justify-start flex-column border border-black">
      <header className='flex flex-row items-center justify-between w-full px-2'>
            <div>
              <img src={apophis_logo} width={100} height={100} className='rounded-full shadow-sm shadow-slate-700'/>
            </div>
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
    </div>
  );
}

export default App;
