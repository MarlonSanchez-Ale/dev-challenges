import { Plan } from 'AppTypes';
import { Card } from './card';
import clsx from 'clsx';
import { calculatePrice } from '../../utils/calculatePrice';
import { Typography, Switch } from '@material-tailwind/react';


const activeClasses =
	'border border-primary-purplish-blue bg-neutral-magnolia falopa';

const plans: Plan[] = [
	{
		name: 'Arcade',
		icon: 'icon-arcade.svg',
		monthlyPrice: 9,
	},
	{
		name: 'Advanced',
		icon: 'icon-advanced.svg',
		monthlyPrice: 12,
	},
	{
		name: 'Pro',
		icon: 'icon-pro.svg',
		monthlyPrice: 15,
	},
];

interface SelectPlanProps {
	selectedPlan: Plan | null;
	monthly: boolean;
	updateSelectedPlan: (selectedPlan: Plan) => void;
	updateIsMonthly: (isMonthly: boolean) => void;
}

export const SelectPlan = ({
	selectedPlan,
	monthly,
	updateSelectedPlan,
	updateIsMonthly,
}: SelectPlanProps) => {
	return (
		<section className="flex flex-col gap-5 ">
			<div className="flex flex-col gap-1">
				<Typography variant="h2" color="white">
					Select your plan
				</Typography>
				<Typography className=" font-light text-gray-300">
					You have the option of monthly or yearly billing
				</Typography>
			</div>

			<ul className="flex flex-col gap-3 lg:flex-row">
				{plans.map((plan) => (
					<li key={plan.name} className="lg:w-full ">
						<Card
							className={clsx(
								'p-4 flex w-full shadow-lg bg-blue-800/20 sm:gap-5 lg:flex-col lg:gap-8 hover:bg-blue-800/30  cursor-pointer',
								plan.name === selectedPlan?.name
									? activeClasses
									: 'border border-gray-100'
							)}
							onClick={() => updateSelectedPlan(plan)}
						>
							<figure className="w-10 h-10">
								<img
									src={`./assets/images/${plan.icon}`}
									alt=""
								/>
							</figure>
							<div className="">
								<h3 className="leading-5 text-gray-300">{plan.name}</h3>
								<p className='text-gray-500'>
									$
									{calculatePrice(
										plan.monthlyPrice,
										monthly
									).toLocaleString()}
									/{monthly ? 'mo' : 'yr'}
								</p>

								<p
									className={clsx(
										'text-gray-300',
										monthly && 'hidden'
									)}
								>
									2 months free
								</p>
							</div>
						</Card>
					</li>
				))}
			</ul>
			<div className="bg-blue-500/20 w-full rounded-lg mt-8  p-4">
				<label className="flex relative items-center cursor-pointer mx-auto w-min">
					<span
						className={clsx(
							`mr-4 font-medium`,
							monthly ? 'text-gray-200' : 'text-gray-500'
						)}
					>
						Monthly
					</span>
					<Switch
						id="custom-switch-component"
						ripple={false}
						className="h-full w-full checked:bg-[#586e94]"
						onChange={() => updateIsMonthly(!monthly)}
						containerProps={{
							className: "w-11 h-6",
						}}
						circleProps={{
							className: "before:hidden left-0.5 border-none",
						}} crossOrigin={undefined}					/>

					<span
						className={clsx(
							`ml-4 font-medium`,
							!monthly ? 'text-gray-200' : 'text-gray-500'
						)}
					>
						Yearly
					</span>
				</label>
			</div>
		</section>
	);
};
