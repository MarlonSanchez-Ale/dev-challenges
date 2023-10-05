import React from 'react'
import { Typography, Chip } from '@material-tailwind/react'
import { url } from 'inspector'

export default function RandomQuote() {

    const background: string = '/images/bg-image-random-quote.svg'

    return (
            <div className="DivRandomQuote flex flex-col justify-center gap-5 p-20 rounded-lg shadow-lg">
                <div className='flex flex-col justify-center gap-3'>
                    <Typography variant="h5" className='text-center' color='white'>Material Tailwind</Typography>
                    <div className='flex flex-row justify-center gap-5'>
                        <Chip variant="outlined" value="chip outlined" color='blue' />
                        <Chip variant="outlined" value="chip outlined" color='blue' />
                    </div>
                </div>

                <Typography className='text-gray-400 font-semibold'>"Learn from yesterday,  live for today, hope for tomorrow."</Typography>
            </div>
    )
}
