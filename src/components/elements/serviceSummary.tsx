import { UserServiceConfiguration } from 'AppTypes';
import { calculatePrice } from '../../utils/calculatePrice';
import { Button } from './button';
import { Typography } from '@material-tailwind/react';

interface ServiceSummaryProps {
	userServiceConfiguration: UserServiceConfiguration;
}

export const ServiceSummary = ({
	userServiceConfiguration,
}: ServiceSummaryProps) => {
	const { monthly, addons, selectedPlan } = userServiceConfiguration;

	// for some reason needed to do this work arround bc typescript was crying and bug is not fixed apparently
	const totalPrice = (addons as any[]).reduce((acc: number, addon) => {
		return acc + calculatePrice(addon.monthlyPrice, monthly);
	}, calculatePrice(selectedPlan?.monthlyPrice ?? 0, monthly));

	return (
		<section className="flex flex-col gap-4 w-full">
			<div className="flex flex-col gap-1">
				<Typography variant="h2" color="white">
					Finishing up
				</Typography>
				<Typography className=" font-light text-gray-300">
					Double-check everyghing looks OK before confirming.
				</Typography>
			</div>
			<ul className="flex flex-col gap-2 px-4 py-5 bg-neutral-magnolia rounded-lg">
				<li className="border-b border-neutral-light-gray pb-2 ">
					<div className="flex flex-col gap-3">
						<h3 className='text-gray-200'>
							{selectedPlan?.name} (
							{monthly ? 'Monthly' : 'Yearly'})
						</h3>
						<span className="inline-flex justify-between">
							<Button
								type="ghost"
								size="sm"
								className="hover:text-primary-purplish-blue hover:underline bg-blue-gray-500 p-1 hover:bg-blue-gray-600"
							>
								Change
							</Button>
							<span className="text-gray-400 font-bold">
								$
								{calculatePrice(
									selectedPlan?.monthlyPrice ?? 0,
									monthly
								).toLocaleString()}
								/ {monthly ? 'mo' : 'yr'}
							</span>
						</span>
					</div>
				</li>
				{addons.map((addon) => (
					<li
						className="inline-flex justify-between"
						key={addon.name}
					>
						<p className='text-gray-400'>{addon.name}</p>
						<span className='text-gray-400'>
							+$
							{calculatePrice(
								addon.monthlyPrice,
								monthly
							).toLocaleString()}
							/{monthly ? 'mo' : 'yr'}
						</span>
					</li>
				))}
			</ul>
			<span className="flex justify-between px-4">
				<p className='text-gray-300'>Total (per {monthly ? 'month' : 'year'}) </p>
				<span className="font-bold text-lg text-gray-300">
					+${totalPrice.toLocaleString()}/{monthly ? 'mo' : 'yr'}
				</span>
			</span>
		</section>
	);
};