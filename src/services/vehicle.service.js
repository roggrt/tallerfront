import api from './api';

const getAll = async () => {
    const response = await api.get('/vehicles');
    return response.data;
};

const getById = async (id) => {
    const response = await api.get(`/vehicles/${id}`);
    return response.data;
};

const getByClient = async (clientId) => {
    const response = await api.get(`/vehicles/client/${clientId}`);
    return response.data;
};

const create = async (vehicleData) => {
    const response = await api.post('/vehicles', vehicleData);
    return response.data;
};

const update = async (id, vehicleData) => {
    const response = await api.put(`/vehicles/${id}`, vehicleData);
    return response.data;
};

const searchByPlate = async (plate) => {
    const response = await api.get(`/search/vehicles?plate=${plate}`);
    return response.data;
};

const vehicleService = {
    getAll,
    getById,
    getByClient,
    create,
    update,
    searchByPlate
};

export default vehicleService;