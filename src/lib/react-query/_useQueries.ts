import { useQueryClient, useQueries } from "@tanstack/react-query";
import { AxiosError } from "axios";
import axios from "@/lib/axios";
import { queryConfig } from "@/config";

const _useQueries = <T>({ path, queries,
  options }: _useQueriesProps<T>) => {
  const queryClient = useQueryClient();
  return useQueries({
    queries: queries?.map(query => {
      const _path = `${path}/${query.id}`
      if (!query.id || !Number(query.id) || Number(query.id) < 1) {
        return {
          queryKey: [],
          queryFn: undefined,
          initialData: undefined,
          enabled: false,
          retry: false
        };
      }
      return {
        queryKey: [_path],
        queryFn: () => axios.get(_path)
          .then(res => res.data as T)
          .catch((error: AxiosError) => {
            if (error.response?.status === 404) {
              queryClient.setQueryData([_path], []);
            }
            if (error.response)
              throw error.response;
            throw error;
          }),
        ...queryConfig.defaultOptions,
        ...options,
        initialData: query.id ? query as T : undefined,
      }
    }) || []
  })
}

export default _useQueries;