import { useState, useEffect } from 'react';
import {
    ChartBarIcon,
    UserGroupIcon,
    WrenchScrewdriverIcon,
    TruckIcon,
} from '@heroicons/react/24/outline';
import axios from '../../utils/axios';

const Dashboard = () => {
    const [stats, setStats] = useState({
        totalClients: 0,
        totalVehicles: 0,
        activeOrders: 0,
        completedOrders: 0,
    });

    const [recentOrders, setRecentOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulación de carga de datos
        setTimeout(() => {
            setStats({
                totalClients: 150,
                totalVehicles: 180,
                activeOrders: 12,
                completedOrders: 45,
            });
            setRecentOrders([
                { id: 1, client: 'Juan Pérez', vehicle: 'Toyota Corolla', status: 'En progreso' },
                { id: 2, client: 'María López', vehicle: 'Honda Civic', status: 'Pendiente' },
                { id: 3, client: 'Carlos Ruiz', vehicle: 'Ford Explorer', status: 'Completado' },
            ]);
            setLoading(false);
        }, 1000);
    }, []);

    const statCards = [
        {
            title: 'Total Clientes',
            value: stats.totalClients,
            icon: UserGroupIcon,
            color: 'bg-blue-500',
        },
        {
            title: 'Total Vehículos',
            value: stats.totalVehicles,
            icon: TruckIcon,
            color: 'bg-green-500',
        },
        {
            title: 'Órdenes Activas',
            value: stats.activeOrders,
            icon: WrenchScrewdriverIcon,
            color: 'bg-yellow-500',
        },
        {
            title: 'Órdenes Completadas',
            value: stats.completedOrders,
            icon: ChartBarIcon,
            color: 'bg-purple-500',
        },
    ];

    const getStatusColor = (status) => {
        switch (status) {
            case 'En progreso':
                return 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900 dark:text-yellow-200';
            case 'Completado':
                return 'text-green-600 bg-green-100 dark:bg-green-900 dark:text-green-200';
            case 'Pendiente':
                return 'text-blue-600 bg-blue-100 dark:bg-blue-900 dark:text-blue-200';
            default:
                return 'text-gray-600 bg-gray-100';
        }
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 dark:border-white"></div>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {statCards.map((stat) => (
                    <div
                        key={stat.title}
                        className="bg-white dark:bg-gray-800 rounded-lg shadow p-6"
                    >
                        <div className="flex items-center">
                            <div className={`p-3 rounded-full ${stat.color} bg-opacity-10`}>
                                <stat.icon className="h-6 w-6 text-current" />
                            </div>
                            <div className="ml-4">
                                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                    {stat.title}
                                </p>
                                <p className="text-2xl font-semibold text-gray-900 dark:text-white">
                                    {stat.value}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Recent Orders */}
            <div className="bg-white dark:bg-gray-800 shadow rounded-lg">
                <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                        Órdenes Recientes
                    </h3>
                </div>
                <div className="divide-y divide-gray-200 dark:divide-gray-700">
                    {recentOrders.map((order) => (
                        <div key={order.id} className="px-6 py-4">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                                        {order.client}
                                    </p>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                        {order.vehicle}
                                    </p>
                                </div>
                                <span
                                    className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                                        order.status
                                    )}`}
                                >
                  {order.status}
                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;