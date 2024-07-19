type QUERY_PATHS = "items";


/**
 * 
 * TYPES
 * 
 */
type METHODS = "POST" | "PATCH" | "DELETE";

type MutationBody<T> = Omit<T, "id" | "index"> & { id?: string }


/**
 * 
 * Props
 * 
 */
type MutationProps = {
  method: "POST" | "PATCH" | "DELETE";
  path: QUERY_PATHS;
  update?: "ID" | "QUERY" | "BOTH";
  otherUpdates?: QUERY_PATHS[];
}

type defaultQueryProps = {
  path: QUERY_PATHS,
  param?: string;
  options?: object;
}

type _useQueryProps = defaultQueryProps & {
  query: string[];
}

type _useQueriesProps<T> = defaultQueryProps & {
  queries?: (T & { id?: string })[];
}
