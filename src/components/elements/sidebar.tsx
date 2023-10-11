import clsx from 'clsx';

interface SidebarProps {
	currentStep: number;
	handleNextStep: (step: number) => void;
}
const steps = [
	{
		step: 1,
		title: 'Your Info',
	},
	{
		step: 2,
		title: 'Select Plan',
	},
	{
		step: 3,
		title: 'Add-ons',
	},
	{
		step: 4,
		title: 'Summary',
	},
];
export const Sidebar = ({ currentStep, handleNextStep }: SidebarProps) => {
	return (
		<aside className="rounded-xl  bg-blue-500/10 shadow-xl lg:bg-sidebar-image-desktop">
			<nav>
				<ol className="flex justify-center p-5 gap-12  lg:flex-col lg:w-60 lg:mx-autor">
					{steps.map((step) => (
						<li
							className="flex gap-4 p-2 items-center "
							key={step.step}
						>
							<button
								className={clsx(
									'px-3 py-2 border border-white inline-flex rounded-full leading-none font-medium w-min h-min transition-colors duration-[400ms]',
									currentStep === step.step
										? 'bg-gray-200 text-gray-800  border-gray-500 ring-1 ring-gray-400 shadow-md'
										: 'text-white'
								)}
								onClick={() => handleNextStep(step.step)}
							>
								{step.step}
							</button>
							<span className="hidden lg:inline text-white ">
								<p className="font-extralight">Step {step.step}</p>
								<span className="font-bold">{step.title}</span>
							</span>
						</li>
					))}
				</ol>
			</nav>
		</aside>
	);
};