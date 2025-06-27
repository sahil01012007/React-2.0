import React from 'react'

function Card({country = "none"}) {
  return (
    <div className=" w-72 flex flex-col rounded-xl glass  min-h-72 mt-3 ">
        <div>
          <img
            src="https://images.pexels.com/photos/26045510/pexels-photo-26045510.jpeg"
            alt="test"
            width="300"
            height="300"
            className="rounded-t-xl w-full"
          />
        </div>
        <div className="flex flex-col py-3 px-3 pb-7 -mt-4 bg-black rounded-b-xl ">
          <div className="flex justify-between">
            <h1 className="font-RubikBold ">{country}</h1>
            <h1 className="font-bold font-RubikBold">Price</h1>
          </div>
          <div className="flex  justify-between font-mono">
            <p>#345</p>
            <p>0.01</p>
          </div>
        </div>
      </div>
  )
}

export default Card
