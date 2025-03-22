import axios from 'axios';
import router from '../routes/index';

let baseURL = 'https://newsapi.org/v2/';

const httpClient = axios.create({ baseURL });

export default httpClient;