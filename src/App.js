import { useState } from 'react';
import './App.css';
import DescriptionBox from './Components1/DescriptionBox';
import UsageBoxes from './Components1/UsageBoxes';
import Layout1 from './theme/layout1';
import Layout2 from './theme/layout2';
import Layout3 from './theme/layout3';

function App() {
  const [count,setCount]=useState(1)
  return (
    <>
    <div>
    <button onClick={()=>{setCount(1)}}>Layout 1</button>
    <button onClick={()=>{setCount(2)}}>Layout 2</button>
    <button onClick={()=>{setCount(3)}}>Layout 3</button>
    </div>
    {count===1&&<Layout1/> }
    {count===2&&<Layout2/> }
    {count===3&&<Layout3/> }
    </>
  );
}

export default App;