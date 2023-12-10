const express = require('express')
const router = express.Router()

// const { 
//     getProducts,
//     getProduct,
//     createProduct,
//     updateProduct,
//     deleteProduct 
// } = require('../controllers/products.js')

router.get('/', (req, res) => {
    res.send('Homepage')
});

router.get('/about', (req, res) => {
    res.send('About me')
})
// router.post('/', createProduct) 
// router.put('/:productID', updateProduct) 
// router.delete('/:productID', deleteProduct)

module.exports = router
