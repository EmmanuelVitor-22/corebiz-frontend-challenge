import axios from "axios";


const axiosInstance = axios.create({
    baseURL : 'https://corebiz-test-server.onrender.com/api/v1/',
    timeout : 10000
})


export const getProduct = async () =>{
    try{
    const response = await axiosInstance.get('/products'); //Realiza uma requisição HTTP GET para o endpoint /products usando a instância api. await espera pela conclusão da requisição.
    return response.data;
}catch(error){
    throw error;
}
}

export default axiosInstance;