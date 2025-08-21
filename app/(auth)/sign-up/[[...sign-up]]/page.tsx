import React from 'react'
import { SignUp } from '@clerk/nextjs'

const SignedUpPage = () => {
    return (
        <main className="auth-page">
            <SignUp />
        </main>
    )
}

export default SignedUpPage