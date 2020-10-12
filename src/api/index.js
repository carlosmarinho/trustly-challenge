import axios from 'axios';

export default axios.create({
    baseURL: 'https://voliveira.s3-sa-east-1.amazonaws.com/'
})