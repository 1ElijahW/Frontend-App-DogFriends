import api from './apiConfig';

export async function getDogs() {
  try {
    const response = await api.get('/dogs');
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getDogById(id) {
  try {
    const response = await api.get(`/dogs/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getDogByOwnerId(ownerId) {
  try {
    const response = await api.get(`/dogs/owner/${ownerId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function createDog(dogData) {
  try {
    const response = await api.post('/dogs', dogData);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function updateDog(id, dogData) {
  try {
    const response = await api.put(`/dogs/${id}`, dogData);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function deleteDog(id) {
  try {
    const response = await api.delete(`/dogs/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}