import { ApolloProvider } from "@apollo/react-hooks";

import '../assets/scss/style.scss';
import Layout from '../components/layout';
import withData from "../lib/apollo";

const App = ({ Component, pageProps, apollo }) => {
  return (
    <ApolloProvider client={apollo}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  )
};

export default withData(App);
