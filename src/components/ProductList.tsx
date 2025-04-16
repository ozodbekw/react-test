import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Card from "../components/Card";
import { Link, useLoaderData } from "react-router-dom";

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
  const { products } = useLoaderData() as LoaderData;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={2}
        style={{ height: "100vh" }}
        alignItems="center"
        justifyContent="center"
      >
        {products.map((p) => (
          <Grid key={p.id} size={{ xs: 3 }}>
            <Link to={`/product/${p.id}`}>
              <Card product={p} />
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default ProductList;
