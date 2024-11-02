type Props = React.HTMLAttributes<HTMLDivElement> & {
  fill?: string
  pathClassName?: string
}

export const LinkedinIcon = ({ fill = '#7D818D', pathClassName, ...props }: Props) => {
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
          clipRule="evenodd"
          d="M1.74419 0.70813H21.4358C21.9281 0.70813 22.3309 1.06985 22.3309 1.51196V19.1962C22.3309 19.6383 21.9281 20 21.4358 20H1.74419C1.2519 20 0.849121 19.6383 0.849121 19.1962V1.51196C0.849121 1.06985 1.2519 0.70813 1.74419 0.70813ZM4.02663 17.1464H7.20414V7.94258H4.02663V17.1464ZM5.63776 6.69665C4.60843 6.69665 3.80286 5.9732 3.80286 5.0488C3.80286 4.1244 4.60843 3.40095 5.63776 3.40095C6.6671 3.40095 7.47266 4.1244 7.47266 5.0488C7.47266 5.93301 6.6671 6.69665 5.63776 6.69665ZM15.9759 17.1464H19.1086V12.0823C19.1086 9.59043 18.5268 7.70143 15.3046 7.70143C13.7829 7.70143 12.7088 8.46507 12.3061 9.18851H12.2613V7.94258H9.21805V17.1464H12.3956V12.6048C12.3956 11.399 12.6641 10.2335 14.32 10.2335C15.9759 10.2335 15.9759 11.6 15.9759 12.6852V17.1464Z"
          fill={fill}
          fillRule="evenodd"
        />
      </svg>
    </div>
  )
}
