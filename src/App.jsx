import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Left from './component/Left'
import Right from './component/Right'

function App() {
  const [count, setCount] = useState(0)
  const [amount, setAmount] = useState('')
  const [discount, setDiscount] = useState('')
  const [newAmount, setNew] = useState(0)
  const [amntSaved, setAmntSaved] = useState(0)
  const [priceDiff, setPriceDiff] = useState(0)
const calc=()=>{

if (!amount || !discount) return;
    const discountedPrice = amount - (amount * discount) / 100;
  setNew(discountedPrice.toFixed(2));
  setAmntSaved((amount - discountedPrice).toFixed(2));
  setPriceDiff(((discountedPrice / amount) * 100).toFixed(2));
}
const reset=()=>{
  setAmount('');
  setDiscount('');
  setNew(0);
  setAmntSaved(0);
  setPriceDiff(0);
}
  

  return (
    <>
      <div  className='bg-primary-subtle min-vh-100 text-center d-flex flex-column align-items-center'>
        <div className='text-center align-items-center mt-4'>
          <h1>Discount Calculator</h1>
          <p>"Calculate your savings in seconds! The ultimate discount calculator at your fingertips."</p>
        </div>
        <div className="row container bg-white rounded shadow mt-3 p-4">
          <div className="col-6  ">
             <Left newAmount={newAmount} amntSaved={amntSaved} priceDiff={priceDiff}/>
          </div>
          <div className="col-6 ">
             <Right amount={amount}
  discount={discount}
  setAmount={setAmount}
  setDiscount={setDiscount}
  calc={calc}
  reset={reset}/>
          </div>
        </div>
         
      </div>
      
    </>
  )
}

export default App
