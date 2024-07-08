// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { myStoreProduct } from "../../store/myStoreGet";
// import { Link, useNavigate } from "react-router-dom";

// import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Typography from "@mui/material/Typography";

// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import Button from "@mui/material/Button";
// import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";

// const Shop = () => {
//   const dispatch = useDispatch();
//   const products = useSelector((state) => state.myStoreProducts.products);
//   const status = useSelector((state) => state.myStoreProducts.status);
//   const navigate= useNavigate();
//   const handleAddProduct = () => {
//     navigate('/shop/products/add');
//   }
//   useEffect(() => {
//     dispatch(myStoreProduct());
//   }, [dispatch]);

//   return (
//     <>
//       <Box sx={{ flexGrow: 1 }}>
//         <AppBar position="static">
//           <Toolbar>
//             <IconButton
//               size="large"
//               edge="start"
//               color="inherit"
//               aria-label="menu"
//               sx={{ mr: 2 }}
              
//             >
//               <MenuIcon />
//             </IconButton>
//             <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//               My Store
//             </Typography>
//             <Button color="inherit" onClick={handleAddProduct}>Add Products</Button>

//           </Toolbar>
//         </AppBar>
//       </Box>
      
//       {status === "pending" ? (
//         <div>Loading...</div>
//       ) : (
//         <Box sx={{ p: 7 }}>
//           <Typography variant="h4" gutterBottom>My Store</Typography>
//           <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
//             {products.map((product) => (
//               <Card key={product.id} sx={{ maxWidth: 600 }}>
//                 <CardMedia sx={{ height: 400 }} image={product.image} />
//                 <CardContent>
//                   <Typography gutterBottom variant="h5" component="div">
//                     {product.name}
//                   </Typography>
//                   <Typography variant="body2" color="text.secondary">
//                     {product.description}
//                   </Typography>
//                 </CardContent>
//                 <CardActions>
//                   <Typography variant="h6">Price: {product.price}</Typography>
//                 </CardActions>
//               </Card>
//             ))}
//           </Box>
//           <Link to="/">back to home</Link>
//         </Box>
//       )}
//     </>
//   );
// };

// export default Shop;
//-----------------------------------------------------------------------------

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { myStoreProduct } from "../../store/myStoreGet";
import { Link, useNavigate } from "react-router-dom";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

const Shop = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.myStoreProducts.products);
  const status = useSelector((state) => state.myStoreProducts.status);
  const navigate= useNavigate();
  const handleAddProduct = () => {
    navigate('/shop/products/add');
  }
  useEffect(() => {
    dispatch(myStoreProduct());
  }, [dispatch]);

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              My Store
            </Typography>
            <Button color="inherit" onClick={handleAddProduct}>Add Products</Button>
          </Toolbar>
        </AppBar>
      </Box>
      
      {status === "pending" ? (
        <div>Loading...</div>
      ) : (
        <Box sx={{ p: 7 }}>
          <Typography variant="h4" gutterBottom>My Store</Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
            {products.map((product) => (
              <Card key={product.id} sx={{ maxWidth: 300 }}>
                <CardMedia
                  sx={{ height: 300, objectFit: 'cover' ,width:300}}
                  image={product.image}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {product.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {product.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Typography variant="h6">Price: {product.price}</Typography>
                </CardActions>
              </Card>
            ))}
          </Box>
          <Link to="/">back to home</Link>
        </Box>
      )}
    </>
  );
};

export default Shop;
