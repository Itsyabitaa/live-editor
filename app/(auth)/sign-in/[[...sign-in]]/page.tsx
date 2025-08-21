import React from 'react'
import { SignIn } from '@clerk/nextjs'

const SignedInPage = () => {
    return (
        <main className="auth-page">
            <SignIn />
        </main>
    )
}

export default SignedInPage