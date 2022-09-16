import axios from "axios";
const API_KEY = '6712873235301bd9554e1f93bced51a2'
 

export const getTrending = async() => {
    
    try {
        const result = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`)
        return result.data;
    } catch(error) {
        throw new Error(error.message)
    }
}