import { useEffect } from 'react'
import { useUser } from '../lib/user';
import Router from 'next/router';

export function PrivateRoute(Component) {
    return () => {
        const { user, loading } = useUser();

        useEffect(() => {
            if (!user && !loading) Router.push('/admin/signin')
        }, [loading, user])

        return (<Component {...arguments} />)
    }
}
