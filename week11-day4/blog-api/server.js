const express = require('express');
const app = express();

app.listen(5000, () => {
    console.log('server is listening on port 5000')
});

const blogs = [
    {id:1, title:'animals', content:'content about animals'},
    {id:2, title:'plants', content:'content about plants'},
    {id:3, title:'humans', content:'content about humans'}
];

app.get('/posts', (req, res) => {
    res.json(blogs)
});

app.get('/posts/:id', (req, res) => {
    const blogId = Number(req.params.id);
    const post = blogs.find((item) => 
        item.id === blogId
    );
    if (!post) {
        res.status(404).send('post not found');
    }
    res.json(post);
});

app.use(express.json());

app.post('/posts', (req, res) => {
    const newBlog = {
        id : blogs.length + 1,
        title : req.body.title,
        content : req.body.content
    };

    blogs.push(newBlog);
    res.status(201).json(newBlog);
});

app.put('/posts/:id', (req, res) => {
    const blogId = Number(req.params.id);
    const oldBlog = blogs.find(item => item.id === blogId);
    const index = blogs.indexOf(oldBlog);
    if(index === -1){res.status(404).send('post not found')}
    
    const updatedBlog = {
        id : blogId,
        title:req.body.title,
        content:req.body.content
    };
    
    blogs[index] = updatedBlog;
    res.json(updatedBlog);
    console.log('Blog updated');
});

app.delete('/posts/:id', (req,res) => {
    const blogId = Number(req.params.id);
    const index = blogs.findIndex(blog => blog.id === blogId);
    if(index === -1){return res.status(404).send('blog not found')};

    blogs.splice(index, 1);
    res.status(200).json('Blog deleted')
});






