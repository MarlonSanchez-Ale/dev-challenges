import { Typography } from '@material-tailwind/react'
import { BiBot } from 'react-icons/bi'

export default function Footer() {
    return (
        <footer className="w-full p-8 bg-gray-100">
            <div className='grid place-items-center gap-5'>
                <div className='bg-gray-200 p-5 rounded-full shadow-md'>
                    <BiBot size={30} color='gray' />
                </div>
                <div className='flex flex-col gap-3 text-center'>
                    <Typography variant="h6" color="blue-gray">
                        Developed by Marlon Sánchez
                    </Typography>
                    <Typography variant="small" color='gray' className="font-normal">
                        The challenge is to create a small random quote application that requires you to work with Typescript.
                    </Typography>
                </div>
            </div>
        </footer>
    )
}
