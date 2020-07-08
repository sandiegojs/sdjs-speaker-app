import React, { createContext, useState, useContext, useEffect } from 'react';
import { useMutation, useQuery } from "@apollo/react-hooks";
import Cookies from 'js-cookie';
import Router from "next/router";

import { AuthToken } from '../lib/auth';
import LOGIN_MUTATION from '../apollo/mutations/auth/login';
import ME_QUERY from '../apollo/queries/auth/me';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [login] = useMutation(LOGIN_MUTATION);
    const { data } = useQuery(ME_QUERY);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadUserFromCookies() {
            const token = Cookies.get('token');
            console.log("getToken", token);
            if (token) {
                const auth = new AuthToken(token);
                if (auth.isExpired) console.log("hey! server says you shouldnt be here! you are not logged in!");
                if (data) setUser(data);
            }
            setLoading(false)
        }
        loadUserFromCookies()
    }, [data])

    const signin = async (email, password) => {
        login({ variables: { input: {
            identifier: email,
            password: password
          } }}).then(res => {
              Cookies.set('token', res.data.login.jwt)
            if (data) {
                setUser(data);
                Router.push('/admin/meetups');
            }
        })
    }

    const logout = () => {
        Cookies.remove('token')
        setUser(null)
        Router.push('/admin/signin')
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated: !!user, user, login: signin, loading, logout }}>
            {children}
        </AuthContext.Provider>
    )
}



export default function useAuth() {
    const context = useContext(AuthContext)
    return context
};
