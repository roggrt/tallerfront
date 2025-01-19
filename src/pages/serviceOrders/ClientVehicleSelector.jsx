import React, { useState, useEffect, useRef } from 'react';
import { UserPlusIcon, TruckIcon } from '@heroicons/react/24/outline';
import clientService from '../../services/client.service';
import vehicleService from '../../services/vehicle.service';
import ClientForm from '../clients/ClientForm';
import VehicleForm from '../vehicles/VehicleForm';

const ClientVehicleSelector = ({
                                   onClientSelect,
                                   onVehicleSelect,
                                   selectedClientId,
                                   selectedVehicleId
                               }) => {
    const [clientSearchTerm, setClientSearchTerm] = useState('');
    const [vehicleSearchTerm, setVehicleSearchTerm] = useState('');
    const [filteredClients, setFilteredClients] = useState([]);
    const [clientVehicles, setClientVehicles] = useState([]);
    const [showClientDropdown, setShowClientDropdown] = useState(false);
    const [showVehicleDropdown, setShowVehicleDropdown] = useState(false);
    const [selectedClient, setSelectedClient] = useState(null);
    const [selectedVehicle, setSelectedVehicle] = useState(null);
    const [isClientFormOpen, setIsClientFormOpen] = useState(false);
    const [isVehicleFormOpen, setIsVehicleFormOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    const clientDropdownRef = useRef(null);
    const vehicleDropdownRef = useRef(null);

    useEffect(() => {
        if (selectedClientId) {
            loadClientDetails(selectedClientId);
        }
    }, [selectedClientId]);

    useEffect(() => {
        if (selectedVehicleId) {
            loadVehicleDetails(selectedVehicleId);
        }
    }, [selectedVehicleId]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (clientDropdownRef.current && !clientDropdownRef.current.contains(event.target)) {
                setShowClientDropdown(false);
            }
            if (vehicleDropdownRef.current && !vehicleDropdownRef.current.contains(event.target)) {
                setShowVehicleDropdown(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const loadClientDetails = async (clientId) => {
        try {
            const client = await clientService.getById(clientId);
            setSelectedClient(client);
            loadClientVehicles(clientId);
        } catch (error) {
            console.error('Error loading client details:', error);
        }
    };

    const loadVehicleDetails = async (vehicleId) => {
        try {
            const vehicle = await vehicleService.getById(vehicleId);
            setSelectedVehicle(vehicle);
        } catch (error) {
            console.error('Error loading vehicle details:', error);
        }
    };

    const searchClients = async (term) => {
        if (!term.trim()) {
            setFilteredClients([]);
            return;
        }

        try {
            const response = await clientService.searchClients(term);
            setFilteredClients(response);
            setShowClientDropdown(true);
        } catch (error) {
            console.error('Error searching clients:', error);
        }
    };

    const loadClientVehicles = async (clientId) => {
        try {
            const vehicles = await vehicleService.getByClient(clientId);
            setClientVehicles(vehicles);
        } catch (error) {
            console.error('Error loading client vehicles:', error);
        }
    };

    const handleClientSearch = (e) => {
        const value = e.target.value;
        setClientSearchTerm(value);
        searchClients(value);
    };

    const handleVehicleSearch = (e) => {
        const value = e.target.value;
        setVehicleSearchTerm(value);
        if (!value.trim()) {
            setShowVehicleDropdown(false);
        } else {
            setShowVehicleDropdown(true);
        }
    };

    const selectClient = (client) => {
        setSelectedClient(client);
        setClientSearchTerm(client.name);
        setShowClientDropdown(false);
        onClientSelect(client);
        loadClientVehicles(client.id);
        setSelectedVehicle(null);
        setVehicleSearchTerm('');
    };

    const selectVehicle = (vehicle) => {
        setSelectedVehicle(vehicle);
        setVehicleSearchTerm(`${vehicle.brand} ${vehicle.model} - ${vehicle.plate_number}`);
        setShowVehicleDropdown(false);
        onVehicleSelect(vehicle);
    };

    const handleClientCreated = (newClient) => {
        selectClient(newClient);
        setIsClientFormOpen(false);
    };

    const handleVehicleCreated = (newVehicle) => {
        selectVehicle(newVehicle);
        setIsVehicleFormOpen(false);
    };

    return (
        <div className="space-y-4">
            {/* Cliente Selector */}
            <div ref={clientDropdownRef}>
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

            {/* Vehículo Selector */}
            {selectedClient && (
                <div ref={vehicleDropdownRef}>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Vehículo
                    </label>
                    <div className="flex gap-2">
                        <div className="relative flex-1">
                            <input
                                type="text"
                                value={vehicleSearchTerm}
                                onChange={handleVehicleSearch}
                                placeholder="Seleccionar vehículo..."
                                className="w-full rounded-md border dark:border-gray-600 px-3 py-2 text-gray-900 dark:text-white dark:bg-gray-700 focus:ring-primary-500 focus:border-primary-500"
                            />
                            {showVehicleDropdown && clientVehicles.length > 0 && (
                                <div className="absolute z-10 w-full mt-1 bg-white dark:bg-gray-700 rounded-md shadow-lg max-h-60 overflow-auto">
                                    {clientVehicles
                                        .filter(vehicle =>
                                            `${vehicle.brand} ${vehicle.model} ${vehicle.plate_number}`
                                                .toLowerCase()
                                                .includes(vehicleSearchTerm.toLowerCase())
                                        )
                                        .map(vehicle => (
                                            <div
                                                key={vehicle.id}
                                                className="px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600"
                                                onClick={() => selectVehicle(vehicle)}
                                            >
                                                <div className="font-medium">
                                                    {vehicle.brand} {vehicle.model}
                                                </div>
                                                <div className="text-sm text-gray-500 dark:text-gray-400">
                                                    Placa: {vehicle.plate_number}
                                                </div>
                                            </div>
                                        ))}
                                </div>
                            )}
                        </div>
                        <button
                            type="button"
                            onClick={() => setIsVehicleFormOpen(true)}
                            className="px-3 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-md"
                            title="Crear nuevo vehículo"
                        >
                            <TruckIcon className="h-5 w-5" />
                        </button>
                    </div>
                </div>
            )}

            {/* Modales */}
            {isClientFormOpen && (
                <ClientForm
                    isOpen={isClientFormOpen}
                    onClose={() => setIsClientFormOpen(false)}
                    onClientCreated={handleClientCreated}
                />
            )}

            {isVehicleFormOpen && (
                <VehicleForm
                    isOpen={isVehicleFormOpen}
                    onClose={() => setIsVehicleFormOpen(false)}
                    onVehicleCreated={handleVehicleCreated}
                    preSelectedClient={selectedClient}
                />
            )}
        </div>
    );
};

export default ClientVehicleSelector;