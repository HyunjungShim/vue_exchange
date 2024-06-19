import axios from 'axios';
const baseUrl = 'https://min-api.cryptocompare.com/data'
export const getLatestNews = async () => {
    try {
        let res = await axios.get(`${baseUrl}/v2/news/?lang=EN&api_key=5d56928efe43a5bb686c78da44e6a7da2b2eca73339407aa2fdb7f9b2357433e`)
        let result =  res.data.Data;
        return result;
    }catch(error){
        console.error('get news api error',error);
    }
}