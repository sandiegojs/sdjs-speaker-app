import { ApolloProvider } from "@apollo/react-hooks";

import '../assets/scss/style.scss';
import Layout from '../components/layout';
import withData from "../lib/apollo";
import { AuthProvider } from '../providers/auth';

const App = ({ Component, pageProps, apollo }) => {
  return (
      <ApolloProvider client={apollo}>
        <AuthProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        </AuthProvider>
      </ApolloProvider>
  )
};

export default withData(App);
