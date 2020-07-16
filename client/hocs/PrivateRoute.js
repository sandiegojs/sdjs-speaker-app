import React, { useEffect } from 'react';
import Router from 'next/router';
import { useUser } from '../lib/user';

export function PrivateRoute(Component) {
  return () => {
    const { user, loading } = useUser();

    useEffect(() => {
      if (!user && !loading) Router.push('/admin/signin');
    }, [loading, user]);

    return <Component />;
  };
}
