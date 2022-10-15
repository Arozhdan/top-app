import cn from 'classnames';
import styles from './Ptag.module.css';
import { PtagProps } from './Ptag.props';

export const Ptag = ({ size = 'md', className, children, ...props }: PtagProps): JSX.Element => {
	return (
		<p
			className={cn(className, styles.p, styles[size])}
			{...props}
		>{children}</p>
	);
};
