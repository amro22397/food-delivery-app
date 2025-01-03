import Image from 'next/image'
import React from 'react'
import MenuItem from '../menu/MenuItem'
import SectionHeaders from './SectionHeaders'

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

        <div className="text-center mb-7">
            <SectionHeaders subHeader={'check out'} mainHeader={'Menu'} />
        </div>

        <div className="grid grid-cols-4 gap-4">
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
        </div>
    </section>
  )
}

export default HomeMenu
