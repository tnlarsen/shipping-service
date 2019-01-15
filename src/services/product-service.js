// src/services/product-service.js
var axios = require('axios')

module.exports = {
    getProductWeight: async function (productId) {
        return axios
            .get('https://mycluster.icp:8899/products/' + productId)
            .then(response => {
                return response.data.weightLB
            })
    }
}