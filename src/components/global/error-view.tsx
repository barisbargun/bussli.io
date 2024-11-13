export const ErrorView = () => {
  return (
    <div className="flex h-screen flex-col bg-white w-screen justify-center items-center" role="alert">
      <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        An error happened..
      </h1>

      <p className="mt-4 text-gray-500">
        Try searching again, or return home to start from the beginning.
      </p>

      <div className="*:mt-6 *:inline-block *:rounded *:bg-indigo-600 *:px-5 *:py-3 *:text-sm *:font-medium *:text-white *:hover:bg-indigo-700 *:focus:outline-none *:focus:ring flex gap-2">
        <a href="/" className="">
          Go Back Home
        </a>
        <button onClick={() => globalThis.location.assign(globalThis.location.origin)}>
          Refresh
        </button>
      </div>
    </div>
  )
}
