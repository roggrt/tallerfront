// import { Navigate, Outlet } from 'react-router-dom';
// import { useAuth } from '../../hooks/useAuth';
//
// const AuthGuard = () => {
//     const { user, loading } = useAuth();
//
//     if (loading) {
//         return <div>Cargando...</div>;
//     }
//
//     if (!user) {
//         return <Navigate to="/login" />;
//     }
//
//     return <Outlet />;
// };
//
// export default AuthGuard;


import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

const AuthGuard = () => {
    const { user, loading } = useAuth();
    const location = useLocation();

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary-500"></div>
            </div>
        );
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return <Outlet />;
};

export default AuthGuard;