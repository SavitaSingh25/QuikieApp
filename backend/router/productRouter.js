import express from 'express'
const router = express.Router()
import Product from '../models/productModel.js'

// @decs        All Products
// @route        POST /api/products
// @access       Public

router.get('/', async(req, res) => {
    const products = await Product.find({})
    res.json(products)
})

// @decs         Single Products
// @route        POST /api/products/id
// @access       Public
router.get('/:id', async(req, res) => {
    const product = await Product.findById(req.params.id)

    if(product) {
         res.json(product)
    } else {
         res.status(404)
         throw new Error('Product not found')
    }
})

// @decs         Add a new  Product 
// @route        POST /api/products/addProduct
// @access       Public  vxc

router.post('/addProduct', async(req, res) => {
    const {name, symbol, currency, price} = req.body

    try {
        const product = await Product.create({
            name,
            symbol,
            currency,
            price
        })
    
        if(product) {
            res.status(201).json({
                _id: product._id,
                name: product.name,
                symbol: product.symbol,
                currency: product.currency,
                price: product.price
            })
        } else {
            res.status(400)
            throw new Error('Invalid product data')
        }
        
    } catch (error) {
        res.send(error)
    }
   
})


// @router      Delete api/products/id
// @desc        Delete  Product
// @access      Private
router.delete('/:id',  async (req, res) => {
    try {
      const product = await Product.findById(req.params.id)

      await product.remove()

       res.json({ msg: 'Product Deleted' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    } 
})

export default  router