const defaultOptions = {
  retry: false,
  refetchOnWindowFocus: false,
  staleTime: 1000 * 60 * 30,
}

const presets = {
  param: "?page={{1}}",
};

export default { defaultOptions, presets };