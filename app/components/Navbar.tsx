import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { auth, signIn, signOut } from "@/auth"
const Navbar = async () => {
    const session = await auth();
    return <header className='px-5 py-3 bg-white shadow-sm font-work-sans'>
        <nav className='flex justify-between items-center'>
            <Link href="/">
                <Image src="/MainLogo.png" width={144} height={10} alt='logo' />
            </Link>
            <div className='flex items-center gap-5'>
                {
                    session && session?.user ? (<>
                        <Link href='/startup/create' className='text-black'>
                            <span>Create</span>
                        </Link>
                        <button onClick={async () => { await signOut() }} className='text-red-500'>LogOut</button>
                        <Link href={`/user/${session?.user?.id}`} ><span>{session?.user?.name}</span></Link>

                    </>) : <>
                        {/* Provide a github */}
                        <button onClick={async () => { await signIn('github') }} className='text-red-500'>LogIn</button>
                    </>
                }
            </div>
        </nav>
    </header>
}

export default Navbar


// <Image src={session?.user?.image} alt='user-image' width={30} height={30} className='rounded-full' />