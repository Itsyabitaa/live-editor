import React from 'react'
import { Editor } from '@/components/editor/Editor'
import Header from '@/components/Header'
import { SignedIn, SignedOut, SignUpButton, SignInButton, UserButton } from '@clerk/nextjs'
const DocumentPage = () => {
    return (
        <>
            <Header>
                <div className='flex w-fit items-center justify-center gap-2'>
                    <p className='document-title'>static tytle</p>
                </div>
                <SignedOut>
                    <SignInButton />
                    <SignUpButton>
                        <button className="bg-[#6c47ff] text-ceramic-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
                            Sign Up
                        </button>
                    </SignUpButton>
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