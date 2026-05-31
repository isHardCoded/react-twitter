import { API_URL } from "../constants/api-url";

export const USERS_SERVICE = {
  getAll: async () => {
    try {
      const response = await fetch(`${API_URL}/users`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  },
  getById: async (id: string) => {
    try {
      const response = await fetch(`${API_URL}/users/${id}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  }
}