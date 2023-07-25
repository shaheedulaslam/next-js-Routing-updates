import { login } from '@/redux/features/auth-slice'
import { AppDispatch } from '@/redux/store'
import React,{useState} from 'react'
import { useDispatch } from 'react-redux'

export default function Login() {
    const [username,setUserName] = useState('')

    const dispatch = useDispatch<AppDispatch>()
    const onClickLogin = ()=>{
        dispatch(login(username))
    }

  return (
    <>
    <h1 className='text-xl mb-4'>Login here</h1>
    <input type='text' className='text-black h-11 rounded-xl' placeholder='username' value={username} onChange={(e)=>setUserName(e.target.value)}/>
    <button type='submit' className='border-2 mt-4 rounded-xl w-36' onClick={onClickLogin}>Login</button>
    </>
  )
}
