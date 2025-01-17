// import { createContext, useState, useEffect } from 'react';
// import jwt_decode from 'jwt-decode';
//
// export const AuthContext = createContext(null);
//
// export const AuthProvider = ({ children }) => {
//     const [user, setUser] = useState(null);
//     const [loading, setLoading] = useState(true);
//
//     useEffect(() => {
//         const token = localStorage.getItem('token');
//         if (token) {
//             try {
//                 const decoded = jwt_decode(token);
//                 setUser(decoded);
//             } catch (error) {
//                 localStorage.removeItem('token');
//             }
//         }
//         setLoading(false);
//     }, []);
//
//     const login = (token) => {
//         localStorage.setItem('token', token);
//         const decoded = jwt_decode(token);
//         setUser(decoded);
//     };
//
//     const logout = () => {
//         localStorage.removeItem('token');
//         setUser(null);
//     };
//
//     return (
//         <AuthContext.Provider value={{ user, login, logout, loading }}>
//             {!loading && children}
//         </AuthContext.Provider>
//     );
// };

import { createContext, useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode'; // Cambiamos la importación aquí

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            try {
                const decoded = jwtDecode(token); // Y aquí usamos jwtDecode en lugar de jwt_decode
                setUser(decoded);
            } catch (error) {
                localStorage.removeItem('token');
            }
        }
        setLoading(false);
    }, []);

    const login = (token) => {
        localStorage.setItem('token', token);
        const decoded = jwtDecode(token); // También aquí
        setUser(decoded);
    };

    const logout = () => {
        localStorage.removeItem('token');
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, loading }}>
            {!loading && children}
        </AuthContext.Provider>
    );
};