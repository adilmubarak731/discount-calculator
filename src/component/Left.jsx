import React from 'react'

function Left({newAmount, amntSaved, priceDiff}) {
  return (
    <div className='bg-light text-center rounded p-4 border border-primary border-3 '>
        <img src="https://cdn.dribbble.com/users/2613050/screenshots/7347945/discount_logo.gif" width="135px" height="135px" alt="Discount Logo"></img>
       
            <h2 className=" mt-5 fw-bold">Amount Paid</h2>
            <h4 className=" mt-5 fw-light">New Price</h4>
       
        <text className=" fs-1 fw-light">₹{newAmount}</text>
        <div className='d-flex justify-content-center gap-5 align-items-center '>
            <div >
            <h4 className="  fw-light">Amount Saved</h4>
            <text className=" fs-1 fw-light">₹{amntSaved}</text>
        </div>
        <div >
            <h4 className="  fw-light">Price Difference</h4>
            <text className=" fs-1 fw-light">₹{priceDiff}</text>
        </div>

           
        </div>

        
            
       

    </div>
  )
}

export default Left