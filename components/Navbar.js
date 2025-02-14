import { UserButton, UserProfile } from '@clerk/nextjs';
import Link from 'next/link';
import React from 'react';

const Navbar = ({ user }) => {
    return (
        <nav className="bg-gray-800 p-4 flex justify-between items-center">
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
            {true ? <UserButton /> : <div className="flex items-center space-x-4">
                <Link href="/login" className="text-white hover:text-gray-400">Login/Sign Up</Link>
            </div>
            }

        </nav>
    )
};

export default Navbar;
