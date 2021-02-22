const { ref } = require('joi');
const router = require('express').Router();
const Post = require('../model/Post');
const User = require('../model/User');
const { verifyAccessToken } = require('../helpers/jwt_helper');

// Create a post
router.post('/post', verifyAccessToken, async (req, res) => {

    const post = new Post({
        name: req.body.name,
        title: req.body.title,
        text: req.body.text,
        author: req.payload.aud,
    });
    try {
        await post.save();
        res.json({ message:'Successfully created post!' });
    }
    catch (err) {
        res.sendStatus(400);
    }
});

router.get('/posts', verifyAccessToken, async (req, res) => {

    const posts = await Post.find({ author: req.payload.aud });
    if(!posts) return res.json({ message: 'No posts yet' });

    res.json(posts);
})

module.exports = router;