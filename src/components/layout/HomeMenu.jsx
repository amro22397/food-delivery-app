import Image from 'next/image'
import React from 'react'

const HomeMenu = () => {
  return (
    <section className="">
        <div className="absolute h-full left-0 right-0 w-full
        justify-start">
            <div className="absolute left-0 -top-[70px] text-left
            -z-10">
            <Image src={'/sallad1.png'} alt={'sallad'} width={109} height={109} />
            </div>

            <div className="absolute right-0 -top-[100px]
            -z-10">
            <Image src={'/sallad2.png'} alt={'sallad'} width={107} height={195} />
            </div>

        </div>

        <div className="text-center">
            <h3 className="uppercase text-gray-500 font-semibold
            loading-4">
                Check out
            </h3>

            <h2 className="text-red-600 font-bold text-4xl
            italic">Menu</h2>
        </div>

        <div className="grid grid-cols-3 gap-4">
            <div className="bg-gray-200 p-4 rounded-lg text-center">
                <img src="/pizza.png" alt="pizza" />
                <h4 className="font-semibold text-xl my-3">Pepperoni Pizza</h4>
                <p className="text-gray-500 text-sm">
                    Lorem ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet
                    ipsum dolor sit amet.
                </p>
                <p className="mt-3 text-xl font-semibold" style={{fontFamily: 'arial'}}>$ 12</p>
                <button className="mt-4 bg-red-600 text-white
                rounded-full px-8 py-2">Add to cart</button>
            </div>
        </div>
    </section>
  )
}

export default HomeMenu
