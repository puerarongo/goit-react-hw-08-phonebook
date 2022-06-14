import axios from 'axios';

const axiosBaseQuery =
  ({ baseUrl } = { baseUrl: '' }) =>
  async ({ url = '/contacts', method, body, params }) => {
    try {
      let result;
      if (method === 'POST') {
        result = await axios.post(url, body);
      } else {
        result = await axios({ url: baseUrl + url, method, body, params });
      }
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
