import axios from 'axios';

const apiClient = axios.create({
  baseURL: VUE_APP_API_BASE_URL, // Replace with your backend URL and endpoint
  headers: {
    'Content-Type': 'application/json',
  },
});
// 요청 인터셉터 추가
apiClient.interceptors.request.use(
    (config) => {
      // localStorage에서 accessToken을 가져옵니다.
      const token = localStorage.getItem('accessToken');
      
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  
  export default apiClient;
