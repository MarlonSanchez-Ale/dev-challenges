import React from 'react'
import {
    Navbar,
    Collapse,
    Typography,
    Button,
    IconButton,
} from "@material-tailwind/react";
import { BiBot } from 'react-icons/bi'

export default function NavBar() {

    const [openNav, setOpenNav] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);

    const navList = (
        <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <a href="/" className="flex items-center">
                    Home
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-light"
            >
                <a href="/qr-code" className="flex items-center">
                    Qr Code
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <a href="/random-quote" className="flex items-center">
                    Random Quote
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <a href="/" className="flex items-center">
                    Personal Portfolio
                </a>
            </Typography>
        </ul>
    );


    return (
        <>
            <Navbar className="sticky top-5 z-10 mt-5 mx-auto max-w-screen-xl bg-white py-2 px-4 ring-2 lg:px-8 lg:py-4">
                <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
                    <div className='flex flex-row gap-3'>
                        <div className='bg-gray-200 p-2 rounded-full shadow-md'>
                            <BiBot size={30} color='gray' />
                        </div>
                        <Typography
                            as="a"
                            href="#"
                            className="mr-4 cursor-pointer mt-3 font-bold"
                        >
                            Marlon Sánchez
                        </Typography>
                    </div>
                    <div className="hidden lg:block">{navList}</div>
                    <Button variant="gradient" size="sm" className="hidden lg:inline-block">
                        <span>Portfolio</span>
                    </Button>
                    <IconButton
                        variant="text"
                        className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                        ripple={false}
                        onClick={() => setOpenNav(!openNav)}
                    >
                        {openNav ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                className="h-6 w-6"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        )}
                    </IconButton>
                </div>
                <Collapse open={openNav}>
                    <div className="container mx-auto">
                        {navList}
                        <Button variant="gradient" size="sm" fullWidth className="mb-2">
                            <span>Portfolio</span>
                        </Button>
                    </div>
                </Collapse>
            </Navbar>
        </>
    )
}
