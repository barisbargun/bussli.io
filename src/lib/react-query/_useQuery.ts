import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import axios from "@/lib/axios";

const _useQuery = <T>({ path, param, query, options }: _useQueryProps) => {
  return useQuery({
    queryKey: [...query],
    queryFn: () => axios.get(path + (param || ""))
      .then(res => res.data as T)
      .catch((error: AxiosError) => {
        if (error.response)
          throw error.response;
        throw error;
      }),
    retry: false,
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 60,
    ...options,
    placeholderData: keepPreviousData
  })
}

export default _useQuery;