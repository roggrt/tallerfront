// // // // import React, { useState, useEffect } from 'react';
// // // // import { useNavigate } from 'react-router-dom';
// // // // import clientService from '../../services/client.service';
// // // // import { UserPlusIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
// // // //
// // // // const ClientList = () => {
// // // //     const [clients, setClients] = useState([]);
// // // //     const [loading, setLoading] = useState(true);
// // // //     const [searchTerm, setSearchTerm] = useState('');
// // // //     const navigate = useNavigate();
// // // //
// // // //     useEffect(() => {
// // // //         loadClients();
// // // //     }, []);
// // // //
// // // //     const loadClients = async () => {
// // // //         try {
// // // //             const data = await clientService.getAll();
// // // //             setClients(data);
// // // //             setLoading(false);
// // // //         } catch (error) {
// // // //             console.error('Error loading clients:', error);
// // // //             setLoading(false);
// // // //         }
// // // //     };
// // // //
// // // //     const handleSearch = async (e) => {
// // // //         setSearchTerm(e.target.value);
// // // //         if (e.target.value) {
// // // //             const data = await clientService.searchClients(e.target.value);
// // // //             setClients(data);
// // // //         } else {
// // // //             loadClients();
// // // //         }
// // // //     };
// // // //
// // // //     if (loading) {
// // // //         return (
// // // //             <div className="flex justify-center items-center h-64">
// // // //                 <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500"></div>
// // // //             </div>
// // // //         );
// // // //     }
// // // //
// // // //     return (
// // // //         <div className="space-y-6">
// // // //             <div className="flex justify-between items-center">
// // // //                 <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
// // // //                     Clientes
// // // //                 </h1>
// // // //                 <button
// // // //                     onClick={() => navigate('/clients/new')}
// // // //                     className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700"
// // // //                 >
// // // //                     <UserPlusIcon className="h-5 w-5 mr-2" />
// // // //                     Nuevo Cliente
// // // //                 </button>
// // // //             </div>
// // // //
// // // //             <div className="flex items-center px-4 py-2 bg-white dark:bg-gray-800 rounded-lg shadow">
// // // //                 <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
// // // //                 <input
// // // //                     type="text"
// // // //                     placeholder="Buscar clientes..."
// // // //                     className="ml-2 w-full bg-transparent border-0 focus:outline-none focus:ring-0 text-gray-900 dark:text-white placeholder-gray-500"
// // // //                     value={searchTerm}
// // // //                     onChange={handleSearch}
// // // //                 />
// // // //             </div>
// // // //
// // // //             <div className="bg-white dark:bg-gray-800 shadow overflow-hidden rounded-lg">
// // // //                 <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
// // // //                     <thead className="bg-gray-50 dark:bg-gray-700">
// // // //                     <tr>
// // // //                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
// // // //                             Nombre
// // // //                         </th>
// // // //                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
// // // //                             Teléfono
// // // //                         </th>
// // // //                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
// // // //                             Email
// // // //                         </th>
// // // //                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
// // // //                             Identificación
// // // //                         </th>
// // // //                         <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
// // // //                             Acciones
// // // //                         </th>
// // // //                     </tr>
// // // //                     </thead>
// // // //                     <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
// // // //                     {clients.map((client) => (
// // // //                         <tr key={client.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
// // // //                             <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
// // // //                                 {client.name}
// // // //                             </td>
// // // //                             <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
// // // //                                 {client.phone}
// // // //                             </td>
// // // //                             <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
// // // //                                 {client.email}
// // // //                             </td>
// // // //                             <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
// // // //                                 {client.identification_number}
// // // //                             </td>
// // // //                             <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
// // // //                                 <button
// // // //                                     onClick={() => navigate(`/clients/${client.id}`)}
// // // //                                     className="text-primary-600 hover:text-primary-900 dark:text-primary-400 dark:hover:text-primary-300"
// // // //                                 >
// // // //                                     Editar
// // // //                                 </button>
// // // //                             </td>
// // // //                         </tr>
// // // //                     ))}
// // // //                     </tbody>
// // // //                 </table>
// // // //             </div>
// // // //         </div>
// // // //     );
// // // // };
// // // //
// // // // export default ClientList;
// // //
// // // import React, { useState, useEffect } from 'react';
// // // import { UserPlusIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
// // // import clientService from '../../services/client.service';
// // // import ClientForm from './ClientForm';
// // //
// // // const ClientList = () => {
// // //     const [clients, setClients] = useState([]);
// // //     const [loading, setLoading] = useState(true);
// // //     const [searchTerm, setSearchTerm] = useState('');
// // //     const [isModalOpen, setIsModalOpen] = useState(false);
// // //     const [error, setError] = useState(null);
// // //
// // //     useEffect(() => {
// // //         loadClients();
// // //     }, []);
// // //
// // //     const loadClients = async () => {
// // //         try {
// // //             setLoading(true);
// // //             const data = await clientService.getAll();
// // //             setClients(data);
// // //             setError(null);
// // //         } catch (err) {
// // //             console.error('Error al cargar clientes:', err);
// // //             setError('No se pudieron cargar los clientes');
// // //         } finally {
// // //             setLoading(false);
// // //         }
// // //     };
// // //
// // //     const handleSearch = async (e) => {
// // //         const value = e.target.value;
// // //         setSearchTerm(value);
// // //
// // //         try {
// // //             setLoading(true);
// // //             if (value.trim()) {
// // //                 const data = await clientService.searchClients(value);
// // //                 setClients(data);
// // //             } else {
// // //                 await loadClients();
// // //             }
// // //         } catch (err) {
// // //             setError('Error en la búsqueda');
// // //         } finally {
// // //             setLoading(false);
// // //         }
// // //     };
// // //
// // //     const handleClientCreated = async (newClient) => {
// // //         await loadClients();
// // //         setIsModalOpen(false);
// // //     };
// // //
// // //     if (loading) {
// // //         return (
// // //             <div className="min-h-screen flex justify-center items-center">
// // //                 <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 dark:border-white"></div>
// // //             </div>
// // //         );
// // //     }
// // //
// // //     return (
// // //         <div className="space-y-6 p-6">
// // //             {/* Header y botón de nuevo cliente */}
// // //             <div className="flex justify-between items-center">
// // //                 <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
// // //                     Clientes
// // //                 </h1>
// // //                 <button
// // //                     onClick={() => setIsModalOpen(true)}
// // //                     className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
// // //                 >
// // //                     <UserPlusIcon className="h-5 w-5 mr-2" />
// // //                     Nuevo Cliente
// // //                 </button>
// // //             </div>
// // //
// // //             {/* Barra de búsqueda */}
// // //             <div className="flex items-center px-4 py-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
// // //                 <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
// // //                 <input
// // //                     type="text"
// // //                     placeholder="Buscar clientes..."
// // //                     className="ml-2 flex-1 border-none focus:outline-none focus:ring-0 bg-transparent text-gray-900 dark:text-white placeholder-gray-500"
// // //                     value={searchTerm}
// // //                     onChange={handleSearch}
// // //                 />
// // //             </div>
// // //
// // //             {/* Mensaje de error */}
// // //             {error && (
// // //                 <div className="bg-red-50 dark:bg-red-900 text-red-600 dark:text-red-200 p-4 rounded-md">
// // //                     {error}
// // //                 </div>
// // //             )}
// // //
// // //             {/* Tabla de clientes */}
// // //             <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden">
// // //                 <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
// // //                     <thead className="bg-gray-50 dark:bg-gray-700">
// // //                     <tr>
// // //                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
// // //                             Identificación
// // //                         </th>
// // //                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
// // //                             Nombre
// // //                         </th>
// // //                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
// // //                             Teléfono
// // //                         </th>
// // //                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
// // //                             Email
// // //                         </th>
// // //                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
// // //                             Acciones
// // //                         </th>
// // //                     </tr>
// // //                     </thead>
// // //                     <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
// // //                     {clients.length > 0 ? (
// // //                         clients.map((client) => (
// // //                             <tr key={client.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
// // //                                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
// // //                                     {client.identification_number}
// // //                                 </td>
// // //                                 <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
// // //                                     {client.name}
// // //                                 </td>
// // //                                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
// // //                                     {client.phone}
// // //                                 </td>
// // //                                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
// // //                                     {client.email}
// // //                                 </td>
// // //                                 <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
// // //                                     <button
// // //                                         onClick={() => setIsModalOpen(true)}
// // //                                         className="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300 mr-4"
// // //                                     >
// // //                                         Editar
// // //                                     </button>
// // //                                     <button
// // //                                         onClick={() => {/* Implementar vista detallada */}}
// // //                                         className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
// // //                                     >
// // //                                         Ver detalles
// // //                                     </button>
// // //                                 </td>
// // //                             </tr>
// // //                         ))
// // //                     ) : (
// // //                         <tr>
// // //                             <td colSpan="5" className="px-6 py-4 text-center text-gray-500 dark:text-gray-400">
// // //                                 No se encontraron clientes
// // //                             </td>
// // //                         </tr>
// // //                     )}
// // //                     </tbody>
// // //                 </table>
// // //             </div>
// // //
// // //             {/* Modal de Cliente */}
// // //             <ClientForm
// // //                 isOpen={isModalOpen}
// // //                 onClose={() => setIsModalOpen(false)}
// // //                 onClientCreated={handleClientCreated}
// // //             />
// // //         </div>
// // //     );
// // // };
// // //
// // // export default ClientList;
// //
// // import React, { useState, useEffect } from 'react';
// // import { UserPlusIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
// // import clientService from '../../services/client.service';
// // import ClientForm from './ClientForm';
// //
// // const ClientList = () => {
// //     const [clients, setClients] = useState([]);
// //     const [loading, setLoading] = useState(true);
// //     const [searchTerm, setSearchTerm] = useState('');
// //     const [isModalOpen, setIsModalOpen] = useState(false);
// //     const [selectedClient, setSelectedClient] = useState(null);
// //     const [viewMode, setViewMode] = useState('list'); // 'list', 'edit', 'view'
// //     const [error, setError] = useState(null);
// //     const [currentPage, setCurrentPage] = useState(1);
// //     const [itemsPerPage] = useState(10);
// //
// //     useEffect(() => {
// //         loadClients();
// //     }, []);
// //
// //     const loadClients = async () => {
// //         try {
// //             setLoading(true);
// //             setError(null);
// //             const response = await clientService.getAll();
// //             setClients(response);
// //         } catch (err) {
// //             console.error('Error al cargar clientes:', err);
// //             setError('Error al cargar la lista de clientes');
// //         } finally {
// //             setLoading(false);
// //         }
// //     };
// //
// //     const handleSearch = async (e) => {
// //         const value = e.target.value;
// //         setSearchTerm(value);
// //         try {
// //             setLoading(true);
// //             if (value.trim()) {
// //                 const response = await clientService.searchClients(value);
// //                 setClients(response);
// //             } else {
// //                 await loadClients();
// //             }
// //         } catch (error) {
// //             setError('Error en la búsqueda');
// //         } finally {
// //             setLoading(false);
// //         }
// //     };
// //
// //     const handleCreateNew = () => {
// //         setSelectedClient(null);
// //         setViewMode('edit');
// //         setIsModalOpen(true);
// //     };
// //
// //     const handleEdit = (client) => {
// //         setSelectedClient(client);
// //         setViewMode('edit');
// //         setIsModalOpen(true);
// //     };
// //
// //     const handleView = (client) => {
// //         setSelectedClient(client);
// //         setViewMode('view');
// //         setIsModalOpen(true);
// //     };
// //
// //     const handleCloseModal = () => {
// //         setIsModalOpen(false);
// //         setSelectedClient(null);
// //         setViewMode('list');
// //     };
// //
// //     const handleClientSaved = async () => {
// //         await loadClients();
// //         handleCloseModal();
// //     };
// //
// //     // Paginación
// //     const indexOfLastItem = currentPage * itemsPerPage;
// //     const indexOfFirstItem = indexOfLastItem - itemsPerPage;
// //     const currentClients = clients.slice(indexOfFirstItem, indexOfLastItem);
// //     const totalPages = Math.ceil(clients.length / itemsPerPage);
// //
// //     const paginate = (pageNumber) => setCurrentPage(pageNumber);
// //
// //     if (loading) {
// //         return (
// //             <div className="min-h-screen flex justify-center items-center">
// //                 <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 dark:border-white"></div>
// //             </div>
// //         );
// //     }
// //
// //     const ViewModal = () => (
// //         <div className="fixed inset-0 z-50 overflow-y-auto">
// //             <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" onClick={handleCloseModal}></div>
// //             <div className="flex min-h-full items-center justify-center p-4">
// //                 <div className="relative bg-white dark:bg-gray-800 rounded-lg w-full max-w-md p-6">
// //                     <div className="flex justify-between items-center mb-4">
// //                         <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Detalles del Cliente</h2>
// //                         <button onClick={handleCloseModal} className="text-gray-500 hover:text-gray-700">
// //                             <span className="text-2xl">×</span>
// //                         </button>
// //                     </div>
// //                     <div className="space-y-4">
// //                         <div>
// //                             <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Nombre</p>
// //                             <p className="mt-1 text-gray-900 dark:text-white">{selectedClient?.name}</p>
// //                         </div>
// //                         <div>
// //                             <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Identificación</p>
// //                             <p className="mt-1 text-gray-900 dark:text-white">{selectedClient?.identification_number}</p>
// //                         </div>
// //                         <div>
// //                             <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Teléfono</p>
// //                             <p className="mt-1 text-gray-900 dark:text-white">{selectedClient?.phone}</p>
// //                         </div>
// //                         <div>
// //                             <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Email</p>
// //                             <p className="mt-1 text-gray-900 dark:text-white">{selectedClient?.email}</p>
// //                         </div>
// //                         <button
// //                             onClick={handleCloseModal}
// //                             className="mt-6 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white dark:bg-gray-700 text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
// //                         >
// //                             Cerrar
// //                         </button>
// //                     </div>
// //                 </div>
// //             </div>
// //         </div>
// //     );
// //
// //     return (
// //         <div className="space-y-6 p-6">
// //             {/* Header y botón de nuevo cliente */}
// //             <div className="flex justify-between items-center">
// //                 <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
// //                     Clientes
// //                 </h1>
// //                 <button
// //                     onClick={handleCreateNew}
// //                     className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
// //                 >
// //                     <UserPlusIcon className="h-5 w-5 mr-2" />
// //                     Nuevo Cliente
// //                 </button>
// //             </div>
// //
// //             {/* Barra de búsqueda */}
// //             <div className="flex items-center px-4 py-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
// //                 <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
// //                 <input
// //                     type="text"
// //                     placeholder="Buscar clientes..."
// //                     className="ml-2 flex-1 border-none focus:outline-none focus:ring-0 bg-transparent text-gray-900 dark:text-white placeholder-gray-500"
// //                     value={searchTerm}
// //                     onChange={handleSearch}
// //                 />
// //             </div>
// //
// //             {/* Mensaje de error */}
// //             {error && (
// //                 <div className="bg-red-50 dark:bg-red-900 text-red-600 dark:text-red-200 p-4 rounded-md">
// //                     {error}
// //                 </div>
// //             )}
// //
// //             {/* Tabla de clientes */}
// //             <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden">
// //                 <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
// //                     <thead className="bg-gray-50 dark:bg-gray-700">
// //                     <tr>
// //                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
// //                             Identificación
// //                         </th>
// //                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
// //                             Nombre
// //                         </th>
// //                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
// //                             Teléfono
// //                         </th>
// //                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
// //                             Email
// //                         </th>
// //                         <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
// //                             Acciones
// //                         </th>
// //                     </tr>
// //                     </thead>
// //                     <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
// //                     {currentClients.length > 0 ? (
// //                         currentClients.map((client) => (
// //                             <tr key={client.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
// //                                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
// //                                     {client.identification_number}
// //                                 </td>
// //                                 <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
// //                                     {client.name}
// //                                 </td>
// //                                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
// //                                     {client.phone}
// //                                 </td>
// //                                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
// //                                     {client.email}
// //                                 </td>
// //                                 <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-right">
// //                                     <button
// //                                         onClick={() => handleEdit(client)}
// //                                         className="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300 mr-4"
// //                                     >
// //                                         Editar
// //                                     </button>
// //                                     <button
// //                                         onClick={() => handleView(client)}
// //                                         className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
// //                                     >
// //                                         Ver detalles
// //                                     </button>
// //                                 </td>
// //                             </tr>
// //                         ))
// //                     ) : (
// //                         <tr>
// //                             <td colSpan="5" className="px-6 py-4 text-center text-gray-500 dark:text-gray-400">
// //                                 No se encontraron clientes
// //                             </td>
// //                         </tr>
// //                     )}
// //                     </tbody>
// //                 </table>
// //             </div>
// //
// //             {/* Paginación */}
// //             {clients.length > itemsPerPage && (
// //                 <div className="flex justify-center mt-4">
// //                     <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
// //                         <button
// //                             onClick={() => paginate(currentPage - 1)}
// //                             disabled={currentPage === 1}
// //                             className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white dark:bg-gray-800 text-sm font-medium text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-700"
// //                         >
// //                             Anterior
// //                         </button>
// //                         {[...Array(totalPages)].map((_, index) => (
// //                             <button
// //                                 key={index}
// //                                 onClick={() => paginate(index + 1)}
// //                                 className={`relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium ${
// //                                     currentPage === index + 1
// //                                         ? 'z-10 bg-blue-50 dark:bg-blue-900 border-blue-500 text-blue-600 dark:text-blue-200'
// //                                         : 'bg-white dark:bg-gray-800 text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-700'
// //                                 }`}
// //                             >
// //                                 {index + 1}
// //                             </button>
// //                         ))}
// //                         <button
// //                             onClick={() => paginate(currentPage + 1)}
// //                             disabled={currentPage === totalPages}
// //                             className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white dark:bg-gray-800 text-sm font-medium text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-700"
// //                         >
// //                             Siguiente
// //                         </button>
// //                     </nav>
// //                 </div>
// //             )}
// //
// //             {/* Modales */}
// //             {viewMode === 'view' ? (
// //                 <ViewModal />
// //             ) : (
// //                 <ClientForm
// //                     isOpen={isModalOpen}
// //                     onClose={handleCloseModal}
// //                     onClientCreated={handleClientSaved}
// //                     clientData={selectedClient}
// //                 />
// //             )}
// //         </div>
// //     );
// // };
// //
// // export default ClientList;
//
// import React, { useState, useEffect } from 'react';
// import { UserPlusIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
// import clientService from '../../services/client.service';
// import ClientForm from './ClientForm';
// import { debounce } from 'lodash';
//
// const ClientList = () => {
//     const [clients, setClients] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [searchTerm, setSearchTerm] = useState('');
//     const [isModalOpen, setIsModalOpen] = useState(false);
//     const [selectedClient, setSelectedClient] = useState(null);
//     const [viewMode, setViewMode] = useState('list');
//     const [error, setError] = useState(null);
//
//     useEffect(() => {
//         loadClients();
//     }, []);
//
//     const loadClients = async () => {
//         try {
//             setLoading(true);
//             setError(null);
//             const response = await clientService.getAll();
//             setClients(response);
//         } catch (err) {
//             console.error('Error al cargar clientes:', err);
//             setError('Error al cargar la lista de clientes');
//         } finally {
//             setLoading(false);
//         }
//     };
//
//     // Búsqueda optimizada con debounce
//     const debouncedSearch = debounce(async (value) => {
//         try {
//             setLoading(true);
//             if (value.trim()) {
//                 const response = await clientService.searchClients(value);
//                 setClients(response);
//             } else {
//                 await loadClients();
//             }
//         } catch (error) {
//             setError('Error en la búsqueda');
//         } finally {
//             setLoading(false);
//         }
//     }, 500);
//
//     const handleSearch = (e) => {
//         const value = e.target.value;
//         setSearchTerm(value);
//         debouncedSearch(value);
//     };
//
//     const handleCreateNew = () => {
//         setSelectedClient(null);
//         setViewMode('edit');
//         setIsModalOpen(true);
//     };
//
//     const handleEdit = (client) => {
//         setSelectedClient(client);
//         setViewMode('edit');
//         setIsModalOpen(true);
//     };
//
//     const handleView = (client) => {
//         setSelectedClient(client);
//         setViewMode('view');
//         setIsModalOpen(true);
//     };
//
//     const handleCloseModal = () => {
//         setIsModalOpen(false);
//         setSelectedClient(null);
//         setViewMode('list');
//     };
//
//     const handleClientSaved = async () => {
//         await loadClients();
//         handleCloseModal();
//     };
//
//     if (loading) {
//         return (
//             <div className="min-h-screen flex justify-center items-center">
//                 <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 dark:border-white"></div>
//             </div>
//         );
//     }
//
//     const ViewModal = () => (
//         <div className="fixed inset-0 z-50 overflow-y-auto">
//             <div className="fixed inset-0 bg-black bg-opacity-50" onClick={handleCloseModal}></div>
//             <div className="flex min-h-full items-center justify-center p-4">
//                 <div className="relative bg-white dark:bg-gray-800 rounded-lg w-full max-w-md p-6">
//                     <div className="flex justify-between items-center mb-4">
//                         <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
//                             Detalles del Cliente
//                         </h2>
//                         <button onClick={handleCloseModal}>
//               <span className="text-2xl text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
//                 ×
//               </span>
//                         </button>
//                     </div>
//                     <div className="space-y-4">
//                         {selectedClient && Object.entries({
//                             'Nombre': selectedClient.name,
//                             'Identificación': selectedClient.identification_number,
//                             'Teléfono': selectedClient.phone,
//                             'Email': selectedClient.email
//                         }).map(([key, value]) => (
//                             <div key={key}>
//                                 <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{key}</p>
//                                 <p className="mt-1 text-gray-900 dark:text-white">{value || '-'}</p>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
//
//     return (
//         <div className="px-6 py-4 dark:bg-gray-900">
//             {/* Header */}
//             <div className="flex justify-between items-center mb-6">
//                 <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
//                     Clientes
//                 </h1>
//                 <button
//                     onClick={handleCreateNew}
//                     className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-800 hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none"
//                 >
//                     <UserPlusIcon className="h-5 w-5 mr-2" />
//                     Nuevo Cliente
//                 </button>
//             </div>
//
//             {/* Búsqueda */}
//             <div className="mb-6">
//                 <div className="relative">
//                     <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                         <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
//                     </div>
//                     <input
//                         type="text"
//                         placeholder="Buscar clientes..."
//                         className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md leading-5 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-gray-500"
//                         value={searchTerm}
//                         onChange={handleSearch}
//                     />
//                 </div>
//             </div>
//
//             {/* Mensajes de error */}
//             {error && (
//                 <div className="mb-6 p-4 rounded-md bg-red-50 dark:bg-red-900/50 text-red-700 dark:text-red-200">
//                     {error}
//                 </div>
//             )}
//
//             {/* Tabla */}
//             <div className="overflow-x-auto">
//                 <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
//                     <thead className="bg-gray-50 dark:bg-gray-800">
//                     <tr>
//                         {['Identificación', 'Nombre', 'Teléfono', 'Email', 'Acciones'].map((header) => (
//                             <th
//                                 key={header}
//                                 className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
//                             >
//                                 {header}
//                             </th>
//                         ))}
//                     </tr>
//                     </thead>
//                     <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
//                     {clients.length > 0 ? (
//                         clients.map((client) => (
//                             <tr key={client.id} className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
//                                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
//                                     {client.identification_number}
//                                 </td>
//                                 <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
//                                     {client.name}
//                                 </td>
//                                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
//                                     {client.phone}
//                                 </td>
//                                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
//                                     {client.email}
//                                 </td>
//                                 <td className="px-6 py-4 whitespace-nowrap text-sm text-right space-x-4">
//                                     <button
//                                         onClick={() => handleEdit(client)}
//                                         className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
//                                     >
//                                         Editar
//                                     </button>
//                                     <button
//                                         onClick={() => handleView(client)}
//                                         className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
//                                     >
//                                         Ver detalles
//                                     </button>
//                                 </td>
//                             </tr>
//                         ))
//                     ) : (
//                         <tr>
//                             <td colSpan="5" className="px-6 py-4 text-center text-gray-500 dark:text-gray-400">
//                                 No se encontraron clientes
//                             </td>
//                         </tr>
//                     )}
//                     </tbody>
//                 </table>
//             </div>
//
//             {/* Modales */}
//             {isModalOpen && (
//                 viewMode === 'view' ? (
//                     <ViewModal />
//                 ) : (
//                     <ClientForm
//                         isOpen={isModalOpen}
//                         onClose={handleCloseModal}
//                         onClientCreated={handleClientSaved}
//                         clientData={selectedClient}
//                     />
//                 )
//             )}
//         </div>
//     );
// };
//
// export default ClientList;

import React, { useState, useEffect } from 'react';
import { UserPlusIcon } from '@heroicons/react/24/outline';
import clientService from '../../services/client.service';
import ClientForm from './ClientForm';
import DataTable from '../../components/tables/DataTable';
import { debounce } from 'lodash';

const ClientList = () => {
    const [clients, setClients] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedClient, setSelectedClient] = useState(null);
    const [viewMode, setViewMode] = useState('list');
    const [error, setError] = useState(null);

    const columns = [
        { key: 'identification_number', header: 'Identificación' },
        { key: 'name', header: 'Nombre' },
        { key: 'phone', header: 'Teléfono' },
        { key: 'email', header: 'Email' }
    ];

    useEffect(() => {
        loadClients();
    }, []);

    const loadClients = async () => {
        try {
            setLoading(true);
            setError(null);
            const response = await clientService.getAll();
            setClients(response);
        } catch (err) {
            console.error('Error al cargar clientes:', err);
            setError('Error al cargar la lista de clientes');
        } finally {
            setLoading(false);
        }
    };

    const debouncedSearch = debounce(async (value) => {
        try {
            setLoading(true);
            if (value.trim()) {
                const response = await clientService.searchClients(value);
                setClients(response);
            } else {
                await loadClients();
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
        setSelectedClient(null);
        setViewMode('edit');
        setIsModalOpen(true);
    };

    const handleEdit = (client) => {
        setSelectedClient(client);
        setViewMode('edit');
        setIsModalOpen(true);
    };

    const handleView = (client) => {
        setSelectedClient(client);
        setViewMode('view');
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedClient(null);
        setViewMode('list');
    };

    const handleClientSaved = async () => {
        await loadClients();
        handleCloseModal();
    };

    const ViewModal = () => (
        <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="fixed inset-0 bg-black bg-opacity-50" onClick={handleCloseModal}></div>
            <div className="flex min-h-full items-center justify-center p-4">
                <div className="relative bg-white dark:bg-gray-800 rounded-lg w-full max-w-md p-6">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                            Detalles del Cliente
                        </h2>
                        <button onClick={handleCloseModal}>
             <span className="text-2xl text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
               ×
             </span>
                        </button>
                    </div>
                    <div className="space-y-4">
                        {selectedClient && Object.entries({
                            'Nombre': selectedClient.name,
                            'Identificación': selectedClient.identification_number,
                            'Teléfono': selectedClient.phone,
                            'Email': selectedClient.email
                        }).map(([key, value]) => (
                            <div key={key}>
                                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{key}</p>
                                <p className="mt-1 text-gray-900 dark:text-white">{value || '-'}</p>
                            </div>
                        ))}
                        <button
                            onClick={handleCloseModal}
                            className="mt-6 w-full px-4 py-2 bg-gray-100 text-gray-800 rounded-md hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
                        >
                            Cerrar
                        </button>
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
                    Clientes
                </h1>
                <button
                    onClick={handleCreateNew}
                    className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-800 hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none"
                >
                    <UserPlusIcon className="h-5 w-5 mr-2" />
                    Nuevo Cliente
                </button>
            </div>

            {/* Error Message */}
            {error && (
                <div className="mb-4 p-4 rounded-md bg-red-50 dark:bg-red-900/50 text-red-700 dark:text-red-200">
                    {error}
                </div>
            )}

            {/* Table Component */}
            <DataTable
                columns={columns}
                data={clients}
                isLoading={loading}
                searchTerm={searchTerm}
                onSearch={handleSearch}
                onEdit={handleEdit}
                onView={handleView}
                emptyMessage="No se encontraron clientes"
            />

            {/* Modals */}
            {isModalOpen && (
                viewMode === 'view' ? (
                    <ViewModal />
                ) : (
                    <ClientForm
                        isOpen={isModalOpen}
                        onClose={handleCloseModal}
                        onClientCreated={handleClientSaved}
                        clientData={selectedClient}
                    />
                )
            )}
        </div>
    );
};

export default ClientList;