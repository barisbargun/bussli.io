import { queryConfig } from "@/config";
import _useQuery from "./_useQuery";

const _useQueryById = <T>(path: QUERY_PATHS, id?: string) => {
  const isId = !!Number(id) && Number(id) > 0;
  return _useQuery<T>({
    path: path,
    param: `/${id}`,
    query: [`${path}/${id}`],
    options: { enabled: isId }
  });
}

const _useQueryByPage = <T>(path: QUERY_PATHS, includeBasePath: boolean, page?: number) => {
  const query = [];
  includeBasePath && query.push(path);
  const param = queryConfig.presets.param.replace("{{1}}", (page || 0).toString());
  page && query.push(`${path}${param}`);
  return _useQuery<T>({
    path: path,
    param: param,
    query: query,
    options: { enabled: !!page }
  });
};

export { _useQueryById, _useQueryByPage };