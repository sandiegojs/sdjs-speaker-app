import Link from 'next/link';

const Navbar = () => {
    return (
        <div className='home-nav'>
        <div className='navbar'>
            <Link href='/'>
            <a>
                <img className='logo' src='https://uploads-ssl.webflow.com/5717c4de40b3bdeb02777ff4/598129e0c2a8fb000172a22e_Full%20Color.png'/>
            </a>
            </Link>
        </div>
    </div>
    )
}

export default Navbar;
