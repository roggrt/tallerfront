// // // // // import { Outlet } from 'react-router-dom';
// // // // // import Header from './Header';
// // // // // import Sidebar from './Sidebar';
// // // // //
// // // // // const DashboardLayout = () => {
// // // // //     return (
// // // // //         <div className="h-screen bg-gray-50 dark:bg-dark-bg-primary">
// // // // //             <Header />
// // // // //             <Sidebar />
// // // // //             <main className="ml-64 p-8">
// // // // //                 <div className="max-w-7xl mx-auto">
// // // // //                     <Outlet />
// // // // //                 </div>
// // // // //             </main>
// // // // //         </div>
// // // // //     );
// // // // // };
// // // // //
// // // // // export default DashboardLayout;
// // // //
// // // // import React, { useContext } from 'react';
// // // // import { Outlet } from 'react-router-dom';
// // // // import { ThemeContext } from '../../context/ThemeContext';
// // // // import Header from './Header';
// // // // import Sidebar from './Sidebar';
// // // //
// // // // const DashboardLayout = () => {
// // // //     const { theme } = useContext(ThemeContext);
// // // //
// // // //     return (
// // // //         <div className={`min-h-screen ${theme === 'dark' ? 'dark' : ''}`}>
// // // //             <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-150">
// // // //                 {/* Header fixed */}
// // // //                 <Header />
// // // //
// // // //                 {/* Sidebar fixed */}
// // // //                 <Sidebar />
// // // //
// // // //                 {/* Main content area */}
// // // //                 <main className="pl-64 pt-16 min-h-screen">
// // // //                     <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-6">
// // // //                         <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 min-h-[calc(100vh-8rem)]">
// // // //                             <Outlet />
// // // //                         </div>
// // // //                     </div>
// // // //                 </main>
// // // //
// // // //                 {/* Footer if needed */}
// // // //                 <footer className="pl-64 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
// // // //                     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
// // // //                         <p className="text-center text-sm text-gray-500 dark:text-gray-400">
// // // //                             © {new Date().getFullYear()} Taller Tecnicentro. Todos los derechos reservados.
// // // //                         </p>
// // // //                     </div>
// // // //                 </footer>
// // // //             </div>
// // // //         </div>
// // // //     );
// // // // };
// // // //
// // // // export default DashboardLayout;
// // //
// // // import React, { useContext } from 'react';
// // // import { Outlet } from 'react-router-dom';
// // // import { ThemeContext } from '../../context/ThemeContext';
// // // import Header from './Header';
// // // import Sidebar from './Sidebar';
// // //
// // // const DashboardLayout = () => {
// // //     const { theme } = useContext(ThemeContext);
// // //
// // //     return (
// // //         <div className={theme === 'dark' ? 'dark' : ''}>
// // //             <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
// // //                 {/* Header */}
// // //                 <Header />
// // //
// // //                 {/* Sidebar */}
// // //                 <Sidebar />
// // //
// // //                 {/* Main Content */}
// // //                 <main className="pl-64 pt-16">
// // //                     <div className="min-h-[calc(100vh-4rem)]">
// // //                         <div className="max-w-full mx-auto p-4">
// // //                             <Outlet />
// // //                         </div>
// // //                     </div>
// // //
// // //                     {/* Footer */}
// // //                     <footer className="border-t border-gray-200 dark:border-gray-800">
// // //                         <div className="max-w-full mx-auto px-4 py-3">
// // //                             <p className="text-center text-sm text-gray-500 dark:text-gray-400">
// // //                                 © {new Date().getFullYear()} Taller Tecnicentro. Todos los derechos reservados.
// // //                             </p>
// // //                         </div>
// // //                     </footer>
// // //                 </main>
// // //             </div>
// // //         </div>
// // //     );
// // // };
// // //
// // // export default DashboardLayout;
// //
// // import React, { useContext } from 'react';
// // import { Outlet } from 'react-router-dom';
// // import { ThemeContext } from '../../context/ThemeContext';
// // import Header from './Header';
// // import Sidebar from './Sidebar';
// //
// // const DashboardLayout = () => {
// //     const { theme } = useContext(ThemeContext);
// //
// //     return (
// //         <div className={theme === 'dark' ? 'dark' : ''}>
// //             <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
// //                 {/* Sidebar */}
// //                 <Sidebar />
// //
// //                 {/* Main Content Container */}
// //                 <div className="flex flex-col flex-1">
// //                     {/* Sticky Header */}
// //                     <Header />
// //
// //                     {/* Main Content */}
// //                     <main className="flex-1 ml-64 mt-16">
// //                         <div className="p-4 h-[calc(100vh-4rem)]">
// //                             <Outlet />
// //                         </div>
// //                     </main>
// //
// //                     {/* Footer */}
// //                     <footer className="ml-64 border-t border-gray-200 dark:border-gray-800">
// //                         <div className="p-3">
// //                             <p className="text-center text-sm text-gray-500 dark:text-gray-400">
// //                                 © {new Date().getFullYear()} Taller Tecnicentro
// //                             </p>
// //                         </div>
// //                     </footer>
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // };
// //
// // export default DashboardLayout;
//
// import React, { useContext } from 'react';
// import { Outlet } from 'react-router-dom';
// import { ThemeContext } from '../../context/ThemeContext';
// import Header from './Header';
// import Sidebar from './Sidebar';
//
// const DashboardLayout = () => {
//     const { theme } = useContext(ThemeContext);
//
//     return (
//         <div className={theme === 'dark' ? 'dark' : ''}>
//             <div className="flex h-screen overflow-hidden bg-gray-50 dark:bg-gray-900">
//                 {/* Sidebar */}
//                 <Sidebar />
//
//                 {/* Content Area */}
//                 <div className="flex flex-col flex-1 overflow-hidden">
//                     {/* Sticky Header */}
//                     <Header />
//
//                     {/* Main Content */}
//                     <main
//                         className="flex-1 overflow-y-auto ml-64"
//                         style={{ height: 'calc(100vh - 64px)', marginTop: '34px' }}
//                     >
//                         <div className="p-4">
//                             <Outlet />
//                         </div>
//                     </main>
//
//                     {/* Footer */}
//                     <footer className="ml-64 border-t border-gray-200 dark:border-gray-800">
//                         <div className="py-2">
//                             <p className="text-center text-xs text-gray-500 dark:text-gray-400">
//                                 © {new Date().getFullYear()} Taller Tecnicentro
//                             </p>
//                         </div>
//                     </footer>
//                 </div>
//             </div>
//         </div>
//     );
// };
//
// export default DashboardLayout;
import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { ThemeContext } from '../../context/ThemeContext';
import Header from './Header';
import Sidebar from './Sidebar';

const DashboardLayout = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <div className={theme === 'dark' ? 'dark' : ''}>
            <div className="flex h-screen overflow-hidden bg-gray-50 dark:bg-gray-900">
                {/* Sidebar */}
                <Sidebar />

                {/* Content Area */}
                <div className="flex flex-col flex-1 overflow-hidden">
                    {/* Sticky Header */}
                    <Header />

                    {/* Main Content */}
                    <main
                        className="flex-1 overflow-y-auto ml-64"
                        style={{ height: 'calc(100vh - 64px)', marginTop: '34px' }}
                    >
                        <div className="px-6 py-4">
                            <div className="max-w-[98%] mx-auto">
                                <Outlet />
                            </div>
                        </div>
                    </main>

                    {/* Footer */}
                    <footer className="ml-64 border-t border-gray-200 dark:border-gray-800">
                        <div className="px-6 py-2">
                            <p className="text-center text-xs text-gray-500 dark:text-gray-400">
                                © {new Date().getFullYear()} Taller Tecnicentro
                            </p>
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;