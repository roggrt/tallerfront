// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import orderService from '../../services/order.service';
// import { WrenchScrewdriverIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
//
// const OrderList = () => {
//     const [orders, setOrders] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [searchTerm, setSearchTerm] = useState('');
//     const navigate = useNavigate();
//
//     useEffect(() => {
//         loadOrders();
//     }, []);
//
//     const loadOrders = async () => {
//         try {
//             const data = await orderService.getAll();
//             setOrders(data);
//             setLoading(false);
//         } catch (error) {
//             console.error('Error loading orders:', error);
//             setLoading(false);
//         }
//     };
//
//     const getStatusBadgeClass = (status) => {
//         const baseClasses = "px-2 py-1 text-xs font-medium rounded-full";
//         switch (status) {
//             case 'pending':
//                 return `${baseClasses} bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200`;
//             case 'in_progress':
//                 return `${baseClasses} bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200`;
//             case 'completed':
//                 return `${baseClasses} bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200`;
//             default:
//                 return `${baseClasses} bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200`;
//         }
//     };
//
//     const getStatusText = (status) => {
//         const statusMap = {
//             'pending': 'Pendiente',
//             'in_progress': 'En Progreso',
//             'completed': 'Completado'
//         };
//         return statusMap[status] || status;
//     };
//
//     if (loading) {
//         return (
//             <div className="flex justify-center items-center h-64">
//                 <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500"></div>
//             </div>
//         );
//     }
//
//     return (
//         <div className="space-y-6">
//             <div className="flex justify-between items-center">
//                 <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
//                     Órdenes de Servicio
//                 </h1>
//                 <button
//                     onClick={() => navigate('/orders/new')}
//                     className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700"
//                 >
//                     <WrenchScrewdriverIcon className="h-5 w-5 mr-2" />
//                     Nueva Orden
//                 </button>
//             </div>
//
//             <div className="flex items-center px-4 py-2 bg-white dark:bg-gray-800 rounded-lg shadow">
//                 <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
//                 <input
//                     type="text"
//                     placeholder="Buscar órdenes..."
//                     className="ml-2 w-full bg-transparent border-0 focus:outline-none focus:ring-0 text-gray-900 dark:text-white placeholder-gray-500"
//                     value={searchTerm}
//                     onChange={(e) => setSearchTerm(e.target.value)}
//                 />
//             </div>
//
//             <div className="bg-white dark:bg-gray-800 shadow overflow-hidden rounded-lg">
//                 <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
//                     <thead className="bg-gray-50 dark:bg-gray-700">
//                     <tr>
//                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
//                             Nº Orden
//                         </th>
//                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
//                             Cliente/Vehículo
//                         </th>
//                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
//                             Fecha Ingreso
//                         </th>
//                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
//                             Estado
//                         </th>
//                         <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
//                             Acciones
//                         </th>
//                     </tr>
//                     </thead>
//                     <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
//                     {orders.map((order) => (
//                         <tr key={order.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
//                             <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
//                                 {order.order_number}
//                             </td>
//                             <td className="px-6 py-4 whitespace-nowrap">
//                                 <div className="text-sm text-gray-900 dark:text-white">
//                                     {order.client_name}
//                                 </div>
//                                 <div className="text-sm text-gray-500 dark:text-gray-300">
//                                     {order.brand} {order.model} - {order.plate_number}
//                                 </div>
//                             </td>
//                             <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
//                                 {new Date(order.entry_date).toLocaleString()}
//                             </td>
//                             <td className="px-6 py-4 whitespace-nowrap">
//                   <span className={getStatusBadgeClass(order.status)}>
//                     {getStatusText(order.status)}
//                   </span>
//                             </td>
//                             <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
//                                 <div className="flex justify-end space-x-3">
//                                     <button
//                                         onClick={() => navigate(`/service-orders/${order.id}`)}
//                                         className="text-primary-600 hover:text-primary-900 dark:text-primary-400 dark:hover:text-primary-300"
//                                     >
//                                         Ver detalles
//                                     </button>
//                                     <button
//                                         onClick={() => navigate(`/service-orders/${order.id}/edit`)}
//                                         className="text-primary-600 hover:text-primary-900 dark:text-primary-400 dark:hover:text-primary-300"
//                                     >
//                                         Editar
//                                     </button>
//                                 </div>
//                             </td>
//                         </tr>
//                     ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// };
//
// export default OrderList;

import React, { useState, useEffect } from 'react';
import { WrenchScrewdriverIcon, FunnelIcon, XMarkIcon } from '@heroicons/react/24/outline';
import orderService from '../../services/order.service';
import OrderForm from './OrderForm';
import DataTable from '../../components/tables/DataTable';
import { debounce } from 'lodash';

const OrderList = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [viewMode, setViewMode] = useState('list');
    const [showFilters, setShowFilters] = useState(false);

    // Estados para filtros
    const [filters, setFilters] = useState({
        orderNumber: '',
        clientName: '',
        vehiclePlate: '',
        status: '',
        dateFrom: '',
        dateTo: ''
    });

    // Estados definidos para las órdenes
    const orderStatuses = [
        { value: 'pending', label: 'Pendiente' },
        { value: 'in_progress', label: 'En Proceso' },
        { value: 'completed', label: 'Completado' },
        { value: 'canceled', label: 'Cancelado' }
    ];

    const columns = [
        { key: 'order_number', header: 'N° Orden' },
        { key: 'client_name', header: 'Cliente' },
        {
            key: 'vehicle_info',
            header: 'Vehículo',
            render: (row) => `${row.vehicle_brand} ${row.vehicle_model} - ${row.vehicle_plate}`
        },
        {
            key: 'entry_date',
            header: 'Fecha Ingreso',
            render: (row) => new Date(row.entry_date).toLocaleDateString()
        },
        {
            key: 'status',
            header: 'Estado',
            render: (row) => (
                <span className={getStatusClass(row.status)}>
          {getStatusLabel(row.status)}
        </span>
            )
        },
    ];

    useEffect(() => {
        loadOrders();
    }, []);

    const loadOrders = async () => {
        try {
            setLoading(true);
            setError(null);
            const response = await orderService.getAll();
            setOrders(response);
        } catch (err) {
            console.error('Error al cargar órdenes:', err);
            setError('Error al cargar la lista de órdenes');
        } finally {
            setLoading(false);
        }
    };

    const getStatusClass = (status) => {
        const baseClass = "px-2 py-1 text-xs font-medium rounded-full";
        switch (status) {
            case 'pending':
                return `${baseClass} bg-yellow-100 text-yellow-800`;
            case 'in_progress':
                return `${baseClass} bg-blue-100 text-blue-800`;
            case 'completed':
                return `${baseClass} bg-green-100 text-green-800`;
            case 'canceled':
                return `${baseClass} bg-red-100 text-red-800`;
            default:
                return `${baseClass} bg-gray-100 text-gray-800`;
        }
    };

    const getStatusLabel = (status) => {
        const statusMap = {
            'pending': 'Pendiente',
            'in_progress': 'En Proceso',
            'completed': 'Completado',
            'canceled': 'Cancelado'
        };
        return statusMap[status] || status;
    };

    const debouncedSearch = debounce(async (searchParams) => {
        try {
            setLoading(true);
            const response = await orderService.searchOrders(searchParams);
            setOrders(response);
        } catch (error) {
            setError('Error en la búsqueda');
        } finally {
            setLoading(false);
        }
    }, 500);

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        const newFilters = {
            ...filters,
            [name]: value
        };
        setFilters(newFilters);
        debouncedSearch(newFilters);
    };

    const clearFilters = () => {
        setFilters({
            orderNumber: '',
            clientName: '',
            vehiclePlate: '',
            status: '',
            dateFrom: '',
            dateTo: ''
        });
        loadOrders();
    };

    const handleCreateNew = () => {
        setSelectedOrder(null);
        setViewMode('edit');
        setIsModalOpen(true);
    };

    const handleEdit = (order) => {
        setSelectedOrder(order);
        setViewMode('edit');
        setIsModalOpen(true);
    };

    const handleView = (order) => {
        setSelectedOrder(order);
        setViewMode('view');
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedOrder(null);
        setViewMode('list');
    };

    const handleOrderSaved = async () => {
        await loadOrders();
        handleCloseModal();
    };

    // Componente para mostrar el detalle de la orden
    const ViewModal = () => (
        <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="fixed inset-0 bg-black bg-opacity-50" onClick={handleCloseModal}></div>
            <div className="flex min-h-full items-center justify-center p-4">
                <div className="relative bg-white dark:bg-gray-800 rounded-lg w-full max-w-2xl">
                    <div className="flex justify-between items-center p-4 border-b dark:border-gray-700">
                        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                            Orden de Servicio #{selectedOrder?.order_number}
                        </h2>
                        <button onClick={handleCloseModal}>
                            <XMarkIcon className="h-6 w-6 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300" />
                        </button>
                    </div>

                    <div className="p-6">
                        {/* Información del Cliente y Vehículo */}
                        <div className="grid grid-cols-2 gap-6 mb-6">
                            <div>
                                <h3 className="text-lg font-medium mb-2">Información del Cliente</h3>
                                <p className="text-gray-600 dark:text-gray-300">{selectedOrder?.client_name}</p>
                                <p className="text-gray-500 dark:text-gray-400">{selectedOrder?.client_phone}</p>
                            </div>
                            <div>
                                <h3 className="text-lg font-medium mb-2">Información del Vehículo</h3>
                                <p className="text-gray-600 dark:text-gray-300">
                                    {selectedOrder?.vehicle_brand} {selectedOrder?.vehicle_model}
                                </p>
                                <p className="text-gray-500 dark:text-gray-400">Placa: {selectedOrder?.vehicle_plate}</p>
                            </div>
                        </div>

                        {/* Servicios y Estados */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-medium">Servicios Solicitados</h3>
                            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                                {selectedOrder?.services?.map((service, index) => (
                                    <div key={index} className="flex justify-between items-center py-2">
                                        <span>{service.name}</span>
                                        <span className={getStatusClass(service.status)}>
                      {getStatusLabel(service.status)}
                    </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Botón de cierre */}
                        <div className="mt-6">
                            <button
                                onClick={handleCloseModal}
                                className="w-full px-4 py-2 bg-gray-100 text-gray-800 rounded-md hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
                            >
                                Cerrar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <div>
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
                    Órdenes de Servicio
                </h1>
                <div className="flex gap-2">
                    <button
                        onClick={() => setShowFilters(!showFilters)}
                        className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none"
                    >
                        <FunnelIcon className="h-5 w-5 mr-2" />
                        Filtros
                    </button>
                    <button
                        onClick={handleCreateNew}
                        className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-800 hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none"
                    >
                        <WrenchScrewdriverIcon className="h-5 w-5 mr-2" />
                        Nueva Orden
                    </button>
                </div>
            </div>

            {/* Filtros */}
            {showFilters && (
                <div className="mb-6 p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-medium text-gray-900 dark:text-white">Filtros de búsqueda</h3>
                        <button
                            onClick={clearFilters}
                            className="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                        >
                            <XMarkIcon className="h-5 w-5" />
                        </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                N° Orden
                            </label>
                            <input
                                type="text"
                                name="orderNumber"
                                value={filters.orderNumber}
                                onChange={handleFilterChange}
                                className="w-full rounded-md border dark:border-gray-600 px-3 py-2 text-gray-900 dark:text-white dark:bg-gray-700 focus:ring-primary-500 focus:border-primary-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                Cliente
                            </label>
                            <input
                                type="text"
                                name="clientName"
                                value={filters.clientName}
                                onChange={handleFilterChange}
                                className="w-full rounded-md border dark:border-gray-600 px-3 py-2 text-gray-900 dark:text-white dark:bg-gray-700 focus:ring-primary-500 focus:border-primary-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                Placa
                            </label>
                            <input
                                type="text"
                                name="vehiclePlate"
                                value={filters.vehiclePlate}
                                onChange={handleFilterChange}
                                className="w-full rounded-md border dark:border-gray-600 px-3 py-2 text-gray-900 dark:text-white dark:bg-gray-700 focus:ring-primary-500 focus:border-primary-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                Estado
                            </label>
                            <select
                                name="status"
                                value={filters.status}
                                onChange={handleFilterChange}
                                className="w-full rounded-md border dark:border-gray-600 px-3 py-2 text-gray-900 dark:text-white dark:bg-gray-700 focus:ring-primary-500 focus:border-primary-500"
                            >
                                <option value="">Todos</option>
                                {orderStatuses.map(status => (
                                    <option key={status.value} value={status.value}>
                                        {status.label}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                Desde
                            </label>
                            <input
                                type="date"
                                name="dateFrom"
                                value={filters.dateFrom}
                                onChange={handleFilterChange}
                                className="w-full rounded-md border dark:border-gray-600 px-3 py-2 text-gray-900 dark:text-white dark:bg-gray-700 focus:ring-primary-500 focus:border-primary-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                Hasta
                            </label>
                            <input
                                type="date"
                                name="dateTo"
                                value={filters.dateTo}
                                onChange={handleFilterChange}
                                className="w-full rounded-md border dark:border-gray-600 px-3 py-2 text-gray-900 dark:text-white dark:bg-gray-700 focus:ring-primary-500 focus:border-primary-500"
                            />
                        </div>
                    </div>
                </div>
            )}

            {/* Mensajes de error */}
            {error && (
                <div className="mb-4 p-4 rounded-md bg-red-50 dark:bg-red-900/50 text-red-700 dark:text-red-200">
                    {error}
                </div>
            )}

            {/* Tabla de órdenes */}
            <DataTable
                columns={columns}
                data={orders}
                isLoading={loading}
                onEdit={handleEdit}
                onView={handleView}
                emptyMessage="No se encontraron órdenes"
            />

            {/* Modales */}
            {isModalOpen && (
                viewMode === 'view' ? (
                    <ViewModal />
                ) : (
                    <OrderForm
                        isOpen={isModalOpen}
                        onClose={handleCloseModal}
                        onOrderCreated={handleOrderSaved}
                        orderData={selectedOrder}
                    />
                )
            )}
        </div>
    );
};

export default OrderList;