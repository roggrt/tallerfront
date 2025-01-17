// import React, { useState } from 'react';
// import clientService from '../../services/client.service';
//
// const ClientForm = ({ isOpen, onClose, onClientCreated }) => {
//     const [formData, setFormData] = useState({
//         name: '',
//         phone: '',
//         email: '',
//         identification_number: ''
//     });
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState('');
//
//     if (!isOpen) return null;
//
//     const handleChange = (e) => {
//         setFormData({
//             ...formData,
//             [e.target.name]: e.target.value
//         });
//     };
//
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setLoading(true);
//         setError('');
//
//         try {
//             const newClient = await clientService.create(formData);
//             onClientCreated(newClient);
//             onClose();
//         } catch (error) {
//             setError('Error al crear el cliente');
//         } finally {
//             setLoading(false);
//         }
//     };
//
//     return (
//         <div className="fixed inset-0 z-50 overflow-y-auto">
//             <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose}></div>
//             <div className="flex min-h-full items-center justify-center p-4">
//                 <div className="relative bg-white dark:bg-gray-800 rounded-lg w-full max-w-md">
//                     <div className="flex justify-between items-center p-4 border-b dark:border-gray-700">
//                         <h2 className="text-lg font-semibold">Nuevo Cliente</h2>
//                         <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
//                             ✕
//                         </button>
//                     </div>
//
//                     <form onSubmit={handleSubmit} className="p-4 space-y-4">
//                         {error && (
//                             <div className="text-red-600 text-sm">{error}</div>
//                         )}
//
//                         <div>
//                             <label className="block text-sm font-medium mb-1">Nombre</label>
//                             <input
//                                 type="text"
//                                 name="name"
//                                 value={formData.name}
//                                 onChange={handleChange}
//                                 className="w-full p-2 border rounded"
//                                 required
//                             />
//                         </div>
//
//                         <div>
//                             <label className="block text-sm font-medium mb-1">Teléfono</label>
//                             <input
//                                 type="text"
//                                 name="phone"
//                                 value={formData.phone}
//                                 onChange={handleChange}
//                                 className="w-full p-2 border rounded"
//                             />
//                         </div>
//
//                         <div>
//                             <label className="block text-sm font-medium mb-1">Email</label>
//                             <input
//                                 type="email"
//                                 name="email"
//                                 value={formData.email}
//                                 onChange={handleChange}
//                                 className="w-full p-2 border rounded"
//                             />
//                         </div>
//
//                         <div>
//                             <label className="block text-sm font-medium mb-1">Identificación</label>
//                             <input
//                                 type="text"
//                                 name="identification_number"
//                                 value={formData.identification_number}
//                                 onChange={handleChange}
//                                 className="w-full p-2 border rounded"
//                                 required
//                             />
//                         </div>
//
//                         <div className="flex justify-end gap-2 mt-4">
//                             <button
//                                 type="button"
//                                 onClick={onClose}
//                                 className="px-4 py-2 text-sm border rounded"
//                             >
//                                 Cancelar
//                             </button>
//                             <button
//                                 type="submit"
//                                 disabled={loading}
//                                 className="px-4 py-2 text-sm bg-blue-600 text-white rounded disabled:opacity-50"
//                             >
//                                 {loading ? 'Guardando...' : 'Guardar'}
//                             </button>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// };
//
// export default ClientForm;

import React, { useState, useEffect } from 'react';
import clientService from '../../services/client.service';

const ClientForm = ({ isOpen, onClose, onClientCreated, clientData }) => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        identification_number: ''
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        console.log('ClientData recibido:', clientData); // Debug
        if (clientData) {
            setFormData({
                name: clientData.name || '',
                phone: clientData.phone || '',
                email: clientData.email || '',
                identification_number: clientData.identification_number || ''
            });
        } else {
            setFormData({
                name: '',
                phone: '',
                email: '',
                identification_number: ''
            });
        }
    }, [clientData, isOpen]);

    if (!isOpen) return null;

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            let result;
            if (clientData && clientData.id) {
                console.log('Actualizando cliente:', clientData.id, formData); // Debug
                result = await clientService.update(clientData.id, formData);
            } else {
                console.log('Creando nuevo cliente:', formData); // Debug
                result = await clientService.create(formData);
            }
            onClientCreated(result);
            onClose();
        } catch (error) {
            console.error('Error en operación:', error); // Debug
            setError(`Error al ${clientData ? 'actualizar' : 'crear'} el cliente`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose}></div>
            <div className="flex min-h-full items-center justify-center p-4">
                <div className="relative bg-white dark:bg-gray-800 rounded-lg w-full max-w-md">
                    <div className="flex justify-between items-center p-4 border-b dark:border-gray-700">
                        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                            {clientData ? 'Editar Cliente' : 'Nuevo Cliente'}
                        </h2>
                        <button
                            onClick={onClose}
                            className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
                        >
                            <span className="text-2xl">×</span>
                        </button>
                    </div>

                    <form onSubmit={handleSubmit} className="p-4 space-y-4">
                        {error && (
                            <div className="bg-red-50 dark:bg-red-900 text-red-600 dark:text-red-200 p-3 rounded">
                                {error}
                            </div>
                        )}

                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                Nombre
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full rounded-md border dark:border-gray-600 px-3 py-2 text-gray-900 dark:text-white dark:bg-gray-700 focus:ring-primary-500 focus:border-primary-500"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                Teléfono
                            </label>
                            <input
                                type="text"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full rounded-md border dark:border-gray-600 px-3 py-2 text-gray-900 dark:text-white dark:bg-gray-700 focus:ring-primary-500 focus:border-primary-500"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full rounded-md border dark:border-gray-600 px-3 py-2 text-gray-900 dark:text-white dark:bg-gray-700 focus:ring-primary-500 focus:border-primary-500"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                Identificación
                            </label>
                            <input
                                type="text"
                                name="identification_number"
                                value={formData.identification_number}
                                onChange={handleChange}
                                className="w-full rounded-md border dark:border-gray-600 px-3 py-2 text-gray-900 dark:text-white dark:bg-gray-700 focus:ring-primary-500 focus:border-primary-500"
                                required
                            />
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
                                {loading ? 'Guardando...' : clientData ? 'Actualizar' : 'Crear'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ClientForm;