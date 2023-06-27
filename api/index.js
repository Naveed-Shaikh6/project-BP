const express = require('express');
const cors = require('cors');
const { default: mongoose } = require('mongoose');
const app = express();
const User = require('./Models/User');
const Post = require('./Models/Post');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const multer = require('multer');
const uploadMiddleware = multer({ dest: 'uploads/' });
const fs = require('fs');

const salt = bcrypt.genSaltSync(10);
const secret = 'ahsjfiufiduiduf98983494'

app.use(cors({ credentials: true, origin: 'http://localhost:5173' }));
app.use(express.json());
app.use(cookieParser());
app.use('/uploads', express.static(__dirname + '/uploads'));

mongoose.connect('mongodb+srv://naveedshaikh8859:projectBP@cluster0.0frpn8n.mongodb.net/?retryWrites=true&w=majority')

console.log('connected')

app.post('/register', async (req, res) => {
    const { email,username, password } = req.body;
    try {
        const userDoc = await User.create(
            {
                email,
                username,
                password: bcrypt.hashSync(password, salt),
            });
        res.json(userDoc);
    } catch (e) {
        res.status(400).json(e);
    }
});

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const userDoc = await User.findOne({ email });
    const passsOk = bcrypt.compareSync(password, userDoc.password);
    if (passsOk) {
        jwt.sign({ email, id: userDoc._id }, secret, {}, (err, token) => {
            if (err) throw err;
            res.cookie('token', token).json({
                id: userDoc._id,
                email,
            })
        });
    } else {
        res.status(400).json('wrong credentials')
    }
});

app.get('/profile', (req, res) => {
    const { token } = req.cookies;
    jwt.verify(token, secret, {}, (err, info) => {
        if (err) console.log(err) ;
        res.json(info)
    })
    res.json(req.cookies)
});

app.post('/logout', (req, res) => {
    res.cookie('token', '').json('ok')
});

app.post('/post', uploadMiddleware.single('file'), async (req, res) => {
    const { originalname, path } = req.file;
    const parts = originalname.split('.');
    const ext = parts[parts.length - 1];
    const newPath = path + '.' + ext;
    fs.renameSync(path, newPath);

    const { token } = req.cookies;
    jwt.verify(token, secret, {}, async (err, info) => {
        if (err) throw err;
        const { title, summary, content } = req.body;
        const postDoc = await Post.create({
            title,
            summary,
            content,
            cover: newPath,
            author: info.id,
        });
        res.json(postDoc);
    });
});

app.get('/post', async (req, res) => {
    res.json(
        await Post.find()
            .populate('author', ['username'])
    );
});

app.get('/post/:id', async (req, res) => {
    const { id } = req.params;
    const postDoc = await Post.findById(id).populate('author', ['username']);
    res.json(postDoc);
});

app.delete('/delete/:id',async (req, res, next) => {
    const {id} = req.params;
    let postDoc;
    try {
    postDoc = await Post.findByIdAndRemove(id).populate("author");
      await postDoc.author.post.pull(Post);
      await postDoc.author.save();
      
    } catch (err) {
      console.log(err);
    }
    if (!postDoc) {
      return res.status(500).json({ message: "Unable To Delete" });
    }
    return res.status(200).json({ message: "Successfully Delete" });
  });

  app.get('/recent', async (req, res) => {
    res.json(
        await Post.find()
            .populate('author', ['username'])
            .sort({ createdAt: -1 })
            .limit(100)
    );
});

app.listen(8000);
