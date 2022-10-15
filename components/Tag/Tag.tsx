import cn from 'classnames';
import styles from './Tag.module.css';
import { TagProps } from './Tag.props';

export const Tag = ({ size = 'sm', color = 'ghost', children, className, href, ...props }: TagProps): JSX.Element => {
	return (
		<div
			className={cn(className, styles.tag, styles[size], styles[color])}
			{...props}
		>{
				href
					? <a href={href}>{children}</a>
					: children
			}
		</div>
	);
};
