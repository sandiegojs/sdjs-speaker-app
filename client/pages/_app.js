import { ApolloProvider } from "@apollo/react-hooks";

import '../assets/scss/style.scss';
import Layout from '../components/layout';
import withData from "../lib/apollo";
import { AuthProvider } from '../providers/Auth';

const App = ({ Component, pageProps, apollo }) => {
  return (
    <AuthProvider>
    <ApolloProvider client={apollo}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
    </AuthProvider>
  )
};

export default withData(App);
