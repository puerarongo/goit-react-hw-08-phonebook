import axios from 'axios';

const axiosBaseQuery =
  ({ baseUrl } = { baseUrl: '' }) =>
  async ({ url = '/contacts', method, body }) => {
    if (method === 'POST') {
      await axios.post(url, body);
    }
    try {
      const result = await axios({ url: `${baseUrl}${url}`, method, body });
      return { data: result.data };
    } catch (axiosError) {
      let err = axiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };

export default axiosBaseQuery;
