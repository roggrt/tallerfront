// import React from 'react';
// import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
//
// const DataTable = ({
//                        columns,
//                        data,
//                        isLoading,
//                        searchTerm,
//                        onSearch,
//                        onEdit,
//                        onView,
//                        emptyMessage = "No se encontraron registros"
//                    }) => {
//     return (
//         <div>
//             {/* Search Bar */}
//             <div className="mb-4">
//                 <div className="relative">
//                     <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                         <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
//                     </div>
//                     <input
//                         type="text"
//                         placeholder="Buscar..."
//                         className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md leading-5 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-gray-500"
//                         value={searchTerm}
//                         onChange={(e) => onSearch(e.target.value)}
//                     />
//                 </div>
//             </div>
//
//             {/* Table */}
//             <div className="overflow-x-auto">
//                 <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
//                     <thead className="bg-gray-50 dark:bg-gray-800">
//                     <tr>
//                         {columns.map((column) => (
//                             <th
//                                 key={column.key}
//                                 className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
//                             >
//                                 {column.header}
//                             </th>
//                         ))}
//                         <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
//                             Acciones
//                         </th>
//                     </tr>
//                     </thead>
//                     <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
//                     {isLoading ? (
//                         <tr>
//                             <td colSpan={columns.length + 1} className="px-6 py-4 text-center">
//                                 <div className="flex justify-center">
//                                     <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 dark:border-white"></div>
//                                 </div>
//                             </td>
//                         </tr>
//                     ) : data.length > 0 ? (
//                         data.map((item) => (
//                             <tr key={item.id} className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
//                                 {columns.map((column) => (
//                                     <td
//                                         key={`${item.id}-${column.key}`}
//                                         className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white"
//                                     >
//                                         {item[column.key]}
//                                     </td>
//                                 ))}
//                                 <td className="px-6 py-4 whitespace-nowrap text-sm text-right space-x-4">
//                                     <button
//                                         onClick={() => onEdit(item)}
//                                         className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
//                                     >
//                                         Editar
//                                     </button>
//                                     <button
//                                         onClick={() => onView(item)}
//                                         className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
//                                     >
//                                         Ver detalles
//                                     </button>
//                                 </td>
//                             </tr>
//                         ))
//                     ) : (
//                         <tr>
//                             <td
//                                 colSpan={columns.length + 1}
//                                 className="px-6 py-4 text-center text-gray-500 dark:text-gray-400"
//                             >
//                                 {emptyMessage}
//                             </td>
//                         </tr>
//                     )}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// };
//
// export default DataTable;

import React from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const DataTable = ({
                       columns,
                       data,
                       isLoading,
                       searchTerm,
                       onSearch,
                       onEdit,
                       onView,
                       emptyMessage = "No se encontraron registros"
                   }) => {
    return (
        <div>
            {/* Search Bar */}
            <div className="mb-4">
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                        type="text"
                        placeholder="Buscar..."
                        className="block w-full pl-10 pr-3 py-2 border border-gray-200 dark:border-gray-700 rounded-lg leading-5 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-gray-500"
                        value={searchTerm}
                        onChange={(e) => onSearch(e.target.value)}
                    />
                </div>
            </div>

            {/* Table Container */}
            <div className="relative overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                        <tr className="border-b border-gray-200 dark:border-gray-700">
                            {columns.map((column) => (
                                <th
                                    key={column.key}
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                                >
                                    {column.header}
                                </th>
                            ))}
                            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                Acciones
                            </th>
                        </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                        {isLoading ? (
                            <tr>
                                <td colSpan={columns.length + 1} className="px-6 py-8">
                                    <div className="flex justify-center">
                                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 dark:border-white"></div>
                                    </div>
                                </td>
                            </tr>
                        ) : data.length > 0 ? (
                            data.map((item, index) => (
                                <tr
                                    key={item.id || index}
                                    className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors duration-150 ease-in-out"
                                >
                                    {columns.map((column) => (
                                        <td
                                            key={`${item.id}-${column.key}`}
                                            className="px-6 py-3.5 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300"
                                        >
                                            {item[column.key]}
                                        </td>
                                    ))}
                                    <td className="px-6 py-3.5 whitespace-nowrap text-sm text-right">
                                        <div className="flex justify-end space-x-3">
                                            <button
                                                onClick={() => onEdit(item)}
                                                className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-150"
                                            >
                                                Editar
                                            </button>
                                            <button
                                                onClick={() => onView(item)}
                                                className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-150"
                                            >
                                                Ver detalles
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td
                                    colSpan={columns.length + 1}
                                    className="px-6 py-8 text-center text-gray-500 dark:text-gray-400"
                                >
                                    {emptyMessage}
                                </td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default DataTable;