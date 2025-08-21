import React from 'react'
import { Editor } from '@/components/editor/Editor'
import Header from '@/components/Header'
import { SignedIn, SignedOut,  SignInButton, UserButton } from '@clerk/nextjs'
const DocumentPage = () => {
    return (
        <>
            <Header>
                <div className='flex w-fit items-center justify-center gap-2'>
                    <p className='document-title'>static tytle</p>
                </div>
                <SignedOut>
                    <SignInButton />
                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn>
            </Header>
            <Editor />
        </>
    )
}

export default DocumentPage