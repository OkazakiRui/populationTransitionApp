import axios from 'axios';

/**
 * envファイルの有無を確認します。
 * @date 2022-03-06
 * @returns {{baseUrl: string; apiKey: string;}}
 */
const envConfirmation = (): {
  baseUrl: string;
  apiKey: string;
} => {
  if (!process.env.REACT_APP_ENDPOINT || !process.env.REACT_APP_API_KEY) {
    console.error('環境変数を確認してください');

    return { baseUrl: '', apiKey: '' };
  }

  return {
    baseUrl: process.env.REACT_APP_ENDPOINT,
    apiKey: process.env.REACT_APP_API_KEY,
  };
};

const { baseUrl, apiKey } = envConfirmation();

const apiClient = axios.create({
  baseURL: `${baseUrl}/api/v1`,
  headers: {
    'Content-Type': 'application/json',
    'X-API-KEY': apiKey,
  },
});

export default apiClient;
