import axios from 'axios'

const Url=import.meta.env.VITE_URL


const instance=axios.create({
    baseURL:Url
})
export const fetchProducts=()=>{
    return instance.get('/products')
    .then(res =>{
        return res.data;
    })
    .catch(error =>{console.error('Error....',error);
        throw error;
    });
};
