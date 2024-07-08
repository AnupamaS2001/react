import axios from 'axios'

const Url=import.meta.env.VITE_URL


const instance=axios.create({
    baseURL:Url
})
export const getStoreProduct=()=>{
    return instance.get('/product')
    .then(res =>{
        return res.data;
    })
    .catch(error =>{console.error('Error....',error);
        throw error;
    });
};
export const postStoreProduct = async (productData, successCb, errorCb) => {
    const url = `${import.meta.env.VITE_URL}/products/add`;
  
    return axios.post(url, productData)
      .then((response) => {
        if (successCb) successCb(response.data);
        return response.data;
      })
      .catch((error) => {
        if (errorCb) errorCb(error);
        throw error;
      });
  };
