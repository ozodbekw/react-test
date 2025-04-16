import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Card from "../components/Card";
import { useLoaderData } from "react-router-dom";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
};

type LoaderData = {
  products: Product[];
};

function ProductList() {
  const products = useLoaderData() as LoaderData;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {products.products.map((p) => (
          <Grid key={p.id}>
            <Card product={p} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default ProductList;
