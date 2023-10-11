import clsx from 'clsx';

interface ButtonProps {
	type?: 'primary' | 'secondary' | 'ghost';
	size?: 'sm' | 'md' | 'lg';
	children: React.ReactNode;
	className?: string;
	onClick?: () => void;
}

export const Button = ({
	type = 'primary',
	children,
	size = 'md',
	className,
	onClick,
}: ButtonProps) => {
	const typeClasses =
		type === 'primary'
			? 'bg-blue-500/20 rounded-md text-gray-300 shadow-md hover:bg-blue-500/30'
			: type === 'secondary'
			? 'bg-blue-500/10 rounded-md text-gray-300 shadow-md hover:bg-blue-500/20'
			: 'bg-blue-500/5 rounded-md text-gray-300 shadow-md hover:bg-blue-500/10 ';
	const sizeClasses =
		size === 'sm'
			? 'text-sm p-0'
			: size === 'lg'
			? 'text-lg px-5 py-2 font-medium'
			: 'px-5 py-2 font-medium';
	return (
		<button
			onClick={onClick}
			className={clsx(`rounded `, typeClasses, sizeClasses, className)}
		>
			{children}
		</button>
	);
};