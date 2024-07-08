import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsAsync } from "../../store/product";
import { Link } from "react-router-dom";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
const Dashboard = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const status = useSelector((state) => state.products.status);
  console.log(products, status);

  useEffect(() => {
    dispatch(fetchProductsAsync());
  }, [dispatch]);

  return (
    <>
      {status === "pending" ? (
        <div>Loading...</div>
      ) : (
        <div>
          <h1>Fake Store</h1>
          <div>
            <>
              <div>
                <Box sx={{ p: 7 }}>
                  <Typography variant="h4" gutterBottom>
                    Fake Store Products
                  </Typography>
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {products.map((product) => (
                      <Card key={product.id} sx={{ maxWidth: 300 }}>
                        <CardMedia
                          sx={{ height: 300, objectFit: "cover", width: 300 }}
                          image={product.image}
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                            {product.title}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {product.description}
                          </Typography>
                        </CardContent>
                        <CardActions>
                          <Typography variant="h6">
                            Price: {products.price}
                          </Typography>
                        </CardActions>
                      </Card>
                    ))}
                  </Box>
                  <Link to="/">back to home</Link>
                </Box>
              </div>
            </>
          </div>
        </div>
      )}
    </>
  );
};

export default Dashboard;
