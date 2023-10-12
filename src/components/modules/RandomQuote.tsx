import { Typography, Chip } from '@material-tailwind/react'
import { QuoteRandom } from '../../interfaces/QuoteRandom'
import { Alert, Spinner } from "@material-tailwind/react";
import { AiFillAlert } from "react-icons/ai";
interface Props {
    quote?: QuoteRandom,
    error: string
}

export default function RandomQuote({ quote, error }: Props) {

    return (
        <>
            {quote && (
                <div className="DivRandomQuote flex flex-col justify-center text-center gap-5 rounded-lg shadow-lg sm:p-5 lg:p-20">
                    <div className='flex flex-col justify-center gap-3'>
                        <Typography variant="h5" className='text-center' color='white'>{quote.author}</Typography>
                        <div className='flex flex-row justify-center gap-5'>
                            <Chip variant="outlined" value={quote.tags[0]} color='blue' />
                            <Chip variant="outlined" value={quote.authorSlug} color='blue' />
                        </div>
                    </div>

                    <div className='w-80'>
                        <Typography variant='paragraph' className='text-gray-300'>"{quote.content}"</Typography>
                    </div>
                </div>
            )}
            {!quote && (
                <div className='grid place-items-center p-10'>
                    <Spinner className="h-16 w-16 text-blue-700" />
                </div>
            )}
            {error && (
                <div className='grid place-items-center p-10'>
                    <Alert
                        icon={<AiFillAlert />}
                        className="rounded-none border-l-4 border-[#be7878] bg-red-300 font-medium text-[#2ec946]"
                    >
                        A simple alert for showing message.
                    </Alert>
                </div>
            )}
        </>
    )
}
