import { Helmet } from "react-helmet";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <Helmet>
        <body className="overflow-x-hidden"></body>
      </Helmet>
      <Outlet />
    </div>
  );
};

export default Main;
