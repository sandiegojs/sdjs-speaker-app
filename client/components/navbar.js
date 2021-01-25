import React from 'react';
import Link from 'next/link';
import { useUser } from '../lib/user';
import { unsetToken } from '../lib/auth';

const Navbar = () => {
  const { user, loading } = useUser();

  const logout = () => {
    unsetToken();
  };

  return (
    <div className="home-nav">
      <div className="navbar">
        <Link href="/">
          <a>
            <img
              className="logo"
              src="https://uploads-ssl.webflow.com/5717c4de40b3bdeb02777ff4/598129e0c2a8fb000172a22e_Full%20Color.png"
            />
          </a>
        </Link>
        <div className="nav-items">
          {!loading && !user ? (
            <div className={'nav-item'}>
              <Link href="/admin/signin">
                <a>SIGNIN</a>
              </Link>
            </div>
          ) : (
            ''
          )}
          {!loading &&
            (user ? (
              <>
                <div className={'nav-item'}>
                  <Link href="/admin/organizers">
                    <a>ORGANIZERS</a>
                  </Link>
                </div>
                <div className={'nav-item'}>
                  <Link href="/admin/meetups">
                    <a>MEETUPS</a>
                  </Link>
                </div>
                <span className="navbar-text">
                  Welcome back <b>{user}</b>!
                </span>
              </>
            ) : (
              ''
            ))}
          {!loading &&
            (user ? (
              <>
                <div className={'nav-item'}>
                  <button onClick={() => logout()}>LOGOUT</button>
                </div>
              </>
            ) : (
              ' '
            ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
