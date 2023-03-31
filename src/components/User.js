import React from 'react'

export default function User() {
    //<input className='mr-64 border min-w-full'></input>
    return (
        <div className='p-4 w-1/2  max-h-48 mx-auto
         bg-white rounded-xl shadow-lg flex 
        '>
            <div className='space-y-2 w-full h-full'>
                <p className='font-bold md:text-left'>Username</p>
                <input className='border w-full'></input>
                <p className='font-bold md:text-left'>Age (Years)</p>
                <input className=' border min-w-full'></input>
                <button className='bg-violet-800 text-slate-50
                w-30 border-solid border-violet-400 border-2
                hover:opacity-80 ease-in-out duration-300'>Add User</button>
            </div>
        </div>
    )
}
