import axios from 'axios';

export default axios.create({
    baseURL:'http://3.239.181.185:8080/api/v1',
    headers: {
        'Content-Type': 'application/json',
    },
});