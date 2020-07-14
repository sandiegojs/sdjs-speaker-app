import { ApolloProvider } from "@apollo/react-hooks";

import '../assets/scss/style.scss';
import Layout from '../components/layout';
import withData from "../lib/apollo";
import { useFetchUser, UserProvider } from '../lib/user';

const App = ({ Component, pageProps, apollo }) => {
  const { user, loading } = useFetchUser();
  return (
    <UserProvider value={{ user, loading}}>
      <ApolloProvider client={apollo}>
        <Layout user={user}>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </UserProvider>
  )
};

export default withData(App);
