import { currentUser } from '@clerk/nextjs/server'
import { UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import React from 'react';


const Navbar = async () => {
    const user = await currentUser()
    return (
        <nav className="bg-gray-800 p-4 ">
            <div className="container mx-auto flex justify-between items-center px-4">
                <Link href="/" className="text-white font-semibold text-2xl">
                    Sanformation
                </Link>
                <ul className="flex space-x-4">
                    <li>
                        <Link href="/" className="text-white hover:text-gray-400">Home</Link>
                    </li>
                    <li>
                        <Link href="/about" className="text-white hover:text-gray-400">About</Link>
                    </li>
                    <li>
                        <Link href="/ncit" className="text-white hover:text-gray-400">NCIT</Link>
                    </li>
                </ul>
                {user ?
                    <div className='flex items-center gap-3'>
                        <div className=' flex flex-col item'>
                            {user.fullName}
                            <span className='text-gray-600 text-[14px]'>
                                @{user.username} • {user.username.length}
                            </span>
                        </div>
                        <UserButton />

                    </div>
                    :
                    <div className="flex items-center space-x-4">
                        <Link href="/sign-in" className="text-white hover:text-gray-400">Login/Sign Up</Link>
                    </div>
                }
            </div>
        </nav>
    )
};

export default Navbar;
