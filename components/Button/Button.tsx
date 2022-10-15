import cn from 'classnames';
import { ChevronRightIcon } from '@heroicons/react/20/solid';
import styles from './Button.module.css';
import { ButtonProps } from "./Button.props";

export const Button = ({ appearance = 'ghost', arrow, children, className, ...props }: ButtonProps): JSX.Element => {
	return (
		<button className={
			cn(styles.button, className, styles[appearance])}
			{...props}
		>
			{children}
			{arrow &&
				<ChevronRightIcon className={cn(styles.arrow, {
					[styles.down]: arrow === 'down'
				})} />
			}
		</button>
	);
};
