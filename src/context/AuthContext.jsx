import { createContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router";

const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
    const isAuthenticated = !!localStorage.getItem("accessToken")

    const path = useLocation()
    const nav = useNavigate()



    useEffect(() => {
        if (path.pathname != "/login" && !isAuthenticated) {
            nav('/login')
        }
    }, [path])

    return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>
}