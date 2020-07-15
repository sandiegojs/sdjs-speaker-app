import '../assets/scss/style.scss';
import Layout from '../components/layout';
import { UserProvider } from '../lib/user';

const App = ({ Component, pageProps }) => {
  return (
    <UserProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UserProvider>
  );
};

export default App;
