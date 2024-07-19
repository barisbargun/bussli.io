interface Props extends React.HTMLAttributes<HTMLDivElement> {
  fill?: string;
  pathClassName?: string;
}

const TwitterIcon = ({ fill = "#7D818D", pathClassName, ...props }: Props) => {
  return (
    <div {...props}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 21 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20.2883 2.71611C19.5275 3.04759 18.7244 3.25476 17.8791 3.37906C18.7244 2.88185 19.4007 2.0946 19.6966 1.1416C18.8935 1.59738 18.0059 1.92886 17.0337 2.13603C16.2729 1.34878 15.174 0.851562 13.9905 0.851562C11.7081 0.851562 9.84829 2.67468 9.84829 4.91214C9.84829 5.24361 9.89056 5.53365 9.97509 5.82369C6.55144 5.65796 3.46592 4.04201 1.39482 1.55595C1.05668 2.17746 0.845347 2.84041 0.845347 3.58623C0.845347 4.995 1.56389 6.23804 2.70511 6.98386C2.02883 6.94242 1.39482 6.77668 0.803079 6.48664V6.52808C0.803079 8.51693 2.24017 10.1743 4.1422 10.5472C3.80406 10.6301 3.42365 10.6715 3.04325 10.6715C2.78964 10.6715 2.49377 10.6301 2.24017 10.5887C2.78964 12.2046 4.31127 13.4062 6.12876 13.4062C4.69167 14.4835 2.91645 15.1464 0.972149 15.1464C0.63401 15.1464 0.295871 15.1464 0 15.105C1.85976 16.2652 4.0154 16.9281 6.38237 16.9281C14.0328 16.9281 18.2172 10.713 18.2172 5.32648C18.2172 5.16074 18.2172 4.95357 18.2172 4.78783C19.0203 4.24918 19.7388 3.5448 20.2883 2.71611Z"
          fill={fill}
          className={pathClassName}
        />
      </svg>
    </div>
  );
};

export default TwitterIcon;
