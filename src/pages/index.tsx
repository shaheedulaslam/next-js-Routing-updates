import Login from '@/components/login'
import {useAppSelector } from '@/redux/store'
import { Inter } from 'next/font/google'
import { useRouter } from 'next/router'




const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter()
const isAuth = useAppSelector((state)=> state.authReducer.value.isAuth)
if(isAuth){
  router.push('/home')
}
  return (
    <main
      className={`flex min-h-full flex-col items-center justify-between p-24 ${inter.className}`}>
      <Login/>
     </main>
  )
}


