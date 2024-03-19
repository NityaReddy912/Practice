let express = require('express');
let router = express.Router();

const booksCtrl = require('../controllers/books-controller');

router.get('/', booksCtrl.getBooks);//all books
router.get('/:isbn', booksCtrl.getBook);//particular book with an ISBN
router.post('/', booksCtrl.postBook);
router.put('/:isbn', booksCtrl.updateBook);
router.delete('/:isbn', booksCtrl.deleteBook);

module.exports = router;
