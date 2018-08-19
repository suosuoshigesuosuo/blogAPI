const blog = require('../models/blogModels');
const logger = require('../utils/logUtils')

exports.getBlogList = (req, res, next) => {
    blog.find({}, function (err, blogList) {
        if (err) {
            logger.error(`get blog list error`, err);
            return res.json({
                success: 'false',
                message: err.message
            });
        } else {
            res.json({
                success: 'true',
                data: blogList
            });
        }
    })
}

exports.getBlogDetail = (req, res, next) => {
    blog.findById(req.params.id, function (err, blog) {
        if (err) {
            logger.error(`get blog detail error`, err);
            return res.json({
                success: 'false',
                err: err.message
            });
        } else {
            res.json({
                success: 'true',
                data: blog
            });
        }
    })
}

exports.addBlog = (req, res, next) => {
    let newBlog = new blog({
        name: req.body.name,
        title: req.body.title,
        text: req.body.text,
        date: req.body.date ? new Date() : new Date(parseInt(req.body.date))
    });
    newBlog.save(function(err, student){
        if(err){
            logger.error(`add blog error`, err);
            return res.json({
                success: 'false',
                message: err.message
            })
        }

        res.json({
            success: 'true',
            data: student
        })
    })
}

exports.updateBlog = (req, res, next) => {
    blog.findByIdAndUpdate(req.params.id, {...req.body},{new: true}, function (err, blog) {
        if (err) {
            logger.error(`delete blog error`, err);
            return res.json({
                success: 'false',
                message: err.message
            });
        } else {
            res.json({
                success: 'true',
                data: blog
            })
        }
    })
}

exports.deleteBlog = (req, res, next) => {
    blog.findByIdAndDelete(req.params.id, function (err, blog) {
        if (err) {
            logger.error('delete blog error', err);
            return res.json({
                success: 'false',
                message: err.message
            });
        } else {
            res.json({
                success: 'true',
                data: blog
            })
        }
    })
}