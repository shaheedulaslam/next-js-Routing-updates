import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '@/redux/features/auth-slice'
import { AppDispatch, useAppSelector } from '@/redux/store'
import { useRouter } from 'next/router'

export default function Home() {
const username = useAppSelector((state)=>state.authReducer.value.username)
const router = useRouter()

 const dispatch = useDispatch<AppDispatch>()

    const onClickLogout = ()=>{
        dispatch(logout())
        router.push('/')
      }
  return (
    <div>
    <h1 className='text-3xl'>Hi..,</h1>
    <p className='text-xl'>I'm the index page</p>
    <p>username:{username}</p>
    <button type='submit' className='border-2 rounded-xl w-36 border-red-600 text-red-600' onClick={onClickLogout}>Logout</button>
    </div>
  )
}
