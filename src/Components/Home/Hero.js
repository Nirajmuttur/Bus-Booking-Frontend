import React from 'react'

export default function Hero() {
  return (
    <div className='grid grid-cols-2 '>
      <div className='p-20 ml-20 col-span-1'>
        <span className="mb-5 uppercase text-sm leading-7 font-bold font-['Poppins']">Best Destinations Around the world</span>
        <span className="mt-5 block font-['Volkhov'] font-extrabold text-7xl">Travel,enjoy and live a new and full life</span>
        <span className="mt-5 block font-['Poppins'] text-base leading-7">Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.</span>
        <div className='p-2 mt-8 font-sans leading-6 text-sm font-medium text-center w-28 bg-yellow-400 rounded-lg text-white drop-shadow-2xl hover:cursor-pointer hover:drop-shadow-2xl'>Find Out More</div>
      </div>
      <div className='col-span-1 relative'>
        <img className='ml-3 absolute' src='./Decore.png'/>
        <img className='absolute right-20' src='./Traveller 1.png'/>
      </div>
    </div>
  )
}
