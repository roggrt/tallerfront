import api from './api';

const getAll = async () => {
    const response = await api.get('/clients');
    return response.data;
};

const getById = async (id) => {
    const response = await api.get(`/clients/${id}`);
    return response.data;
};

const create = async (clientData) => {
    const response = await api.post('/clients', clientData);
    return response.data;
};

const update = async (id, clientData) => {
    const response = await api.put(`/clients/${id}`, clientData);
    return response.data;
};

const searchClients = async (term) => {
    const response = await api.get(`/search/clients?term=${term}`);
    return response.data;
};

const clientService = {
    getAll,
    getById,
    create,
    update,
    searchClients
};

export default clientService;