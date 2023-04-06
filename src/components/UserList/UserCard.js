import React from 'react'

export default function Card(props) {
    const name = props.name;
    const age = props.age;
    return (
        <div className=' border border-solid'>
            <p className='font-bold'>
                {name} <span className='font-normal'>( </span>
                {age} <span className='font-normal'> years old )</span>
            </p>

        </div>
    )
}
