import React from 'react'

export default function User() {

    //flex items-center w-96 h-32 mt-32 bg-white shadow rounded-lg 
    return (
        <div className='p-4 max-w-64 max-h-48 mx-auto
         bg-white rounded-xl shadow-lg flex 
        '>
            <div className='space-y-2'>
                <p className='font-bold md:text-left'>Username</p>
                <input className='mr-64 border min-w-full'></input>
                <p className='font-bold md:text-left'>Age (Years)</p>
                <input className='mr-64 border min-w-full'></input>
                <button className='bg-violet-800 text-slate-50
                w-1/5 border-solid border-violet-400 border-2'>Add User</button>
            </div>
        </div>
    )
}
