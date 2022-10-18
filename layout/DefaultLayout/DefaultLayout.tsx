import styles from "./DefaultLayout.module.css";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { DefaultLayoutProps } from "./DefaultLayout.props";
import { FC } from "react";
import { AppContextProvider, IAppContext } from "../../context/app.context";

const DefaultLayout = ({ children }: DefaultLayoutProps): JSX.Element => {
	return (
		<div className={styles.wrapper}>
			<Header className={styles.header} />
			<Sidebar className={styles.sidebar} />
			<main className={styles.body}>
				{children}
			</main>
			<Footer className={styles.footer} />
		</div>
	);
};

export const withDefaultLayout = <T extends Record<string, unknown> & IAppContext>(Component: FC<T>) => {
	return function withDefaultLayoutComponent(props: T): JSX.Element {
		return <AppContextProvider menu={props.menu} firstCategory={props.firstCategory}>
			<DefaultLayout>
				<Component {...props} />
			</DefaultLayout>
		</AppContextProvider>;
	};
};