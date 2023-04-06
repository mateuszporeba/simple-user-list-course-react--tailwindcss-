import React, { useState } from 'react'
import BtnAddUser from './BtnAddUser.js';
export default function User(props) {

    const [enteredUserName, setEnteredUserName] = useState('');
    const [enteredUserAge, setEnteredUserAge] = useState('');
    

    const formSubmitHandler = event => {
        event.preventDefault();
        if (enteredUserName.trim().length === 0 && enteredUserAge.trim().length === 0) {
            console.log('both');
            props.onErrorInfo('Please enter a valid username and age (non-empty values)');
            props.showModal();
            return;
        }
        if (enteredUserName.trim().length === 0) {
            console.log('name');
            props.onErrorInfo('Please enter a valid username (non-empty values)');
            props.showModal();
            return;
        }
        if (enteredUserAge.trim().length === 0) {
            console.log('age');
            props.onErrorInfo('Please enter a valid age (non-empty values)');
            props.showModal();
            return;
        }

        props.onAddUser(enteredUserName, enteredUserAge);
        console.log('187');
        setEnteredUserName('');
        setEnteredUserAge('');
    }

    const onNameChangeHandler = event => {
        if (event.target.value.length > 25) {
            return;
        }
        setEnteredUserName(event.target.value);
    }
    const onAgeChangeHandler = event => {
        if (event.target.value > 128) {
            setEnteredUserAge('128');
            return;
        }
        setEnteredUserAge(event.target.value);
    }

    return (
        <form onSubmit={formSubmitHandler}>
            <div className='p-4 w-1/2 max-w-xl min-w-[22rem]  max-h-48 mx-auto
         bg-white rounded-xl shadow-lg flex '>
                <div className='space-y-2 w-full h-full'>
                    <p className='font-bold md:text-left'>Username</p>
                    <input type='text' value={enteredUserName} onChange={onNameChangeHandler} className='border w-full'></input>
                    <p className='font-bold md:text-left'>Age (Years)</p>
                    <input type='number' value={enteredUserAge} onChange={onAgeChangeHandler} className=' border w-full'></input>
                    <BtnAddUser type="submit" />
                </div>
            </div>
        </form>
    )
}
