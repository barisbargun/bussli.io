import { Link } from 'react-router-dom'

import { Button } from '../ui/button'
import { H2, P } from '../ui/typography'

export const ErrorView = () => {
  return (
    <div className="container absolute top-1/2 -translate-y-1/2 transform bg-white" role="alert">
      <H2 as="h1">An error happened..</H2>
      <P>Try searching again, or return home to start from the beginning.</P>
      <div className="mt-4 flex gap-2">
        <Link to="/">
          <Button variant="primary">Go Back Home</Button>
        </Link>
        <Button
          variant="primary"
          onClick={() => globalThis.location.assign(globalThis.location.origin)}
        >
          Refresh
        </Button>
      </div>
    </div>
  )
}
