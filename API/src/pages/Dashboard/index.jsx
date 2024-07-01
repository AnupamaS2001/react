import { useEffect } from "react";  
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsAsync } from "../../store/product";
import { Link } from "react-router-dom";

const Dashboard = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.products.products);
    const status = useSelector(state => state.products.status);

    useEffect(() => {
        dispatch(fetchProductsAsync());
    }, [dispatch]);

    return (
        <>
            {status === 'pending' ? (
                <div>Loading...</div>
            ) : (
                <div>
                    <h1>Fake Store</h1>
                    <div>
                        <table style={{ width: '800px', margin: '0 auto' }}>
                            <thead>
                                <tr>
                                    <th style={{ width: '300px', textAlign: 'center' }}>Product Name</th>
                                    <th style={{ width: '200px', textAlign: 'center' }}>Price</th>
                                    <th style={{ width: '100px', textAlign: 'center' }}>Image</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map(product => (
                                    <tr key={product.id}>
                                        <td>{product.title}</td>
                                        <td>{product.price}</td>
                                        <td><img src={product.image} alt={product.title} style={{ width: '100px' }} /></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table> 
                    </div>
                </div>
                
            )}
            <Link to="/">back to home</Link>
        </>
    );
};

export default Dashboard;
