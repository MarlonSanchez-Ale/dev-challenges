import { useState } from 'react';
import { Addon, Plan, UserInfo, UserServiceConfiguration } from 'AppTypes';
import { Button } from '../elements/button';
import { Sidebar } from '../elements/sidebar';
import { PersonalInfo } from '../elements/personalInfo';
import { SelectPlan } from '../elements/selectPlan';
import { Addons } from '../elements/Addons';
import { ServiceSummary } from '../elements/serviceSummary';
import { ThankYou } from '../elements/thankYou';

function TemplateMultiStepForm() {
	const [step, setStep] = useState(1);
	const [showRequired, setShowRequiredFields] = useState(false);

	const InitialState = {
		userInfo: {
			name: '',
			email: '',
			phone: '',
		},
		selectedPlan: null,
		monthly: true,
		addons: [],
	}
	const [userServiceConfiguration, setUserServiceConfiguration] =
		useState<UserServiceConfiguration>(InitialState);

	const updateUserInfo = (userInfo: UserInfo) => {
		setUserServiceConfiguration({ ...userServiceConfiguration, userInfo });
	};

	const updateSelectedPlan = (plan: Plan) => {
		setUserServiceConfiguration({
			...userServiceConfiguration,
			selectedPlan: plan,
		});
	};

	const updateMonthly = () => {
		setUserServiceConfiguration((prevVal) => ({
			...userServiceConfiguration,
			monthly: !prevVal.monthly,
		}));
	};

	const updateAddons = (addon: Addon) => {
		const addons = userServiceConfiguration.addons;
		const index = addons.findIndex(
			(currentAddon) => currentAddon.name === addon.name
		);
		if (index === -1) {
			setUserServiceConfiguration({
				...userServiceConfiguration,
				addons: [...addons, addon],
			});
		} else {
			addons.splice(index, 1);
			setUserServiceConfiguration({
				...userServiceConfiguration,
				addons: [...addons],
			});
		}
	};

	const nextStep = (onGoingStep?: number) => {
		if (step === 5) return;
		if (step === 1 || (onGoingStep && onGoingStep !== 1 && step === 1)) {
			if (
				!userServiceConfiguration.userInfo.name ||
				!userServiceConfiguration.userInfo.email ||
				!userServiceConfiguration.userInfo.email.includes('@') ||
				!userServiceConfiguration.userInfo.phone
			) {
				setShowRequiredFields(true);
				return;
			}
		}
		setStep((step) => {
			if (onGoingStep) return onGoingStep;
			return step + 1;
		});
	};

	const goBack = () => {
		if (step === 1) return;
		setStep((step) => step - 1);
	};

	const handleReturn = () => {
		setStep(1)
		setUserServiceConfiguration(InitialState)
	}
	//h-screen flex flex-col text-neutral-cool-gray w-full p-10 my-10 rounded-lg shadow-xl bg-blue-400/20 lg:mx-auto lg:max-w-[58.75rem]  lg:flex-row grow lg:h-[33.75rem]
	return (
		<div className='grid place-items-center p-2 sm:my-10 lg:my-2 '>
			<div className="flex flex-row p-10 rounded-lg shadow-2xl bg-blue-500/10 sm:p-5 sm:h-full lg:mx-auto lg:max-w-[58.75rem]  lg:flex-row grow lg:h-[33.75rem] sm:flex-col sm:gap-5">
				<Sidebar currentStep={step} handleNextStep={nextStep} />
				<div className=" relative bg-neutral-magnolia  lg:bg-transparent lg:flex lg:flex-col lg:w-full ">
					<form className="px-6 sm:py-9 lg:py-2 flex w-full lg:bg-transparent lg:translate-y-0 ">
						{step === 1 && (
							<PersonalInfo
								userInfo={userServiceConfiguration.userInfo}
								updateUserInfo={updateUserInfo}
								showRequired={showRequired}
							/>
						)}
						{step === 2 && (
							<SelectPlan
								selectedPlan={userServiceConfiguration.selectedPlan}
								monthly={userServiceConfiguration.monthly}
								updateSelectedPlan={updateSelectedPlan}
								updateIsMonthly={updateMonthly}
							/>
						)}
						{step === 3 && (
							<Addons
								selectedAddons={userServiceConfiguration.addons}
								monthly={userServiceConfiguration.monthly}
								updateAddons={updateAddons}
							/>
						)}
						{step === 4 && (
							<ServiceSummary
								userServiceConfiguration={userServiceConfiguration}
							/>
						)}
						{step === 5 && <ThankYou handleReturn={handleReturn} />}
					</form>
					{step < 5 && (
						<menu className="flex justify-between p-4 mt-auto">
							<li>
								<Button type="ghost" onClick={goBack}>
									Go Back
								</Button>
							</li>
							<li>
								<Button
									onClick={() => nextStep()}
									type={step !== 4 ? 'secondary' : 'primary'}
								>
									{step !== 4 ? 'Next Step' : 'Confirm'}
								</Button>
							</li>
						</menu>
					)}
				</div>
			</div>
		</div>
	);
}

export default TemplateMultiStepForm;
