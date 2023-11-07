import { Helmet } from "react-helmet";

const PageTitle = ({ children }) => {
  return (
    <div>
      <Helmet>
        <title>{children}</title>
      </Helmet>
    </div>
  );
};

export default PageTitle;
