import {
    Typography,
} from "@material-tailwind/react"
import { BsQrCode, BsQuote } from "react-icons/bs";
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function TemplateHome() {

    const navigate = useNavigate()

    return (
        <motion.div
            className='Box flex flex-col justify-center gap-10 my-48'
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01]
            }}
        >
            <div className='flex flex-col justify-center'>
                <Typography variant="h4" className="mb-2 text-gray-200 text-center" textGradient>
                    My Portfolio DevChallenges
                </Typography>
                <Typography className="font-medium text-gray-500 text-center" textGradient>
                    Try some of my DevChalenge projects
                </Typography>
            </div>

            <div className="grid place-items-center grid-cols-3 gap-10 p-10">
                <div
                    className="flex flex-row justify-between gap-5 w-full bg-white p-5 rounded-lg shadow-lg cursor-pointer hover:bg-gray-100 hover:-translate-y-2"
                    onClick={() => navigate('/qr-code')}
                >
                    <div className="flex flex-col gap-1">
                        <Typography variant="h6" color="blue-gray">
                            QR Code Generator
                        </Typography>
                        <Typography variant="small" color="gray" className="font-normal">
                            The challenge is to create a simple QA quote generator application that requires you to use external library.
                        </Typography>
                    </div>
                    <div className="grid rounded-full bg-gray-200 p-5 max-w-full h-full">
                        <BsQrCode size={20} color="gray" />
                    </div>
                </div>

                <div
                    className="flex flex-row justify-between gap-5 w-full bg-white p-5 rounded-lg shadow-lg cursor-pointer hover:bg-gray-100 hover:-translate-y-2"
                    onClick={() => navigate('/random-quote')}
                >
                    <div className="flex flex-col gap-1">
                        <Typography variant="h6" color="blue-gray">
                            Random Quote
                        </Typography>
                        <Typography variant="small" color="gray" className="font-normal">
                            The challenge is to create a small random quote application that requires you to work with Typescript.
                        </Typography>
                    </div>
                    <div className="grid rounded-full bg-gray-200 p-5 max-w-full h-full">
                        <BsQuote size={20} color="gray" />
                    </div>
                </div>
            </div>

        </motion.div>
    )
}
