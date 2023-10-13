import {
    Typography,
} from "@material-tailwind/react"
import { BsQrCode, BsQuote, BsFillCalendar2WeekFill } from "react-icons/bs";
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Projects } from "../../interfaces/Projects";

export default function TemplateHome() {

    const navigate = useNavigate()

    const InitialState: Projects[] = [
        {
            name: 'QR Code Generator',
            description: 'The challenge is to create a simple QA quote generator application that requires you to use external library.',
            url: '/qr-code',
            icon: <BsQrCode size={20} color="gray" />
        },
        {
            name: 'Random Quote',
            description: 'The challenge is to create a small random quote application that requires you to work with Typescript.',
            url: '/random-quote',
            icon: <BsQuote size={20} color="gray" />
        },
        {
            name: 'Multi-Step Form',
            description: 'The challenge is to create a 3-step registration form with different sections with Typescript.',
            url: '/Multi-Step-Form',
            icon: <BsFillCalendar2WeekFill size={20} color="gray" />
        }
    ]

    return (
        <motion.div
            className='Box flex flex-col justify-center gap-10 sm:my-10 lg:my-20 '
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
            <div className="grid grid-flow gap-8 sm:p-5 lg:p-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

                {InitialState && InitialState.map(({ name, description, url, icon }: Projects, index) => (
                    <div
                        className="flex flex-row justify-center h-36 gap-5 w-full bg-white p-5 rounded-lg shadow-lg cursor-pointer hover:bg-gray-100 hover:-translate-y-2"
                        onClick={() => navigate(url)}
                        key={index}
                    >
                        <div className="flex flex-col gap-1">
                            <Typography variant="h6" color="blue-gray">
                                {name}
                            </Typography>
                            <Typography variant="small" color="gray" className="font-normal">
                                {description}
                            </Typography>
                        </div>
                        <div className="grid place-items-center">
                            <div className="grid rounded-full bg-gray-200 p-5">
                                {icon}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </motion.div>
    )
}
