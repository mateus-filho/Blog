const express = require('express');
const router = express.Router();

// Importa o controller de posts
const postsController = require('./controllers/postsController');

// Define as rotas do aplicativo usando o router
router.get('/', postsController.listAll);
router.get('/post', (req, res) => res.render('single-post'));
router.get('/posts/add', postsController.add);

router.post('/posts/add', postsController.store);
router.get('/posts/:id', postsController.listOne);



// Exporta o router para ser usado no aplicativo principal
module.exports = router;
