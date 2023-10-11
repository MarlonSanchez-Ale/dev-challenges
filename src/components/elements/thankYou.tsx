import { Typography, Button } from "@material-tailwind/react";

interface Props {
	handleReturn: () => void
}

export const ThankYou = ({handleReturn} : Props) => {
	return (
		<section className="flex flex-col justify-center items-center w-full gap-10 py-[36px]">
			<figure className="w-[60px] h-[60px]">
				<img
					src="./assets/images/icon-thank-you.svg"
					alt="Form compleated, thank you!"
				/>
			</figure>

			<div className="flex flex-col gap-1 text-center">
				<Typography variant="h2" color="white">
					Thank you
				</Typography>
				<Typography className=" font-light text-gray-300">
					We hope you have using our platform. If you ever need
					support, please feel free to email us at
					support@loregaming.com
				</Typography>
			</div>
			<div className="grid place-items-center">
				<Button className="bg-blue-500/20 shadow-lg hover:bg-blue-500/10" onClick={handleReturn}>Start Again</Button>
			</div>
		</section>
	);
};