import { Helmet } from "react-helmet-async";

type Props = {
  title: string;
};

const UseHelmet = ({ title }: Props) => {
  return (
    title && (
      <Helmet>
        <title>{title}</title>
      </Helmet>
    )
  );
};

export default UseHelmet;
