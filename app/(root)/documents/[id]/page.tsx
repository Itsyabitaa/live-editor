import React from 'react'
import { Editor } from '@/components/editor/Editor'
import Header from '@/components/Header'
const DocumentPage = () => {
    return (
        <>
            <Header>
                <div className='flex w-fit items-center justify-center gap-2'>
                    <p className='document-title'>static tytle</p>
                </div>
            </Header>
            <Editor />
        </>
    )
}

export default DocumentPage