import axios from "axios";

export default {
    getEmployees: function(user) {
        return new Promise((resolve, reject) => {
            axios.get("https://randomuser.me/api/").then((res) => {
                const results = res.results
                resolve(results)
            }).catch((err) => reject(err));
       
        })
        
    }
}