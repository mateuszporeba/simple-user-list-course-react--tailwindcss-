import React from 'react'
import uuid from 'react-uuid';

import UserCard from './UserCard.js'

export default function UserList() {

  return (
    <div className='bg-white flex flex-col min-h-fit p-4 w-1/2 max-w-xl  max-h-full mx-auto space-y-1  rounded-xl shadow-lg mt-8'>

    <UserCard id={uuid()} name={'Temp Name'} age={12}/>
    <UserCard id={uuid()} name={'Temp Name'} age={12}/>
    <UserCard id={uuid()} name={'Temp Name'} age={12}/>
  </div>
  )
}
