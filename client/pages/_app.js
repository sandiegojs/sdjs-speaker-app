import '../assets/scss/style.scss';

import Layout from '../components/layout';

const App = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
};

export default App;
