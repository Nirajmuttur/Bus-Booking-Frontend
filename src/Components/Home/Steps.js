import React from 'react'

export default function Steps() {
  return (
    <div className='grid grid-cols-2 mt-20 ml-28'>
        <div className='p-10 col-span-1'>
            <span className="font-medium text-sm leading-7 font-['Poppins'] text-zinc-600">Easy and Fast</span>
            <div className='w-5/6'>
                <p className="font-['Volkhov'] font-bold text-4xl leading-10 text-blue-900 break-words">Book Your Next Trip In 3 Easy Steps</p>
            </div>
            <div className='mt-8 flex justify-evenly items-center'>
                <div>
                    <img src='Group 7.png' width={40} height={30}/>
                </div>
                <div className='ml-3'>
                    <span className="font-semibold font-['Poppins'] text-gray-600">Choose Destination</span>
                    <p className="break-words font-['Poppins'] text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. </p>
                </div>
            </div>
            <div className='mt-5 flex justify-evenly items-center'>
                <div>
                    <img src='Group 12.png' width={40} height={30}/>
                </div>
                <div className='ml-3'>
                    <span className="font-semibold font-['Poppins'] text-gray-600">Make Payment</span>
                    <p className="break-words text-gray-400 font-['Poppins']">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. </p>
                </div>
            </div>
            <div className='mt-5 flex justify-evenly items-center'>
                <div>
                    <img src='Group 11.png' width={40} height={30}/>
                </div>
                <div className='ml-3'>
                    <span className="font-semibold font-['Poppins'] text-gray-600">Reach Airport on Selected Date</span>
                    <p className="break-words font-['Poppins'] text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. </p>
                </div>
            </div>
        </div>
        <div className='p-28 col-span-1'>
            <div className='rounded-3xl shadow-slate-300 shadow '>
                <img className='mx-auto my-auto' src='Rectangle 17.jpg'/>
                <p className="p-5 ml-10 font-['Poppins'] text-gray-600">Trip To Jaipur</p>
            </div>
            
        </div>
    </div>
  )
}
