// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import vehicleService from '../../services/vehicle.service';
// import { TruckIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
//
// const VehicleList = () => {
//     const [vehicles, setVehicles] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [searchTerm, setSearchTerm] = useState('');
//     const navigate = useNavigate();
//
//     useEffect(() => {
//         loadVehicles();
//     }, []);
//
//     const loadVehicles = async () => {
//         try {
//             const data = await vehicleService.getAll();
//             setVehicles(data);
//             setLoading(false);
//         } catch (error) {
//             console.error('Error loading vehicles:', error);
//             setLoading(false);
//         }
//     };
//
//     const handleSearch = async (e) => {
//         setSearchTerm(e.target.value);
//         if (e.target.value) {
//             const data = await vehicleService.searchByPlate(e.target.value);
//             setVehicles(data);
//         } else {
//             loadVehicles();
//         }
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
//                     Vehículos
//                 </h1>
//                 <button
//                     onClick={() => navigate('/vehicles/new')}
//                     className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700"
//                 >
//                     <TruckIcon className="h-5 w-5 mr-2" />
//                     Nuevo Vehículo
//                 </button>
//             </div>
//
//             <div className="flex items-center px-4 py-2 bg-white dark:bg-gray-800 rounded-lg shadow">
//                 <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
//                 <input
//                     type="text"
//                     placeholder="Buscar por placa..."
//                     className="ml-2 w-full bg-transparent border-0 focus:outline-none focus:ring-0 text-gray-900 dark:text-white placeholder-gray-500"
//                     value={searchTerm}
//                     onChange={handleSearch}
//                 />
//             </div>
//
//             <div className="bg-white dark:bg-gray-800 shadow overflow-hidden rounded-lg">
//                 <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
//                     <thead className="bg-gray-50 dark:bg-gray-700">
//                     <tr>
//                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
//                             Placa
//                         </th>
//                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
//                             Marca/Modelo
//                         </th>
//                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
//                             Cliente
//                         </th>
//                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
//                             Kilometraje
//                         </th>
//                         <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
//                             Acciones
//                         </th>
//                     </tr>
//                     </thead>
//                     <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
//                     {vehicles.map((vehicle) => (
//                         <tr key={vehicle.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
//                             <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
//                                 {vehicle.plate_number}
//                             </td>
//                             <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
//                                 {vehicle.brand} {vehicle.model}
//                             </td>
//                             <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
//                                 {vehicle.client_name}
//                             </td>
//                             <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
//                                 {vehicle.mileage} km
//                             </td>
//                             <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
//                                 <button
//                                     onClick={() => navigate(`/vehicles/${vehicle.id}`)}
//                                     className="text-primary-600 hover:text-primary-900 dark:text-primary-400 dark:hover:text-primary-300"
//                                 >
//                                     Editar
//                                 </button>
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
// export default VehicleList;

import React, { useState, useEffect } from 'react';
import { TruckIcon } from '@heroicons/react/24/outline';
import vehicleService from '../../services/vehicle.service';
import VehicleForm from './VehicleForm';
import DataTable from '../../components/tables/DataTable';
import { debounce } from 'lodash';

const VehicleList = () => {
    const [vehicles, setVehicles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedVehicle, setSelectedVehicle] = useState(null);
    const [viewMode, setViewMode] = useState('list');
    const [error, setError] = useState(null);

    const columns = [
        { key: 'plate_number', header: 'Placa' },
        { key: 'brand', header: 'Marca' },
        { key: 'model', header: 'Modelo' },
        { key: 'client_name', header: 'Propietario' },
        { key: 'year', header: 'Año' },
        { key: 'color', header: 'Color' },
    ];

    useEffect(() => {
        loadVehicles();
    }, []);

    const loadVehicles = async () => {
        try {
            setLoading(true);
            setError(null);
            const response = await vehicleService.getAll();
            setVehicles(response);
        } catch (err) {
            console.error('Error al cargar vehículos:', err);
            setError('Error al cargar la lista de vehículos');
        } finally {
            setLoading(false);
        }
    };

    const debouncedSearch = debounce(async (value) => {
        try {
            setLoading(true);
            if (value.trim()) {
                const response = await vehicleService.searchByPlate(value);
                setVehicles(response);
            } else {
                await loadVehicles();
            }
        } catch (error) {
            setError('Error en la búsqueda');
        } finally {
            setLoading(false);
        }
    }, 500);

    const handleSearch = (value) => {
        setSearchTerm(value);
        debouncedSearch(value);
    };

    const handleCreateNew = () => {
        setSelectedVehicle(null);
        setViewMode('edit');
        setIsModalOpen(true);
    };

    const handleEdit = (vehicle) => {
        setSelectedVehicle(vehicle);
        setViewMode('edit');
        setIsModalOpen(true);
    };

    const handleView = (vehicle) => {
        setSelectedVehicle(vehicle);
        setViewMode('view');
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedVehicle(null);
        setViewMode('list');
    };

    const handleVehicleSaved = async () => {
        await loadVehicles();
        handleCloseModal();
    };

    const ViewModal = () => (
        <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="fixed inset-0 bg-black bg-opacity-50" onClick={handleCloseModal}></div>
            <div className="flex min-h-full items-center justify-center p-4">
                <div className="relative bg-white dark:bg-gray-800 rounded-lg w-full max-w-md p-6">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                            Detalles del Vehículo
                        </h2>
                        <button onClick={handleCloseModal}>
              <span className="text-2xl text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
                ×
              </span>
                        </button>
                    </div>
                    {selectedVehicle && (
                        <div className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Placa</p>
                                    <p className="mt-1 text-gray-900 dark:text-white">{selectedVehicle.plate_number}</p>
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Marca</p>
                                    <p className="mt-1 text-gray-900 dark:text-white">{selectedVehicle.brand}</p>
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Modelo</p>
                                    <p className="mt-1 text-gray-900 dark:text-white">{selectedVehicle.model}</p>
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Año</p>
                                    <p className="mt-1 text-gray-900 dark:text-white">{selectedVehicle.year}</p>
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Color</p>
                                    <p className="mt-1 text-gray-900 dark:text-white">{selectedVehicle.color}</p>
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Kilometraje</p>
                                    <p className="mt-1 text-gray-900 dark:text-white">{selectedVehicle.mileage} km</p>
                                </div>
                                <div className="col-span-2">
                                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Propietario</p>
                                    <p className="mt-1 text-gray-900 dark:text-white">{selectedVehicle.client_name}</p>
                                </div>
                            </div>
                            <button
                                onClick={handleCloseModal}
                                className="mt-6 w-full px-4 py-2 bg-gray-100 text-gray-800 rounded-md hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
                            >
                                Cerrar
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
                    Vehículos
                </h1>
                <button
                    onClick={handleCreateNew}
                    className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-800 hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none"
                >
                    <TruckIcon className="h-5 w-5 mr-2" />
                    Nuevo Vehículo
                </button>
            </div>

            {error && (
                <div className="mb-4 p-4 rounded-md bg-red-50 dark:bg-red-900/50 text-red-700 dark:text-red-200">
                    {error}
                </div>
            )}

            <DataTable
                columns={columns}
                data={vehicles}
                isLoading={loading}
                searchTerm={searchTerm}
                onSearch={handleSearch}
                onEdit={handleEdit}
                onView={handleView}
                emptyMessage="No se encontraron vehículos"
            />

            {isModalOpen && (
                viewMode === 'view' ? (
                    <ViewModal />
                ) : (
                    <VehicleForm
                        isOpen={isModalOpen}
                        onClose={handleCloseModal}
                        onVehicleCreated={handleVehicleSaved}
                        vehicleData={selectedVehicle}
                    />
                )
            )}
        </div>
    );
};

export default VehicleList;