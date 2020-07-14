import '../assets/scss/style.scss';
import Layout from '../components/layout';
import { useFetchUser, UserProvider } from '../lib/user';

const App = ({ Component, pageProps }) => {
  const { user, loading } = useFetchUser();
  return (
    <UserProvider value={{ user, loading }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UserProvider>
  )
};

export default App;
