const defaultQueryOptions = {
  retry: false,
  refetchOnWindowFocus: false,
  staleTime: 1000 * 60 * 30,
}

const queryPresets = {
  param: "?page={pageParam}",
};

export { defaultQueryOptions, queryPresets };