const CartController = require('../controllers/cart')
const { authenticate, authorizeCart } = require('../middlewares/auth')

const router = require('express').Router()

router.use(authenticate)
router.route('/')
  .get(CartController.showAll)
  .post(CartController.create)
  .patch(CartController.updateStatus)
router.route('/:id')
  .patch(authorizeCart, CartController.updateQuantity)
  .delete(authorizeCart, CartController.delete)

module.exports = router