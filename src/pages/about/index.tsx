import React from 'react'
import { useEffect } from 'react'
import { useGlobalContext } from '@/context/store'

export default function About() {
  const {userId , setUserId , data , setData } = useGlobalContext()
  useEffect(()=>{
    setUserId('2'),
    setData([
      {firstName:'Aslam'},
      {firstName:'dilshad'},
      {firstName:'Naizam'}
    ])
  })

  return (
    <div className='text-center text-2xl'>
        <h1>Hi...</h1>
        <p>I'm about page</p>
        <p>userId: {userId}</p>
        <p>FirstNames:</p>
        {data.map((i,k)=>(
          <p key={k}>{i.firstName}</p>
        ))}
    </div>
  )
}
