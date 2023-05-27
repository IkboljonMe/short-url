import { useParams } from "react-router-dom";
import axios from "axios";
import Page404 from "./components/Page404";

const Redirect = () => {
  const { urlId } = useParams();
  const redirect = async () => {
    const { data } = await axios.post(`${import.meta.env.VITE_BASE}/urlId`, { urlId: urlId });
    if (data.urlId && window) {
      window.location.replace(data.urlId);
    } else {
      return <Page404 />;
    }
  };
  redirect();
  return <div></div>;
};

export default Redirect;
