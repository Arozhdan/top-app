import cn from 'classnames';
import { format } from 'date-fns';
import { Ptag } from '../../../components';
import styles from './Footer.module.css';
import { FooterProps } from "./Footer.props";

export const Footer = ({ className, ...props }: FooterProps) => {
	return (
		<footer className={cn(className, styles.footer)} {...props}>
			<Ptag>
				OwlTop © 2020 - {format(new Date(), 'yyyy')} Все права защищены
			</Ptag>
			<Ptag>
				<a className='hover:opacity-50 transition' href="#" target="_blank">Пользовательское соглашение</a>
			</Ptag>
			<Ptag>
				<a className='hover:opacity-50 transition' href="#" target="_blank">Политика конфиденциальности</a>
			</Ptag>
		</footer>
	);
};
