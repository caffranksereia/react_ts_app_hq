import axios from 'axios';
import md5 from 'md5';

const apikey = '97c06bd80587325ac4fd22f26a01bac9';
const privateKey = 'f3097879d5ad63822cf3791d680d78b9dcaf8211';
const ts = Number(new Date());
const hash = md5(ts + privateKey + apikey);

const apiMarvel = axios.create({
  baseURL: 'https://gateway.marvel.com/v1/public/',
  params: {
    ts,
    apikey: apikey,
    hash: hash,
  },
});
export default apiMarvel;
