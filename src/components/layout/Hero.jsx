import React from 'react'
import Right from '../icons/Right'
import Image from 'next/image'

const Hero = () => {
  return (
    <section>
    <div>
        <h1 className="text-4xl font-semibold">Everything is better with a Pizza</h1>
        <p className="my-4 text-gray-500">
            Pizza is the missing piece that makes every
            complete.
        </p>
    </div>

    <div className="flex flex-row gap-4">
        <button className='bg-red-600 gap-2 text-white px-5 py-2
        rounded-full flex flex-row'>
            Order now
            <Right/>
            </button>
        <button>Learn more</button>
    </div>

    <div className="relative">
        <Image src={'/pizza.png'} layout={'fill'}
        objectFit={'contain'} alt={'pizza'} />
    </div>
    </section>
  )
}

export default Hero
