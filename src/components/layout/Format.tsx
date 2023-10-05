import React from 'react'
import NavBar from '../elements/NavBar'

interface Props {
    children: React.ReactElement
}

export default function Format({ children }: Props) {
    return (
        <div className='w-full'>
            <NavBar />
            <main>{children}</main>
        </div>
    )
}
