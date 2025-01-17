// import { NavLink } from 'react-router-dom';
// import {
//     HomeIcon,
//     UserGroupIcon,
//     TruckIcon,
//     WrenchScrewdriverIcon,
//     Cog6ToothIcon
// } from '@heroicons/react/24/outline';
//
// const Sidebar = () => {
//     const navigation = [
//         { name: 'Dashboard', icon: HomeIcon, href: '/dashboard' },
//         { name: 'Clientes', icon: UserGroupIcon, href: '/clients' },
//         { name: 'Vehículos', icon: TruckIcon, href: '/vehicles' },
//         { name: 'Órdenes', icon: WrenchScrewdriverIcon, href: '/orders' },
//         { name: 'Configuración', icon: Cog6ToothIcon, href: '/settings' },
//     ];
//
//     return (
//         <aside className="fixed inset-y-0 left-0 w-64 bg-white dark:bg-dark-bg-secondary border-r border-gray-200 dark:border-gray-700">
//             <nav className="mt-5 px-2">
//                 <div className="space-y-1">
//                     {navigation.map((item) => (
//                         <NavLink
//                             key={item.name}
//                             to={item.href}
//                             className={({ isActive }) =>
//                                 `group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
//                                     isActive
//                                         ? 'bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-200'
//                                         : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
//                                 }`
//                             }
//                         >
//                             <item.icon
//                                 className="mr-3 h-6 w-6"
//                                 aria-hidden="true"
//                             />
//                             {item.name}
//                         </NavLink>
//                     ))}
//                 </div>
//             </nav>
//         </aside>
//     );
// };
//
// export default Sidebar;


import { NavLink } from 'react-router-dom';
import {
    HomeIcon,
    UserGroupIcon,
    TruckIcon,
    WrenchScrewdriverIcon,
    Cog6ToothIcon
} from '@heroicons/react/24/outline';

const Sidebar = () => {
    const navigation = [
        { name: 'Dashboard', icon: HomeIcon, href: '/dashboard' },
        { name: 'Clientes', icon: UserGroupIcon, href: '/clients' },
        { name: 'Vehículos', icon: TruckIcon, href: '/vehicles' },
        { name: 'Órdenes', icon: WrenchScrewdriverIcon, href: '/orders' },
        { name: 'Configuración', icon: Cog6ToothIcon, href: '/settings' },
    ];

    return (
        <aside className="fixed inset-y-0 left-0 w-64 bg-white dark:bg-dark-bg-secondary border-r border-gray-200 dark:border-gray-700 z-10">
            <div className="h-16 flex items-center justify-center border-b border-gray-200 dark:border-gray-700">
                <span className="text-xl font-bold text-gray-900 dark:text-white">Taller</span>
            </div>
            <nav className="mt-5 px-2">
                <div className="space-y-1">
                    {navigation.map((item) => {
                        const Icon = item.icon;
                        return (
                            <NavLink
                                key={item.name}
                                to={item.href}
                                className={({ isActive }) =>
                                    `group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                                        isActive
                                            ? 'bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-200'
                                            : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                                    }`
                                }
                            >
                                <Icon className="mr-3 h-6 w-6" aria-hidden="true" />
                                {item.name}
                            </NavLink>
                        );
                    })}
                </div>
            </nav>
        </aside>
    );
};

export default Sidebar;