import { useEffect, useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import { dropDownData } from '../../utils/util-store';
import { useDispatch, useSelector } from 'react-redux';
import { setBlockChain } from '../../redux/slices/blockChain';

export default function Dropdown() {
    const value1 = useSelector((state : any) => state.blockChain.chain);
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(value1);
    const [items, setItems] = useState(dropDownData);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(setBlockChain(value));
    },[value,value1])
  return (
    <DropDownPicker   
        containerStyle={{
            width:150
        }}
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
    />
  );
}