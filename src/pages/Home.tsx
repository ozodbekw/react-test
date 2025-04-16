import { axiosReq } from "../utils";
import { useLoaderData } from "react-router-dom";
import ProductList from "../components/ProductList";

export const loader = async () => {
  const req = await axiosReq("/product");
  const data = req.data;
  return data;
};

function Home() {
  const mal = useLoaderData();

  console.log(mal);

  return (
    <>
      <ProductList></ProductList>
    </>
  );
}

export default Home;
