import { Addon } from 'AppTypes';
import { calculatePrice } from '../../utils/calculatePrice';
import { Card } from './card';
import clsx from 'clsx';
import { Typography, Checkbox } from '@material-tailwind/react';



const addons: Addon[] = [
	{
		name: 'Online service',
		description: 'Access to multiplayer games',
		monthlyPrice: 1,
	},
	{
		name: 'Large storage',
		description: 'Extra 1TB of cloud save',
		monthlyPrice: 2,
	},
	{
		name: 'Customizable profile',
		description: 'Custom theme on your profile',
		monthlyPrice: 2,
	},
];

interface AddonsProps {
	selectedAddons: Addon[];
	monthly: boolean;
	updateAddons: (addon: Addon) => void;
}

export const Addons = ({
	updateAddons,
	monthly,
	selectedAddons,
}: AddonsProps) => {
	return (
		<section className="flex flex-col w-full gap-4">
			<div className="flex flex-col gap-1">
				<Typography variant="h2" color="white">
					Pick add-ons
				</Typography>
				<Typography className=" font-light text-gray-300">
					Add-ons help enhace your gaming experience.
				</Typography>
			</div>

			{addons.map((addon) => (
				<Card
					className={clsx(
						`p-4 flex gap-5 transition-all relative bg-blue-800/20 shadow-lg w-full hover:bg-blue-500/20 cursor-pointer`,
						selectedAddons.includes(addon)
							? 'border border-blue-100'
							: 'border border-blue-400/10'
					)}
					onClick={() => updateAddons(addon)}
					key={addon.name}
				>
					<Checkbox
						color='blue'
						checked={selectedAddons.includes(addon)}
						className=""
						onChange={() => updateAddons(addon)}
						crossOrigin={undefined}
					/>

					<div>
						<Typography className='text-gray-200 font-bold'>{addon.name}</Typography>
						<Typography className='text-gray-400 font-light'>{addon.description}</Typography>
					</div>
					<span className="w-min ml-auto self-center text-gray-400">
						$
						{calculatePrice(
							addon.monthlyPrice,
							monthly
						).toLocaleString()}
						{monthly ? 'mo' : 'yr'}
					</span>
				</Card>
			))}
		</section>
	);
};