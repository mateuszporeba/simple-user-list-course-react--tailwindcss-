import React from 'react'

export default function User() {

    //flex items-center w-96 h-32 mt-32 bg-white shadow rounded-lg 
    return (
        <div className='p-16 max-w-lg max-h-64 mx-auto
         bg-white rounded-xl shadow-lg flex 
         items-center space-x-4 '>
            <div className=' bg-slate-600'>
                <p className='font-bold'>Username</p>
            </div>
        </div>
    )
}
