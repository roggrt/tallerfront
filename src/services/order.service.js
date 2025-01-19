// import api from './api';
//
// const getAll = async () => {
//     const response = await api.get('/service-orders');
//     return response.data;
// };
//
// const getById = async (id) => {
//     const response = await api.get(`/service-orders/${id}`);
//     return response.data;
// };
//
// const create = async (orderData) => {
//     const response = await api.post('/service-orders', orderData);
//     return response.data;
// };
//
// const update = async (id, orderData) => {
//     const response = await api.put(`/service-orders/${id}`, orderData);
//     return response.data;
// };
//
// const updateStatus = async (id, statusData) => {
//     const response = await api.put(`/service-orders/${id}/status`, statusData);
//     return response.data;
// };
//
// const getByClient = async (clientId) => {
//     const response = await api.get(`/service-orders/client/${clientId}`);
//     return response.data;
// };
//
// const addService = async (orderId, serviceData) => {
//     const response = await api.post(`/service-details/order/${orderId}`, serviceData);
//     return response.data;
// };
//
// const orderService = {
//     getAll,
//     getById,
//     create,
//     update,
//     updateStatus,
//     getByClient,
//     addService
// };
//
// export default orderService;import api from './api';
//
// const getAll = async () => {
//     const response = await api.get('/service-orders');
//     return response.data;
// };
//
// const getById = async (id) => {
//     const response = await api.get(`/service-orders/${id}`);
//     return response.data;
// };
//
// const getByClient = async (clientId) => {
//     const response = await api.get(`/service-orders/client/${clientId}`);
//     return response.data;
// };
//
// const getByVehicle = async (vehicleId) => {
//     const response = await api.get(`/service-orders/vehicle/${vehicleId}`);
//     return response.data;
// };
//
// const create = async (orderData) => {
//     const response = await api.post('/service-orders', orderData);
//     return response.data;
// };
//
// const update = async (id, orderData) => {
//     const response = await api.put(`/service-orders/${id}`, orderData);
//     return response.data;
// };
//
// const updateStatus = async (id, statusData) => {
//     const response = await api.put(`/service-orders/${id}/status`, statusData);
//     return response.data;
// };
//
// const searchOrders = async (searchParams) => {
//     const queryString = new URLSearchParams();
//
//     // Añadimos cada parámetro de búsqueda si existe
//     if (searchParams.orderNumber) queryString.append('order_number', searchParams.orderNumber);
//     if (searchParams.clientName) queryString.append('client_name', searchParams.clientName);
//     if (searchParams.vehiclePlate) queryString.append('vehicle_plate', searchParams.vehiclePlate);
//     if (searchParams.status) queryString.append('status', searchParams.status);
//     if (searchParams.dateFrom) queryString.append('date_from', searchParams.dateFrom);
//     if (searchParams.dateTo) queryString.append('date_to', searchParams.dateTo);
//
//     const response = await api.get(`/search/orders?${queryString.toString()}`);
//     return response.data;
// };
//
// const addService = async (orderId, serviceData) => {
//     const response = await api.post(`/service-orders/${orderId}/services`, serviceData);
//     return response.data;
// };
//
// const removeService = async (orderId, serviceId) => {
//     const response = await api.delete(`/service-orders/${orderId}/services/${serviceId}`);
//     return response.data;
// };
//
// const updateService = async (orderId, serviceId, serviceData) => {
//     const response = await api.put(`/service-orders/${orderId}/services/${serviceId}`, serviceData);
//     return response.data;
// };
//
// const orderService = {
//     getAll,
//     getById,
//     getByClient,
//     getByVehicle,
//     create,
//     update,
//     updateStatus,
//     searchOrders,
//     addService,
//     removeService,
//     updateService
// };
//
// export default orderService;

import api from './api';

const getAll = async () => {
    const response = await api.get('/service-orders');
    return response.data;
};

const getById = async (id) => {
    const response = await api.get(`/service-orders/${id}`);
    return response.data;
};

const getByClient = async (clientId) => {
    const response = await api.get(`/service-orders/client/${clientId}`);
    return response.data;
};

const getByVehicle = async (vehicleId) => {
    const response = await api.get(`/service-orders/vehicle/${vehicleId}`);
    return response.data;
};

const create = async (orderData) => {
    const response = await api.post('/service-orders', orderData);
    return response.data;
};

const update = async (id, orderData) => {
    const response = await api.put(`/service-orders/${id}`, orderData);
    return response.data;
};

const updateStatus = async (id, statusData) => {
    const response = await api.put(`/service-orders/${id}/status`, statusData);
    return response.data;
};

const searchOrders = async (searchParams) => {
    const queryString = new URLSearchParams();

    // Añadimos cada parámetro de búsqueda si existe
    if (searchParams.orderNumber) queryString.append('order_number', searchParams.orderNumber);
    if (searchParams.clientName) queryString.append('client_name', searchParams.clientName);
    if (searchParams.vehiclePlate) queryString.append('vehicle_plate', searchParams.vehiclePlate);
    if (searchParams.status) queryString.append('status', searchParams.status);
    if (searchParams.dateFrom) queryString.append('date_from', searchParams.dateFrom);
    if (searchParams.dateTo) queryString.append('date_to', searchParams.dateTo);

    const response = await api.get(`/search/orders?${queryString.toString()}`);
    return response.data;
};

const addService = async (orderId, serviceData) => {
    const response = await api.post(`/service-orders/${orderId}/services`, serviceData);
    return response.data;
};

const removeService = async (orderId, serviceId) => {
    const response = await api.delete(`/service-orders/${orderId}/services/${serviceId}`);
    return response.data;
};

const updateService = async (orderId, serviceId, serviceData) => {
    const response = await api.put(`/service-orders/${orderId}/services/${serviceId}`, serviceData);
    return response.data;
};

const orderService = {
    getAll,
    getById,
    getByClient,
    getByVehicle,
    create,
    update,
    updateStatus,
    searchOrders,
    addService,
    removeService,
    updateService
};

export default orderService;