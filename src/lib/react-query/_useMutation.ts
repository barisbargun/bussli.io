import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "@/lib/axios";

const _useMutation = <T>(
  { method, path, update, otherUpdates }: MutationProps
) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (body: MutationBody<T>) => mutate(method, path, body),
    onSuccess: (data, variables) => {
      const id = data.data?.id || variables.id;
      const keys: string[] = [];
      if (update == "QUERY" || update == "BOTH") keys.push(path);
      if (update == "ID" || update == "BOTH") id && keys.push(path + `/${id}`);

      (otherUpdates || []).concat(keys as any)?.forEach(v => {
        queryClient.invalidateQueries({ queryKey: [v] });
      })
    }
  })
}

const mutate = <T>(method: METHODS, path: string, body: MutationBody<T>) => {
  switch (method) {
    case "POST":
      return axios.post(path, body);
    case "PATCH":
      if(!body?.id) throw new Error("Id is required for PATCH method");
      return axios.patch(`${path}/${body?.id}`, body);
    case "DELETE":
      if(!body?.id) throw new Error("Id is required for DELETE method");
      return axios.delete(`${path}/${body?.id}`);
    default:
      throw new Error("Method not found");
  }
}

export default _useMutation;