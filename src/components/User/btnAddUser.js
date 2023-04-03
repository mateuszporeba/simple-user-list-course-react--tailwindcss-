import React from 'react'

export default function btnAddUser(props) {

    return (
        <div>
            <button type={props.type} onClick={props.onClick}
                className='bg-violet-800 text-slate-50
                w-1/3 border-solid border-violet-400 border-2
                hover:opacity-80 ease-in-out duration-300'>Add User</button>
        </div>
    )
}
