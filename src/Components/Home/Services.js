import React from 'react'

export default function Services() {
  return (
    <div className='mt-40 mb-10'>
        <h1 className="font-medium text-sm leading-7 uppercase flex justify-center font-['Poppins'] text-zinc-600">Category </h1>
        <h1 className="mt-4 flex justify-center font-['Volkhov'] font-bold text-4xl leading-7 text-blue-900">We Offer Best Services</h1>
        <div className='flex justify-evenly mt-20'>
            <div className='text-center shadow-sm rounded'>
              <img className='mx-auto ' src='Group 48.png'/>
              <div className='mt-5'>
                <h1 className='p-1 font-sans text-lg font-semibold text-blue-900'>Calculated Weather </h1>
                <div className='w-56'>
                  <p className="p-2 font-['Poppins'] text-zinc-600 break-words">Built Wicket longer admire do barton vanity itself do in it.</p>
                </div>
              </div>
            </div>
            <div className='text-center shadow-sm rounded'>
              <img className='mx-auto' src='Group 49.png'/>
              <div className='mt-7'>
                <h1 className='p-1 font-sans text-lg font-semibold text-blue-900'>Customizations </h1>
                <div className='w-56'>
                <p className="p-2 font-['Poppins'] text-zinc-600 break-words">We deliver outsourced aviation services for military customers</p>
                </div>
              </div>
            </div>
            <div className='text-center shadow-sm rounded'>
              <img className='mx-auto' src='Group 50.png'/>
              <div className='mt-5'>
                <h1 className='p-1 font-sans text-lg font-semibold text-blue-900'>Local Events </h1>
                <div className='w-56'>
                <p className="p-2 font-['Poppins'] text-zinc-600 break-words">Built Wicket longer admire do barton vanity itself do in it.</p>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}
