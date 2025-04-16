import { axiosReq } from "../utils";
import ProductList from "../components/ProductList";

export const loader = async () => {
  const req = await axiosReq("/product");
  const data = req.data;
  return data;
};

function Home() {
  return (
    <>
      <ProductList />
    </>
  );
}

export default Home;
