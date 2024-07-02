import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsAsync } from "../../store/product";
import { Link } from "react-router-dom";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const Dashboard = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const status = useSelector((state) => state.products.status);

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
            {products.map((product) => {
              return (
                <>
                    <div>
                        <Card sx={{ maxWidth: 400 }}>
                            <CardMedia sx={{ height: 500 }} image={product.image} />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {product.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {product.description}
                            </Typography>
                            </CardContent>

                            <CardActions>
                            <h3>Price : {product.price}</h3>
                            </CardActions>
                        </Card>
                    </div>
                </>
                    
              );
            })}
          </div>
        </div>
      )}
      <Link to="/">back to home</Link>
    </>
  );
};

export default Dashboard;
