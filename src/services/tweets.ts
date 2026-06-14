import { API_URL } from "../constants/api-url";

export const TWEETS_SERVICE = {
  getAll: async () => {
    try {
      const response = await fetch(`${API_URL}/tweets`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  },

  create: async (data: any) => {
    try {
      await fetch(`${API_URL}/tweets`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });
    } catch (error) {
      console.error(error);
    }
  }
}