import axios from 'axios';

const BASE_ID='5f6c804e34d1ef0016d582ab';
export default axios.create({
    baseURL: `https://${BASE_ID}.mockapi.io/flashing-cards/`
})