import React from 'react'

export default function Modal(props) {

    const modalContent = props.errorContent;

    return (
        <div>
            <div className='blur-md opacity-60 bg-slate-800 absolute left-0 top-0 h-screen w-screen' onClick={props.onClick}/>
            <div className='absolute top-[25%]  left-0 right-0 mx-auto
            min-w-[22rem] max-w-xl h-[10rem]'>
                <div className='bg-violet-900 bg- rounded-t-2xl'>
                    <p className='text-center p-4 text-4xl'>Invalid input</p>
                </div>
                <div className='bg-white rounded-b-2xl h-[10rem] p-6 text-left text-lg'>
                    <p>{props.errorContent} {modalContent}</p>
                    <button onClick={props.onClick} className='bg-violet-800 text-slate-50
                w-20 min-w-fit border-solid border-violet-400 border-2
                hover:opacity-80 ease-in-out duration-300 absolute left-[83%] top-[115%]'>Okay</button>
                </div>
            </div>
            

        </div>
    )
}
