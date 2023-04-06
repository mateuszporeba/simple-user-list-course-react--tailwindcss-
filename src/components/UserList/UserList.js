import React from 'react'
import UserCard from './UserCard.js'

export default function UserList(props) {


    return (
        <div className='bg-white flex flex-col min-h-fit max-h-full max-w-xl min-w-[22rem] p-4 w-1/2   mx-auto space-y-1  rounded-xl shadow-lg mt-8'>
            {props.users.map(u => (
                <UserCard
                    key={u.id}
                    name={u.name}
                    age={u.age}
                >
                </UserCard>
            ))}
        </div>
    )
}
