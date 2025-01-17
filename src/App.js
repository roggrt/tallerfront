// // // import logo from './logo.svg';
// // // import './App.css';
// // //
// // // function App() {
// // //   return (
// // //     <div className="App">
// // //       <header className="App-header">
// // //         <img src={logo} className="App-logo" alt="logo" />
// // //         <p>
// // //           Edit <code>src/App.js</code> and save to reload.
// // //         </p>
// // //         <a
// // //           className="App-link"
// // //           href="https://reactjs.org"
// // //           target="_blank"
// // //           rel="noopener noreferrer"
// // //         >
// // //           Learn React
// // //         </a>
// // //       </header>
// // //     </div>
// // //   );
// // // }
// // //
// // // export default App;
// //
// // import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// // import { AuthProvider } from './context/AuthContext';
// // import { ThemeProvider } from './context/ThemeContext';
// // import AuthGuard from './components/auth/AuthGuard';
// // import DashboardLayout from './components/layout/DashboardLayout';
// // import Login from './pages/auth/Login';
// // import Dashboard from './pages/dashboard/Dashboard';
// //
// // function App() {
// //     return (
// //         <AuthProvider>
// //             <ThemeProvider>
// //                 <BrowserRouter>
// //                     <Routes>
// //                         <Route path="/login" element={<Login />} />
// //                         <Route path="/" element={<Navigate to="/dashboard" replace />} />
// //                         <Route element={<AuthGuard />}>
// //                             <Route element={<DashboardLayout />}>
// //                                 <Route path="/dashboard" element={<Dashboard />} />
// //                             </Route>
// //                         </Route>
// //                     </Routes>
// //                 </BrowserRouter>
// //             </ThemeProvider>
// //         </AuthProvider>
// //     );
// // }
// //
// // export default App;
//
// import React from 'react';
// import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// import { AuthProvider } from './context/AuthContext';
// import { ThemeProvider } from './context/ThemeContext';
// import AuthGuard from './components/auth/AuthGuard';
// import DashboardLayout from './components/layout/DashboardLayout';
// import Login from './pages/auth/Login';
// import Dashboard from './pages/dashboard/Dashboard';
//
// const App = () => {
//     return (
//         <div>
//             <AuthProvider>
//                 <ThemeProvider>
//                     <BrowserRouter>
//                         <Routes>
//                             <Route path="/login" element={<Login />} />
//                             <Route path="/" element={<Navigate to="/dashboard" replace />} />
//                             <Route element={<AuthGuard />}>
//                                 <Route element={<DashboardLayout />}>
//                                     <Route path="/dashboard" element={<Dashboard />} />
//                                     {/* Aquí irán más rutas */}
//                                 </Route>
//                             </Route>
//                         </Routes>
//                     </BrowserRouter>
//                 </ThemeProvider>
//             </AuthProvider>
//         </div>
//     );
// };
//
// export default App;


import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';
import AuthGuard from './components/auth/AuthGuard';
import DashboardLayout from './components/layout/DashboardLayout';
import Login from './pages/auth/Login';
import Dashboard from './pages/dashboard/Dashboard';
import ClientList from './pages/clients/ClientList';
import VehicleList from './pages/vehicles/VehicleList';
import OrderList from './pages/serviceOrders/OrderList';

const App = () => {
    return (
        <AuthProvider>
            <ThemeProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/login" element={<Login />} />
                        <Route path="/" element={<Navigate to="/dashboard" replace />} />
                        <Route element={<AuthGuard />}>
                            <Route element={<DashboardLayout />}>
                                <Route path="/dashboard" element={<Dashboard />} />
                                <Route path="/clients" element={<ClientList />} />
                                <Route path="/vehicles" element={<VehicleList />} />
                                <Route path="/orders" element={<OrderList />} />
                            </Route>
                        </Route>
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        </AuthProvider>
    );
};

export default App;