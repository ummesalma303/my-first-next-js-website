"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation';
// import { useRouter } from 'next/router'
import React from 'react'

export default function AboutPage() {
    const router = useRouter();
    const isLoggedIn = true
    const handleNavigate = () =>{
        if (isLoggedIn) {
            router.push('/about/address')
        }else{
            router.push('/') 
        }
    }
  return (
    <div>
      About Page
      <p><Link href='/about/address'>Address</Link></p>
      <button type='button' className='bg-slate-600 text-white px-3 py-2 rounded-lg' onClick={handleNavigate}>click address</button>
    </div>
  )
}
