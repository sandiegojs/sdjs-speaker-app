import React, { createContext, useState, useContext, useEffect } from 'react';
import { useMutation } from "@apollo/react-hooks";
import Cookies from 'js-cookie';
import Router from "next/router";

import { AuthToken } from '../lib/auth';
import LOGIN_MUTATION from "../apollo/mutations/auth/login";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [login] = useMutation(LOGIN_MUTATION);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadUserFromCookies() {
            const token = Cookies.get('token');
            if (token) {
                const auth = new AuthToken(token);
                if (auth.isExpired) console.log("hey! server says you shouldnt be here! you are not logged in!");
            }
            setLoading(false)
        }
        loadUserFromCookies()
    }, [])

    const signin = async (email, password) => {
        login({ variables: { input: {
            identifier: email,
            password: password
          } }}).then(({ data: { login } }) => {
            AuthToken.storeToken(login.jwt);
        })
    }

    const logout = () => {
        Cookies.remove('token')
        setUser(null)
        Router.push('/admin/signin')
    }


    return (
        <AuthContext.Provider value={{ isAuthenticated: true, user, login: signin, loading, logout }}>
            {children}
        </AuthContext.Provider>
    )
}



export default function useAuth() {
    const context = useContext(AuthContext)
    return context
};
