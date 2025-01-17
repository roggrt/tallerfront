import api from './api';

const getAll = async () => {
    const response = await api.get('/service-orders');
    return response.data;
};

const getById = async (id) => {
    const response = await api.get(`/service-orders/${id}`);
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

const getByClient = async (clientId) => {
    const response = await api.get(`/service-orders/client/${clientId}`);
    return response.data;
};

const addService = async (orderId, serviceData) => {
    const response = await api.post(`/service-details/order/${orderId}`, serviceData);
    return response.data;
};

const orderService = {
    getAll,
    getById,
    create,
    update,
    updateStatus,
    getByClient,
    addService
};

export default orderService;