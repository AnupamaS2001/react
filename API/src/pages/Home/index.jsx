import { useNavigate } from 'react-router-dom';
export default function Home() {
  const navigate = useNavigate();

  // const handleClick3 = () => {
  //   navigate('/');
  // }
  const handleClick = () => {
    navigate('/dashboard');
  }
  const handleClick1 = () => {
    navigate('/shop');
  }
    return (
       <>
            <h1>WELCOME TO STORE</h1>
            <button type='button'onClick={handleClick}>Products</button>
              <button type='button' onClick={handleClick1}>MY PRODUCTS</button>
        </>
       
    )
}