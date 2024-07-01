import { useNavigate } from 'react-router-dom';
export default function Home() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/dashboard');
  }
    return (
       <>
            <h1>WELCOME TO FAKE STORE</h1>
            <button type='button'onClick={handleClick}>Products</button>
  
        </>
       
    )
}