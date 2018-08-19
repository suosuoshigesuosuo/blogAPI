var controllers = require('../controllers/blogControllers.js')

module.exports = (app) => {
    app.route('/blog')                             
       .get(controllers.getBlogList)        // get blog list
       .post(controllers.addBlog);          // add blog

    app.route('/blog/:id')
       .get(controllers.getBlogDetail)      // get blog detail
       .post(controllers.updateBlog)        // update blog
       .delete(controllers.deleteBlog)      // delete blog
}