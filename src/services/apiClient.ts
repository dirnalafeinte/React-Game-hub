import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '821e6c7206004883a6d3f47d31e6191d'
    }
})