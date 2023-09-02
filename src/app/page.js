import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
   <div className=''>
   <Link href="/login" className='text-blue-500'>Login </Link>
   <Link href="/dashboard" className='text-rose-500'>Dashboard </Link>
   </div>
  )
}
