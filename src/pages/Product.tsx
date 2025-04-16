import { useLoaderData } from "react-router-dom";
import ProductCard from "../components/Card";
import { Box } from "@mui/material";

function Product() {
  const product = useLoaderData();
  return (
    <Box
      sx={{
        height: "90vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <ProductCard product={product} />
    </Box>
  );
}

export default Product;
