import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBrands } from "@fortawesome/free-solid-svg-icons";
import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <>
    <hr class="h-px my-8 bg-gray-200 border-0 "></hr>
    <div className='flex justify-around mt-14'>
        <div className='col-span-1 p-3'>
          <h1 className="text-3xl font-['Poppins'] font-semibold leading-10">Jadoo.</h1>
          <p className="mt-4 break-words w-52 text-sm text-zinc-600 font-['Poppins'] leading-5 font-normal">Book your trip in minute, get full Control for much longer.</p>
        </div>
        <div className='col-span-1 p-3'>
          <h1 className="text-xl font-['Poppins'] font-bold leading-10">Company</h1>
          <ul className='mt-4'>
            <li className="p-1 break-words w-52 text-sm text-zinc-600 font-['Poppins'] leading-5 font-normal">
              <Link to={'about'}>About</Link>
            </li>
            <li className="p-1 break-words w-52 text-sm text-zinc-600 font-['Poppins'] leading-5 font-normal">
              <Link to={'carrers'}>Carrers</Link>
            </li>
            <li className="p-1 break-words w-52 text-sm text-zinc-600 font-['Poppins'] leading-5 font-normal">
              <Link to={'mobile'}>Mobile</Link>
            </li>
          </ul>
        </div>
        <div className='col-span-1 p-3'>
        <h1 className="text-xl font-['Poppins'] font-bold leading-10">Contact</h1>
          <ul className='mt-4'>
            <li className="p-1 break-words w-52 text-sm text-zinc-600 font-['Poppins'] leading-5 font-normal">
              <Link to={'help'}>Help/FAQ</Link>
            </li>
            <li className="p-1 break-words w-52 text-sm text-zinc-600 font-['Poppins'] leading-5 font-normal">
              <Link to={'press'}>Press</Link>
            </li>
            <li className="p-1 break-words w-52 text-sm text-zinc-600 font-['Poppins'] leading-5 font-normal">
              <Link to={'affilates'}>Affilates</Link>
            </li>
          </ul>
        </div>
        <div className='col-span-1 p-3'>
        <h1 className="text-xl font-['Poppins'] font-bold leading-10">More</h1>
          <ul className='mt-4'>
            <li className="p-1 break-words w-52 text-sm text-zinc-600 font-['Poppins'] leading-5 font-normal">
              <Link to={'about'}>BusFees</Link>
            </li>
            <li className="p-1 break-words w-52 text-sm text-zinc-600 font-['Poppins'] leading-5 font-normal">
              <Link to={'carrers'}>Bus</Link>
            </li>
            <li className="p-1 break-words w-52 text-sm text-zinc-600 font-['Poppins'] leading-5 font-normal">
              <Link to={'mobile'}>Low Fair Tips</Link>
            </li>
          </ul>
        </div>
        <div className='col-span-1 p-3'>
          <div className='flex justify-around'>
            <svg xmlns="http://www.w3.org/2000/svg" height={25} width={25} viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" height={25} width={25} viewBox="0 0 320 512"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" height={25} width={25} viewBox="0 0 512 512"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/></svg>
          </div>
          <h1 className="mt-4 text-base text-zinc-600 font-['Poppins'] leading-5 font-normal">Discover Our App</h1>
          <div className='flex justify-evenly mt-5 items-center bg-black rounded-full'>
            <svg xmlns="http://www.w3.org/2000/svg" className='ml-5' fill='white' height={25} width={25} viewBox="0 0 512 512"><path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/></svg>
            <p className='break-words w-24 text-sm font-thin ml-2 text-white'>Get it on Playstore</p>
            {/* <svg xmlns="http://www.w3.org/2000/svg" height={25} width={25} viewBox="0 0 448 512"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM127 384.5c-5.5 9.6-17.8 12.8-27.3 7.3-9.6-5.5-12.8-17.8-7.3-27.3l14.3-24.7c16.1-4.9 29.3-1.1 39.6 11.4L127 384.5zm138.9-53.9H84c-11 0-20-9-20-20s9-20 20-20h51l65.4-113.2-20.5-35.4c-5.5-9.6-2.2-21.8 7.3-27.3 9.6-5.5 21.8-2.2 27.3 7.3l8.9 15.4 8.9-15.4c5.5-9.6 17.8-12.8 27.3-7.3 9.6 5.5 12.8 17.8 7.3 27.3l-85.8 148.6h62.1c20.2 0 31.5 23.7 22.7 40zm98.1 0h-29l19.6 33.9c5.5 9.6 2.2 21.8-7.3 27.3-9.6 5.5-21.8 2.2-27.3-7.3-32.9-56.9-57.5-99.7-74-128.1-16.7-29-4.8-58 7.1-67.8 13.1 22.7 32.7 56.7 58.9 102h52c11 0 20 9 20 20 0 11.1-9 20-20 20z"/></svg> */}
          </div>
          <div className='flex justify-evenly mt-5 items-center bg-black rounded-full'>
            <svg xmlns="http://www.w3.org/2000/svg" className='ml-5' fill='white' height={25} width={25} viewBox="0 0 448 512"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM127 384.5c-5.5 9.6-17.8 12.8-27.3 7.3-9.6-5.5-12.8-17.8-7.3-27.3l14.3-24.7c16.1-4.9 29.3-1.1 39.6 11.4L127 384.5zm138.9-53.9H84c-11 0-20-9-20-20s9-20 20-20h51l65.4-113.2-20.5-35.4c-5.5-9.6-2.2-21.8 7.3-27.3 9.6-5.5 21.8-2.2 27.3 7.3l8.9 15.4 8.9-15.4c5.5-9.6 17.8-12.8 27.3-7.3 9.6 5.5 12.8 17.8 7.3 27.3l-85.8 148.6h62.1c20.2 0 31.5 23.7 22.7 40zm98.1 0h-29l19.6 33.9c5.5 9.6 2.2 21.8-7.3 27.3-9.6 5.5-21.8 2.2-27.3-7.3-32.9-56.9-57.5-99.7-74-128.1-16.7-29-4.8-58 7.1-67.8 13.1 22.7 32.7 56.7 58.9 102h52c11 0 20 9 20 20 0 11.1-9 20-20 20z"/></svg>
            <p className='break-words w-24 text-sm font-thin ml-2 text-white'>Get it on Appstore</p>
          </div>
        </div>
    </div>
    </>
  )
}
