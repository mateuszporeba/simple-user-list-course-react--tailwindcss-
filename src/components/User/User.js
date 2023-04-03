import React, {useState} from 'react'
import BtnAddUser from './btnAddUser.js';
export default function User(props) {

    const [enteredUserName, setEnteredUserName] = useState('');
    const [enteredUserAge, setEnteredUserAge] = useState('');

    const SubmitFormHandler = () => {
        props.onAddUser(enteredUserName,enteredUserAge);
    }

    return (
        <form onSubmit={SubmitFormHandler}>
            <div className='p-4 w-1/2 max-w-xl  max-h-48 mx-auto
         bg-white rounded-xl shadow-lg flex '>
                <div className='space-y-2 w-full h-full'>
                    <p className='font-bold md:text-left'>Username</p>
                    <input onChange={setEnteredUserName} className='border w-full'></input>
                    <p className='font-bold md:text-left'>Age (Years)</p>
                    <input onChange={setEnteredUserAge} className=' border min-w-full'></input>
                    <BtnAddUser type="submit" />
                </div>
            </div>
        </form>
    )
}
