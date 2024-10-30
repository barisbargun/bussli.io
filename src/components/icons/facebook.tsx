type Props = React.HTMLAttributes<HTMLDivElement> & {
  fill?: string
  pathClassName?: string
}

export const FacebookIcon = ({ fill = '#7D818D', pathClassName, ...props }: Props) => {
  return (
    <div {...props}>
      <svg
        fill="none"
        height="100%"
        viewBox="0 0 23 20"
        width="100%"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className={pathClassName}
          d="M21.5173 0.708008H1.82574C1.3314 0.708008 0.930664 1.06789 0.930664 1.51184V19.196C0.930664 19.64 1.3314 19.9999 1.82574 19.9999H12.4047V12.5291H9.60526V9.61753H12.4047V7.47036C12.4047 4.97859 14.0994 3.62177 16.5745 3.62177C17.7602 3.62177 18.7791 3.70104 19.0761 3.73648V6.34053L17.3595 6.34122C16.0133 6.34122 15.7527 6.91568 15.7527 7.75865V9.61753H18.9631L18.5451 12.5291H15.7527V19.9999H21.5173C22.0117 19.9999 22.4124 19.64 22.4124 19.196V1.51184C22.4124 1.06789 22.0117 0.708008 21.5173 0.708008Z"
          fill={fill}
        />
      </svg>
    </div>
  )
}
