import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

type HeaderProps = {
    children: React.ReactNode
}

const Header = ({ children }: HeaderProps) => {
    return (
        <div className='Header'>
            <Link href='/' className='md:flex-1'>
                <Image
                    src="/assets/icons/logo.svg"
                    alt='logo'
                    width={120}
                    height={32}
                    className='block md:block'
                />
                <Image
                    src="/assets/icons/logo-icon.svg"
                    alt='logo'
                    width={120}
                    height={32}
                    className='hidden md:hidden'
                />
            </Link>
            {children}
        </div>

    )
}

export default Header