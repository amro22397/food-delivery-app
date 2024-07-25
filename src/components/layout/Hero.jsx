import React from 'react'
import Right from '../icons/Right'
import Image from 'next/image'

const Hero = () => {
  return (
<section className='hero'>
    <div className='py-12'>
        <h1 className="text-4xl font-semibold">Everything<br/>
         is better<br/>
          with a&nbsp;
          <span className='text-red-600'>
            Pizza
            </span></h1>
        <p className="my-4 text-gray-500">
            Pizza is the missing piece that makes every
            complete.
        </p>

        <div className="flex gap-4 text-sm">
        <button className='bg-red-600 gap-2 text-white px-5 py-2
        rounded-full flex flex-row items-center'>
            Order now
            <Right/>
            </button>
        <button className='gap-2 py-2
        text-gray-600 font-semibold 
        flex flex-row rounded-full items-center'>
            Learn more 
        <Right/>
        </button>
    </div>
    </div>

    <div className="relative">
        <Image src={'/pizza.png'} layout={'fill'}
        objectFit={'contain'} alt={'pizza'} />
    </div>
</section>
  )
}

export default Hero
