import { useEffect } from 'react'
import useAuth from '../providers/auth';
import Router, { useRouter } from 'next/router'

export function PrivateRoute(Component) {
    return () => {
        const { user, isAuthenticated, loading } = useAuth();
        const router = useRouter()

        useEffect(() => {
            if (!isAuthenticated && !loading) Router.push('/admin/signin')
        }, [loading, isAuthenticated])

        return (<Component {...arguments} />)
    }
}
