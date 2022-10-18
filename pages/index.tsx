import axios from 'axios';
import { GetStaticProps } from "next";
import { IMenuItem } from '../interfaces/menu-interface';
import { withDefaultLayout } from "../layout/DefaultLayout/DefaultLayout";

function Home({ menu, firstCategory }: HomeProps): JSX.Element {

  return (
    <>
      <ul>
        {menu.map(m => <li key={m._id.secondCategory}>{m._id.secondCategory}</li>)}
      </ul>
    </>
  );
}

export default withDefaultLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<IMenuItem[]>(process.env.NEXT_PUBLIC_API_URL + '/api/top-page/find', {
    firstCategory
  });
  return {
    props: {
      menu,
      firstCategory
    }
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: IMenuItem[];
  firstCategory: number;
}