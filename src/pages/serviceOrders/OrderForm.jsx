import React, { useState, useEffect } from 'react';
import { Tab } from '@headlessui/react';
import { ClipboardDocumentIcon, UserIcon, TruckIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/outline';
import orderService from '../../services/order.service';

import ClientVehicleSelector from './ClientVehicleSelector';

const OrderForm = ({ isOpen, onClose, onOrderCreated, orderData }) => {
    const [formData, setFormData] = useState({
        client_id: '',
        vehicle_id: '',
        entry_date: new Date().toISOString().split('T')[0],
        estimated_exit_date: '',
        mileage: '',
        fuel_level: 0,
        observations: '',
        initial_diagnosis: '',
        status: 'pending',
        services: []
    });

    const [currentTab, setCurrentTab] = useState(0);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        if (orderData) {
            setFormData({
                client_id: orderData.client_id || '',
                vehicle_id: orderData.vehicle_id || '',
                entry_date: orderData.entry_date?.split('T')[0] || new Date().toISOString().split('T')[0],
                estimated_exit_date: orderData.estimated_exit_date?.split('T')[0] || '',
                mileage: orderData.mileage || '',
                fuel_level: orderData.fuel_level || 0,
                observations: orderData.observations || '',
                initial_diagnosis: orderData.initial_diagnosis || '',
                status: orderData.status || 'pending',
                services: orderData.services || []
            });
        }
    }, [orderData]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.client_id || !formData.vehicle_id) {
            setError('Por favor seleccione un cliente y un vehículo');
            return;
        }

        setLoading(true);
        setError('');

        try {
            let result;
            if (orderData) {
                result = await orderService.update(orderData.id, formData);
            } else {
                result = await orderService.create(formData);
            }
            onOrderCreated(result);
            onClose();
        } catch (error) {
            setError(`Error al ${orderData ? 'actualizar' : 'crear'} la orden`);
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose}></div>
            <div className="flex min-h-full items-center justify-center p-4">
                <div className="relative bg-white dark:bg-gray-800 rounded-lg w-full max-w-4xl">
                    <div className="flex justify-between items-center p-4 border-b dark:border-gray-700">
                        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                            {orderData ? 'Editar Orden de Servicio' : 'Nueva Orden de Servicio'}
                        </h2>
                        <button onClick={onClose}>
              <span className="text-2xl text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
                ×
              </span>
                        </button>
                    </div>

                    <div className="p-6">
                        <Tab.Group selectedIndex={currentTab} onChange={setCurrentTab}>
                            <Tab.List className="flex space-x-1 rounded-xl bg-gray-100 dark:bg-gray-700 p-1">
                                <Tab
                                    className={({ selected }) =>
                                        `w-full rounded-lg py-2.5 text-sm font-medium leading-5
                    ${selected
                                            ? 'bg-white dark:bg-gray-600 text-gray-900 dark:text-white shadow'
                                            : 'text-gray-500 dark:text-gray-400 hover:bg-white/[0.12] hover:text-gray-900'
                                        }`
                                    }
                                >
                                    <div className="flex items-center justify-center space-x-2">
                                        <ClipboardDocumentIcon className="h-5 w-5" />
                                        <span>Información Básica</span>
                                    </div>
                                </Tab>
                                <Tab
                                    className={({ selected }) =>
                                        `w-full rounded-lg py-2.5 text-sm font-medium leading-5
                    ${selected
                                            ? 'bg-white dark:bg-gray-600 text-gray-900 dark:text-white shadow'
                                            : 'text-gray-500 dark:text-gray-400 hover:bg-white/[0.12] hover:text-gray-900'
                                        }`
                                    }
                                >
                                    <div className="flex items-center justify-center space-x-2">
                                        <WrenchScrewdriverIcon className="h-5 w-5" />
                                        <span>Servicios</span>
                                    </div>
                                </Tab>
                            </Tab.List>

                            <Tab.Panels className="mt-4">
                                <Tab.Panel>
                                    {/* Primera pestaña: Información básica */}
                                    <div className="space-y-4">
                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                                    Fecha de Ingreso
                                                </label>
                                                <input
                                                    type="date"
                                                    name="entry_date"
                                                    value={formData.entry_date}
                                                    onChange={handleChange}
                                                    className="w-full rounded-md border dark:border-gray-600 px-3 py-2 text-gray-900 dark:text-white dark:bg-gray-700 focus:ring-primary-500 focus:border-primary-500"
                                                    required
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                                    Fecha Estimada de Salida
                                                </label>
                                                <input
                                                    type="date"
                                                    name="estimated_exit_date"
                                                    value={formData.estimated_exit_date}
                                                    onChange={handleChange}
                                                    className="w-full rounded-md border dark:border-gray-600 px-3 py-2 text-gray-900 dark:text-white dark:bg-gray-700 focus:ring-primary-500 focus:border-primary-500"
                                                />
                                            </div>
                                        </div>

                                        {/* Aquí irá el ClientVehicleSelector */}
                                        {/*<div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">*/}
                                        {/*    <p className="text-sm text-gray-500 dark:text-gray-400">*/}
                                        {/*        Selector de Cliente y Vehículo pendiente de implementar*/}
                                        {/*    </p>*/}
                                        {/*</div>*/}

                                        <ClientVehicleSelector
                                            selectedClientId={formData.client_id}
                                            selectedVehicleId={formData.vehicle_id}
                                            onClientSelect={(client) => {
                                                setFormData(prev => ({
                                                    ...prev,
                                                    client_id: client.id,
                                                    vehicle_id: '' // Resetear vehículo cuando cambia el cliente
                                                }));
                                            }}
                                            onVehicleSelect={(vehicle) => {
                                                setFormData(prev => ({
                                                    ...prev,
                                                    vehicle_id: vehicle.id
                                                }));
                                            }}
                                        />

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
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                                    Nivel de Combustible
                                                </label>
                                                <input
                                                    type="range"
                                                    name="fuel_level"
                                                    min="0"
                                                    max="100"
                                                    value={formData.fuel_level}
                                                    onChange={handleChange}
                                                    className="w-full"
                                                />
                                                <div className="text-center text-sm text-gray-600 dark:text-gray-400">
                                                    {formData.fuel_level}%
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                                Observaciones
                                            </label>
                                            <textarea
                                                name="observations"
                                                value={formData.observations}
                                                onChange={handleChange}
                                                rows={3}
                                                className="w-full rounded-md border dark:border-gray-600 px-3 py-2 text-gray-900 dark:text-white dark:bg-gray-700 focus:ring-primary-500 focus:border-primary-500"
                                                placeholder="Observaciones generales del vehículo..."
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                                Diagnóstico Inicial
                                            </label>
                                            <textarea
                                                name="initial_diagnosis"
                                                value={formData.initial_diagnosis}
                                                onChange={handleChange}
                                                rows={3}
                                                className="w-full rounded-md border dark:border-gray-600 px-3 py-2 text-gray-900 dark:text-white dark:bg-gray-700 focus:ring-primary-500 focus:border-primary-500"
                                                placeholder="Diagnóstico inicial..."
                                            />
                                        </div>
                                    </div>
                                </Tab.Panel>

                                <Tab.Panel>
                                    {/* Segunda pestaña: Servicios */}
                                    <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                                        <p className="text-sm text-gray-500 dark:text-gray-400">
                                            Selector de Servicios pendiente de implementar
                                        </p>
                                    </div>
                                </Tab.Panel>
                            </Tab.Panels>
                        </Tab.Group>

                        {error && (
                            <div className="mt-4 p-4 rounded-md bg-red-50 dark:bg-red-900/50 text-red-700 dark:text-red-200">
                                {error}
                            </div>
                        )}

                        <div className="flex justify-end gap-2 mt-6">
                            <button
                                type="button"
                                onClick={onClose}
                                className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-600"
                            >
                                Cancelar
                            </button>
                            <button
                                type="button"
                                onClick={handleSubmit}
                                disabled={loading}
                                className="px-4 py-2 text-sm font-medium text-white bg-primary-600 rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50"
                            >
                                {loading ? 'Guardando...' : orderData ? 'Actualizar' : 'Crear'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderForm;