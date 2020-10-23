import useSWR from 'swr';
import api from '../services/api';

function useApi<Data, Error = any>(url: string) {
  const { data, error } = useSWR<Data, Error>(url, async (url) => {
    const response = await api.get(url);

    return response.data;
  });

  return { data, error };
}

export default useApi;
