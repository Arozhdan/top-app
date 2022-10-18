import axios from 'axios';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { ParsedUrlQuery } from 'querystring';
import { IMenuItem } from '../../interfaces/menu-interface';
import { IPage } from '../../interfaces/page.interface';
import { IProduct } from '../../interfaces/product.interface';
import { withDefaultLayout } from "../../layout/DefaultLayout/DefaultLayout";

const firstCategory = 0;

function Course({ menu, page, products }: CourseProps): JSX.Element {

	return (
		<>
			{products && products.length}
		</>
	);
}

export default withDefaultLayout(Course);

export const getStaticPaths: GetStaticPaths = async () => {
	const { data: menu } = await axios.post<IMenuItem[]>(process.env.NEXT_PUBLIC_API_URL + '/api/top-page/find', {
		firstCategory
	});

	return {
		paths: menu.flatMap(m => m.pages.map(p => '/courses/' + p.alias)),
		fallback: true
	};
};

export const getStaticProps: GetStaticProps<CourseProps> = async ({ params }: GetStaticPropsContext<ParsedUrlQuery>) => {
	if (!params) {
		return {
			notFound: true
		};
	}
	const { data: menu } = await axios.post<IMenuItem[]>(process.env.NEXT_PUBLIC_API_URL + '/api/top-page/find', {
		firstCategory
	});
	const { data: page } = await axios.get<IPage>(process.env.NEXT_PUBLIC_API_URL + '/api/top-page/byAlias/' + params.alias);
	const { data: products } = await axios.post<IProduct[]>(process.env.NEXT_PUBLIC_API_URL + '/api/product/find', {
		category: page.category,
		limit: 10
	});

	return {
		props: {
			menu,
			firstCategory,
			page,
			products
		}
	};
};

interface CourseProps extends Record<string, unknown> {
	menu: IMenuItem[];
	firstCategory: number;
	page: IPage;
	products: IProduct[];
}