import React from 'react'

function Highlights({stats}) {
  return (
    <div className='flex flex-col items-center justify-start p-2 transition-transform duration-300 ease-in-out scale-100 cursor-pointer bg-slate-600 text-slate-200 text-transform hover:scale-110'>
        <h2 className='mt-2 text-sm'>{stats.title}</h2>
        <div className='mt-2'>
            <span className='text-2xl font-bold'>{stats.value}</span>
            <span className='text-2xl'>{stats.unit}</span>
        </div>

        {
          stats.direction ? (<div className='flex mt-2'>
            
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
          </svg>
          <div className='ms-2 text-slate-200'>{stats.direction}</div>

         </div>
         ): null
        }

        {
          stats.title == "Humidity" ? (
            <div className="w-full mt-4 bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
            <div className="bg-blue-600 h-1.5 rounded-full dark:bg-blue-500" style={{width: `${stats.value}%`}}></div>
           </div>
          ): null
          
        }
          
    </div>
  )
}

export default Highlights