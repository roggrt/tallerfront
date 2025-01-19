import api from './api';

const getAll = async () => {
    const response = await api.get('/services');
    return response.data;
};

const getById = async (id) => {
    const response = await api.get(`/services/${id}`);
    return response.data;
};

const create = async (serviceData) => {
    const response = await api.post('/services', serviceData);
    return response.data;
};

const update = async (id, serviceData) => {
    const response = await api.put(`/services/${id}`, serviceData);
    return response.data;
};

const searchServices = async (term) => {
    const response = await api.get(`/search/services?term=${term}`);
    return response.data;
};

const serviceService = {
    getAll,
    getById,
    create,
    update,
    searchServices
};

export default serviceService;