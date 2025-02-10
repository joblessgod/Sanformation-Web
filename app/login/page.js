import LoginWithGoogle from '@/components/LetSignIn/Google'
import React from 'react'

const LoginPage = () => {
    return (
        <>
            <div className="flex items-center justify-center h-screen dark:bg-gray-800">
                <LoginWithGoogle />
            </div>
        </>
    )
}

export default LoginPage