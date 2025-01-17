// import React, { useState, useEffect } from 'react';
// import vehicleService from '../../services/vehicle.service';
// import clientService from '../../services/client.service';
//
// const VehicleForm = ({ isOpen, onClose, onVehicleCreated, vehicleData }) => {
//     const [clients, setClients] = useState([]);
//     const [formData, setFormData] = useState({
//         client_id: '',
//         brand: '',
//         model: '',
//         year: new Date().getFullYear(),
//         color: '',
//         plate_number: '',
//         mileage: '',
//         vin: ''
//     });
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState('');
//     const [clientSearchTerm, setClientSearchTerm] = useState('');
//     const [showClientSearch, setShowClientSearch] = useState(false);
//
//     useEffect(() => {
//         loadClients();
//         if (vehicleData) {
//             setFormData({
//                 client_id: vehicleData.client_id || '',
//                 brand: vehicleData.brand || '',
//                 model: vehicleData.model || '',
//                 year: vehicleData.year || new Date().getFullYear(),
//                 color: vehicleData.color || '',
//                 plate_number: vehicleData.plate_number || '',
//                 mileage: vehicleData.mileage || '',
//                 vin: vehicleData.vin || ''
//             });
//         }
//     }, [vehicleData]);
//
//     const loadClients = async () => {
//         try {
//             const response = await clientService.getAll();
//             setClients(response);
//         } catch (error) {
//             console.error('Error cargando clientes:', error);
//         }
//     };
//
//     const searchClients = async (term) => {
//         try {
//             const response = await clientService.searchClients(term);
//             setClients(response);
//         } catch (error) {
//             console.error('Error buscando clientes:', error);
//         }
//     };
//
//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData(prev => ({
//             ...prev,
//             [name]: value
//         }));
//     };
//
//     const handleClientSearch = (e) => {
//         const value = e.target.value;
//         setClientSearchTerm(value);
//         if (value.trim()) {
//             searchClients(value);
//         }
//     };
//
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setLoading(true);
//         setError('');
//
//         try {
//             let result;
//             if (vehicleData) {
//                 result = await vehicleService.update(vehicleData.id, formData);
//             } else {
//                 result = await vehicleService.create(formData);
//             }
//             onVehicleCreated(result);
//             onClose();
//         } catch (error) {
//             setError(`Error al ${vehicleData ? 'actualizar' : 'crear'} el vehículo`);
//         } finally {
//             setLoading(false);
//         }
//     };
//
//     if (!isOpen) return null;
//
//     return (
//         <div className="fixed inset-0 z-50 overflow-y-auto">
//             <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose}></div>
//             <div className="flex min-h-full items-center justify-center p-4">
//                 <div className="relative bg-white dark:bg-gray-800 rounded-lg w-full max-w-md">
//                     <div className="flex justify-between items-center p-4 border-b dark:border-gray-700">
//                         <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
//                             {vehicleData ? 'Editar Vehículo' : 'Nuevo Vehículo'}
//                         </h2>
//                         <button onClick={onClose}>
//               <span className="text-2xl text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
//                 ×
//               </span>
//                         </button>
//                     </div>
//
//                     <form onSubmit={handleSubmit} className="p-4 space-y-4">
//                         {error && (
//                             <div className="bg-red-50 dark:bg-red-900 text-red-600 dark:text-red-200 p-3 rounded">
//                                 {error}
//                             </div>
//                         )}
//
//                         {/* Cliente */}
//                         <div className="relative">
//                             <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
//                                 Cliente
//                             </label>
//                             <div className="relative">
//                                 <select
//                                     name="client_id"
//                                     value={formData.client_id}
//                                     onChange={handleChange}
//                                     className="w-full rounded-md border dark:border-gray-600 px-3 py-2 text-gray-900 dark:text-white dark:bg-gray-700 focus:ring-primary-500 focus:border-primary-500"
//                                     required
//                                 >
//                                     <option value="">Seleccione un cliente</option>
//                                     {clients.map(client => (
//                                         <option key={client.id} value={client.id}>
//                                             {client.name} - {client.identification_number}
//                                         </option>
//                                     ))}
//                                 </select>
//                             </div>
//                         </div>
//
//                         {/* Placa */}
//                         <div>
//                             <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
//                                 Placa
//                             </label>
//                             <input
//                                 type="text"
//                                 name="plate_number"
//                                 value={formData.plate_number}
//                                 onChange={handleChange}
//                                 className="w-full rounded-md border dark:border-gray-600 px-3 py-2 text-gray-900 dark:text-white dark:bg-gray-700 focus:ring-primary-500 focus:border-primary-500"
//                                 required
//                             />
//                         </div>
//
//                         {/* Marca y Modelo */}
//                         <div className="grid grid-cols-2 gap-4">
//                             <div>
//                                 <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
//                                     Marca
//                                 </label>
//                                 <input
//                                     type="text"
//                                     name="brand"
//                                     value={formData.brand}
//                                     onChange={handleChange}
//                                     className="w-full rounded-md border dark:border-gray-600 px-3 py-2 text-gray-900 dark:text-white dark:bg-gray-700 focus:ring-primary-500 focus:border-primary-500"
//                                     required
//                                 />
//                             </div>
//                             <div>
//                                 <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
//                                     Modelo
//                                 </label>
//                                 <input
//                                     type="text"
//                                     name="model"
//                                     value={formData.model}
//                                     onChange={handleChange}
//                                     className="w-full rounded-md border dark:border-gray-600 px-3 py-2 text-gray-900 dark:text-white dark:bg-gray-700 focus:ring-primary-500 focus:border-primary-500"
//                                     required
//                                 />
//                             </div>
//                         </div>
//
//                         {/* Año y Color */}
//                         <div className="grid grid-cols-2 gap-4">
//                             <div>
//                                 <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
//                                     Año
//                                 </label>
//                                 <input
//                                     type="number"
//                                     name="year"
//                                     value={formData.year}
//                                     onChange={handleChange}
//                                     className="w-full rounded-md border dark:border-gray-600 px-3 py-2 text-gray-900 dark:text-white dark:bg-gray-700 focus:ring-primary-500 focus:border-primary-500"
//                                     min="1900"
//                                     max={new Date().getFullYear() + 1}
//                                     required
//                                 />
//                             </div>
//                             <div>
//                                 <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
//                                     Color
//                                 </label>
//                                 <input
//                                     type="text"
//                                     name="color"
//                                     value={formData.color}
//                                     onChange={handleChange}
//                                     className="w-full rounded-md border dark:border-gray-600 px-3 py-2 text-gray-900 dark:text-white dark:bg-gray-700 focus:ring-primary-500 focus:border-primary-500"
//                                     required
//                                 />
//                             </div>
//                         </div>
//
//                         {/* Kilometraje y VIN */}
//                         <div className="grid grid-cols-2 gap-4">
//                             <div>
//                                 <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
//                                     Kilometraje
//                                 </label>
//                                 <input
//                                     type="number"
//                                     name="mileage"
//                                     value={formData.mileage}
//                                     onChange={handleChange}
//                                     className="w-full rounded-md border dark:border-gray-600 px-3 py-2 text-gray-900 dark:text-white dark:bg-gray-700 focus:ring-primary-500 focus:border-primary-500"
//                                     min="0"
//                                 />
//                             </div>
//                             <div>
//                                 <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
//                                     VIN
//                                 </label>
//                                 <input
//                                     type="text"
//                                     name="vin"
//                                     value={formData.vin}
//                                     onChange={handleChange}
//                                     className="w-full rounded-md border dark:border-gray-600 px-3 py-2 text-gray-900 dark:text-white dark:bg-gray-700 focus:ring-primary-500 focus:border-primary-500"
//                                 />
//                             </div>
//                         </div>
//
//                         <div className="flex justify-end gap-2 mt-6">
//                             <button
//                                 type="button"
//                                 onClick={onClose}
//                                 className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-600"
//                             >
//                                 Cancelar
//                             </button>
//                             <button
//                                 type="submit"
//                                 disabled={loading}
//                                 className="px-4 py-2 text-sm font-medium text-white bg-primary-600 rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50"
//                             >
//                                 {loading ? 'Guardando...' : vehicleData ? 'Actualizar' : 'Crear'}
//                             </button>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// };
//
// export default VehicleForm;

import React, { useState, useEffect, useRef } from 'react';
import vehicleService from '../../services/vehicle.service';
import clientService from '../../services/client.service';
import ClientForm from '../clients/ClientForm';
import { UserPlusIcon } from '@heroicons/react/24/outline';
import { debounce } from 'lodash';

const VehicleForm = ({ isOpen, onClose, onVehicleCreated, vehicleData }) => {
    const [formData, setFormData] = useState({
        client_id: '',
        brand: '',
        model: '',
        year: new Date().getFullYear(),
        color: '',
        plate_number: '',
        mileage: '',
        vin: ''
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [clientSearchTerm, setClientSearchTerm] = useState('');
    const [filteredClients, setFilteredClients] = useState([]);
    const [showClientDropdown, setShowClientDropdown] = useState(false);
    const [selectedClient, setSelectedClient] = useState(null);
    const [isClientFormOpen, setIsClientFormOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        if (vehicleData) {
            setFormData({
                client_id: vehicleData.client_id || '',
                brand: vehicleData.brand || '',
                model: vehicleData.model || '',
                year: vehicleData.year || new Date().getFullYear(),
                color: vehicleData.color || '',
                plate_number: vehicleData.plate_number || '',
                mileage: vehicleData.mileage || '',
                vin: vehicleData.vin || ''
            });
            if(vehicleData.client_name) {
                setSelectedClient({
                    id: vehicleData.client_id,
                    name: vehicleData.client_name
                });
                setClientSearchTerm(vehicleData.client_name);
            }
        }
    }, [vehicleData]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowClientDropdown(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const searchClients = debounce(async (searchTerm) => {
        if (!searchTerm.trim()) {
            setFilteredClients([]);
            return;
        }

        try {
            const response = await clientService.searchClients(searchTerm);
            setFilteredClients(response);
            setShowClientDropdown(true);
        } catch (error) {
            console.error('Error buscando clientes:', error);
        }
    }, 300);

    const handleClientSearch = (e) => {
        const value = e.target.value;
        setClientSearchTerm(value);
        searchClients(value);
    };

    const selectClient = (client) => {
        setSelectedClient(client);
        setClientSearchTerm(client.name);
        setFormData(prev => ({ ...prev, client_id: client.id }));
        setShowClientDropdown(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.client_id) {
            setError('Por favor seleccione un cliente');
            return;
        }

        setLoading(true);
        setError('');

        try {
            let result;
            if (vehicleData) {
                result = await vehicleService.update(vehicleData.id, formData);
            } else {
                result = await vehicleService.create(formData);
            }
            onVehicleCreated(result);
            onClose();
        } catch (error) {
            setError(`Error al ${vehicleData ? 'actualizar' : 'crear'} el vehículo`);
        } finally {
            setLoading(false);
        }
    };

    const handleClientCreated = (newClient) => {
        selectClient({
            id: newClient.id,
            name: newClient.name
        });
        setIsClientFormOpen(false);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose}></div>
            <div className="flex min-h-full items-center justify-center p-4">
                <div className="relative bg-white dark:bg-gray-800 rounded-lg w-full max-w-md">
                    <div className="flex justify-between items-center p-4 border-b dark:border-gray-700">
                        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                            {vehicleData ? 'Editar Vehículo' : 'Nuevo Vehículo'}
                        </h2>
                        <button onClick={onClose}>
             <span className="text-2xl text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
               ×
             </span>
                        </button>
                    </div>

                    <form onSubmit={handleSubmit} className="p-4 space-y-4">
                        {error && (
                            <div className="bg-red-50 dark:bg-red-900 text-red-600 dark:text-red-200 p-3 rounded">
                                {error}
                            </div>
                        )}

                        {/* Cliente Autocomplete */}
                        <div className="relative" ref={dropdownRef}>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                Cliente
                            </label>
                            <div className="flex gap-2">
                                <div className="relative flex-1">
                                    <input
                                        type="text"
                                        value={clientSearchTerm}
                                        onChange={handleClientSearch}
                                        placeholder="Buscar cliente..."
                                        className="w-full rounded-md border dark:border-gray-600 px-3 py-2 text-gray-900 dark:text-white dark:bg-gray-700 focus:ring-primary-500 focus:border-primary-500"
                                    />
                                    {showClientDropdown && filteredClients.length > 0 && (
                                        <div className="absolute z-10 w-full mt-1 bg-white dark:bg-gray-700 rounded-md shadow-lg max-h-60 overflow-auto">
                                            {filteredClients.map(client => (
                                                <div
                                                    key={client.id}
                                                    className="px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600"
                                                    onClick={() => selectClient(client)}
                                                >
                                                    <div className="font-medium">{client.name}</div>
                                                    <div className="text-sm text-gray-500 dark:text-gray-400">
                                                        {client.identification_number}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                                <button
                                    type="button"
                                    onClick={() => setIsClientFormOpen(true)}
                                    className="px-3 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-md"
                                    title="Crear nuevo cliente"
                                >
                                    <UserPlusIcon className="h-5 w-5" />
                                </button>
                            </div>
                        </div>

                        {/* Placa */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                Placa
                            </label>
                            <input
                                type="text"
                                name="plate_number"
                                value={formData.plate_number}
                                onChange={handleChange}
                                className="w-full rounded-md border dark:border-gray-600 px-3 py-2 text-gray-900 dark:text-white dark:bg-gray-700 focus:ring-primary-500 focus:border-primary-500"
                                required
                            />
                        </div>

                        {/* Marca y Modelo */}
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                    Marca
                                </label>
                                <input
                                    type="text"
                                    name="brand"
                                    value={formData.brand}
                                    onChange={handleChange}
                                    className="w-full rounded-md border dark:border-gray-600 px-3 py-2 text-gray-900 dark:text-white dark:bg-gray-700 focus:ring-primary-500 focus:border-primary-500"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                    Modelo
                                </label>
                                <input
                                    type="text"
                                    name="model"
                                    value={formData.model}
                                    onChange={handleChange}
                                    className="w-full rounded-md border dark:border-gray-600 px-3 py-2 text-gray-900 dark:text-white dark:bg-gray-700 focus:ring-primary-500 focus:border-primary-500"
                                    required
                                />
                            </div>
                        </div>

                        {/* Año y Color */}
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                    Año
                                </label>
                                <input
                                    type="number"
                                    name="year"
                                    value={formData.year}
                                    onChange={handleChange}
                                    className="w-full rounded-md border dark:border-gray-600 px-3 py-2 text-gray-900 dark:text-white dark:bg-gray-700 focus:ring-primary-500 focus:border-primary-500"
                                    min="1900"
                                    max={new Date().getFullYear() + 1}
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                    Color
                                </label>
                                <input
                                    type="text"
                                    name="color"
                                    value={formData.color}
                                    onChange={handleChange}
                                    className="w-full rounded-md border dark:border-gray-600 px-3 py-2 text-gray-900 dark:text-white dark:bg-gray-700 focus:ring-primary-500 focus:border-primary-500"
                                    required
                                />
                            </div>
                        </div>

                        {/* Kilometraje y VIN */}
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                    Kilometraje
                                </label>
                                <input
                                    type="number"
                                    name="mileage"
                                    value={formData.mileage}
                                    onChange={handleChange}
                                    className="w-full rounded-md border dark:border-gray-600 px-3 py-2 text-gray-900 dark:text-white dark:bg-gray-700 focus:ring-primary-500 focus:border-primary-500"
                                    min="0"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                    VIN
                                </label>
                                <input
                                    type="text"
                                    name="vin"
                                    value={formData.vin}
                                    onChange={handleChange}
                                    className="w-full rounded-md border dark:border-gray-600 px-3 py-2 text-gray-900 dark:text-white dark:bg-gray-700 focus:ring-primary-500 focus:border-primary-500"
                                />
                            </div>
                        </div>

                        <div className="flex justify-end gap-2 mt-6">
                            <button
                                type="button"
                                onClick={onClose}
                                className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-600"
                            >
                                Cancelar
                            </button>
                            <button
                                type="submit"
                                disabled={loading}
                                className="px-4 py-2 text-sm font-medium text-white bg-primary-600 rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50"
                            >
                                {loading ? 'Guardando...' : vehicleData ? 'Actualizar' : 'Crear'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            {/* Modal para crear nuevo cliente */}
            {isClientFormOpen && (
                <ClientForm
                    isOpen={isClientFormOpen}
                    onClose={() => setIsClientFormOpen(false)}
                    onClientCreated={handleClientCreated}
                />
            )}
        </div>
    );
};

export default VehicleForm;