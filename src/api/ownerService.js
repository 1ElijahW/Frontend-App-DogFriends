import api from './apiConfig';

export async function getOwners() {
  try {
    const response = await api.get('/owners');
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getOwnerById(id) {
  try {
    const response = await api.get(`/owners/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function updateOwner(id, ownerData) {
  try {
    const response = await api.put(`/owners/${id}`, ownerData);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function deleteOwner(id) {
  try {
    const response = await api.delete(`/owners/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}