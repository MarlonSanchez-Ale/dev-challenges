import { FormEvent } from 'react';
import { UserInfo } from 'AppTypes';
import { Typography, Input } from '@material-tailwind/react';

import clsx from 'clsx';

interface PersonalInfoProps {
	userInfo: UserInfo;
	updateUserInfo: (userInfo: UserInfo) => void;
	showRequired: boolean;
}

export const PersonalInfo = ({
	userInfo,
	updateUserInfo,
	showRequired,
}: PersonalInfoProps) => {
	const handlePersonalInfo = (
		event: FormEvent<HTMLInputElement>,
		key: keyof UserInfo
	) => {
		const updatedUserInfo = { ...userInfo };
		updatedUserInfo[key] = event.currentTarget.value;
		updateUserInfo(updatedUserInfo);
	};

	let required: boolean = true


	return (
		<section className="flex flex-col gap-10 w-full">

			<div className="flex flex-col gap-1">
				<Typography variant="h2" color="white">
					Personal info
				</Typography>
				<Typography className=" font-light text-gray-300">
					Please provide your name, email address and phone number.
				</Typography>
			</div>

			<div className='flex flex-col justify-center gap-5'>
				<Input
					type="text"
					color="white"
					label="Name"
					value={userInfo.name}
					onChange={(e: FormEvent<HTMLInputElement>) =>
						handlePersonalInfo(e, 'name')
					}
					className={clsx(
						'border px-4 py-2 text-sm transition-all ',
						showRequired &&
						required &&
						!userInfo.name &&
						'ring-1 ring-red-500'
					)}
					crossOrigin={undefined}
				/>

				<Input
					type="email"
					color="white"
					label="Email"
					value={userInfo.email}
					onChange={(e: FormEvent<HTMLInputElement>) =>
						handlePersonalInfo(e, 'email')
					}
					className={clsx(
						'border px-4 py-2 text-sm transition-all ',
						showRequired &&
						required &&
						!userInfo.email &&
						'ring-1 ring-red-500'
					)}
					crossOrigin={undefined}
				/>

				<Input
					type="tel"
					color="white"
					label="Phone"
					value={userInfo.phone}
					onChange={(e: FormEvent<HTMLInputElement>) =>
						handlePersonalInfo(e, 'phone')
					}
					className={clsx(
						'border px-4 py-2 text-sm transition-all ',
						showRequired &&
						required &&
						!userInfo.phone &&
						'ring-1 ring-red-500'
					)}
					crossOrigin={undefined}
				/>

				
			</div>
		</section>
	);
};

/*


<Input
					label="Name"
					placeholder="e.g. Stephen King"
					showRequired={showRequired && !userInfo.name}
					value={userInfo.name}
					onChange={(e: FormEvent<HTMLInputElement>) =>
						handlePersonalInfo(e, 'name')
					}
				/>


				
				<Input
					label="Email Address"
					type="email"
					placeholder="e.g. stephenking@lorem.com"
					showRequired={
						showRequired &&
						(!userInfo.email || !userInfo.email.includes('@'))
					}
					value={userInfo.email}
					onChange={(e: FormEvent<HTMLInputElement>) =>
						handlePersonalInfo(e, 'email')
					}
				/>

				<Input
					label="Phone Number"
					placeholder="e.g. +1 234 567 890"
					showRequired={showRequired && !userInfo.phone}
					value={userInfo.phone}
					onChange={(e: FormEvent<HTMLInputElement>) =>
						handlePersonalInfo(e, 'phone')
					}
				/>

*/