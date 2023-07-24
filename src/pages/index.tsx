import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div>
      <h1 className='text-3xl'>Hi..,</h1>
      <p className='text-xl'>I'm the index page</p>
      </div>
    </main>
  )
}
