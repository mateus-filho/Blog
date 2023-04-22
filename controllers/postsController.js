
// Importa o modelo de dados de Posts
const Posts = require('../models/posts.js');

// Função que renderiza o formulário para adicionar um novo post
exports.add = (req, res) => {
    res.render('add-post', {
        title: 'Adicionar post - Blog'
    });
}

// Função que salva um novo post no banco de dados
exports.store = async(req, res) => {
    const image = req.file.filename;
    const imgUrl = '/images/' + image;
    
    const post = await Posts.create({
        title: req.body.title,
        imgUrl: imgUrl,
        text: req.body.text
    });
   res.redirect('/');
}

// Função que lista todos os posts no banco de dados    
exports.listAll = async(req, res) => {
    const posts = await Posts.findAll();
    res.render('home', {
        posts: posts,
        title: 'Página Inicial - Blog'
    });
}

// Função que lista um post específico com base no ID fornecido
exports.listOne = async (req, res) => {
    const id = req.params.id;
    const post = await Posts.findOne(
        {where: {
            id: id
        }
    });
    res.render('single-post', {
        post: post,
        title: `${post.title} - Blog`
    });
}

