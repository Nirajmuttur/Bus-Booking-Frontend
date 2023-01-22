import React from 'react'

export default function Bus() {
  return (
    <div className='grid grid-cols-2'>
        <div className='col-span-1'>
            <div className='p-10 mx-auto my-auto'>
                <h1 className="text-left text-2xl font-semibold font-['Poppins'] text-blue-900 mb-5">Your Search Results</h1>
            
                <div className="flex justify-between ">
                    <div className="xl:w-96">
                        <div className="input-group mb-4 lg:mr-2">
                            <input type="search" className="w-full min-w-0 block px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-900 focus:outline-none" placeholder="Start" aria-label="Search" aria-describedby="button-addon2"/>
                        
                        </div>
                    </div>
                    <div className="xl:w-96">
                        <div className="input-group mb-4 lg:ml-2">
                            <input type="search" className="w-full min-w-0 block px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-900 focus:outline-none" placeholder="Destination" aria-label="Search" aria-describedby="button-addon2"/>
                        
                        </div>
                    </div>
                    
                </div>
                <div className="mb-3 xl:w-96 " >
                    <input type="date"
                        className=" block w-4/5 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        placeholder='Select Date' />
                </div>
                <div className='mt-5'>
                   <button className="btn px-6 py-2.5 bg-yellow-400 text-white font-medium text-xs leading-tight rounded shadow-md hover:bg-yellow-500 hover:shadow-lg active:shadow-lg transition duration-150 ease-in-out flex items-center" type="button" id="button-addon2">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" className="w-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                        </svg>
                        Search For Bus
                    </button>
                </div>
            </div>
        </div>
        <div className='col-span-1'>
            <div className='p-10 mx-auto my-auto'>
                <h1 className="text-left text-2xl font-semibold font-['Poppins'] mb-5">Available Buses</h1>
                <hr class="h-px my-7 bg-gray-300 border-0 "></hr>
            </div>
        </div>
    </div>
  )
}
