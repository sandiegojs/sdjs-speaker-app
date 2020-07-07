import Link from 'next/link';

import { useIsAuthenticated } from '../providers/auth';

const Navbar = () => {
    const isAuthenticated = useIsAuthenticated();
    return (
        <div className='home-nav'>
        <div className='navbar'>
            <Link href='/'>
            <a>
                <img className='logo' src='https://uploads-ssl.webflow.com/5717c4de40b3bdeb02777ff4/598129e0c2a8fb000172a22e_Full%20Color.png'/>
            </a>
            </Link>
            <div className='nav-items' >
            {isAuthenticated && (<Link href='/' className={'nav-item w--current'}>
                <a>ADMIN</a>
            </Link>)}
            <Link href='/admin/meetups'>
                <a>MEETUPS</a>
            </Link>
            </div>
        </div>
    </div>
    )
}

export default Navbar;
