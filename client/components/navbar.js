import Link from 'next/link';

import useAuth from '../providers/auth';

const Navbar = () => {
    const { logout, isAuthenticated } = useAuth();
    return (
        <div className='home-nav'>
        <div className='navbar'>
            <Link href='/'>
            <a>
                <img className='logo' src='https://uploads-ssl.webflow.com/5717c4de40b3bdeb02777ff4/598129e0c2a8fb000172a22e_Full%20Color.png'/>
            </a>
            </Link>
            <div className='nav-items' >
                    {isAuthenticated && (
                        <>

                    <div className={'nav-item'}>
                        <button onClick={() => logout()}>LOGOUT</button>
                    </div>
                    </>
                    )}
                    {!isAuthenticated && (<Link href='/admin/signin'>
                        SIGNIN
                    </Link>)}
            </div>
        </div>
    </div>
    )
}

export default Navbar;
