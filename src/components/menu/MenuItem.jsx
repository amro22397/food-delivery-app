import React from 'react'

const MenuItem = () => {
  return (
    <div className="bg-gray-200 p-4 rounded-lg text-center
    group hover:bg-white hover:shadow-md hover:shadow-black/25
    transition-all">
        <div className="text-center">
            <img src="/pizza.png" alt="pizza" />
        </div>
                
                <h4 className="font-semibold text-xl my-3">Pepperoni Pizza</h4>
                <p className="text-gray-500 text-sm">
                    Lorem ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet
                    ipsum dolor sit amet.
                </p>
                <p className="mt-3 text-xl font-semibold" style={{fontFamily: 'arial'}}>$ 12</p>
                
                <button className="mt-4 bg-red-600 text-white
                rounded-full px-8 py-2">Add to cart</button>
            </div>
  )
}

export default MenuItem
