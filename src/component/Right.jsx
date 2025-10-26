import React from 'react'

function Right({amount, discount, setAmount, setDiscount, calc, reset} ) {
  return (
    <div><img src="https://img.freepik.com/free-vector/modern-sale-banner-with-text-space-area_1017-27331.jpg?semt=ais_hybrid&w=740&q=80" alt="" width="300px" height="180px" />
    
    <div className='mt-3'>
        <label className="  fw-semibold fs-5">Amount(₹)</label>
                <input 
          type="number"
          value={amount}
          placeholder="Enter Amount"
          className="form-control mt-2"onChange={(e) => setAmount(e.target.value)} />
    </div>

            <div className='mt-3'>
                <label className="  fw-semibold fs-5">Discount(%)</label>
                 <input
          type="number"
          value={discount}
          placeholder="Enter Discount"
          className="form-control mt-2 "onChange={(e) => setDiscount(e.target.value)}/>
            </div>
            <div className='d-flex align-items-center justify-content-center mt-5 gap-3 '>
                <button className='btn btn-primary shadow'onClick={calc}>Calculate</button>
                <button className='btn btn-primary shadow'onClick={reset}>Reset</button>
            </div>
    </div>
  )
}

export default Right