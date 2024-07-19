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
  page && query.push(`${path}?page=${page}`);
  return _useQuery<T>({
    path: path,
    param: `?page=${page}`,
    query: query,
    options: { enabled: !!page }
  });
};

export { _useQueryById, _useQueryByPage };