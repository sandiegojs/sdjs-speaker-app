import Head from 'next/head'
import Nav from './navbar'

const Layout = ({ children }) => (
  <>
    <Head>
        <meta charSet="utf-8" />
        <title>San Diego JS Speaker Pipeline</title>
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:300,300italic,400,400italic,600,600italic,700,700italic,800,800italic" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossOrigin="anonymous" />
    </Head>
    <Nav />
    {children}
    </>
)

export default Layout
