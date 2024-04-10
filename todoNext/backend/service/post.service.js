const CustomError = require('../lib/error');
const { post } = require('../models');
// const todo = require('../models/todo');

exports.fetchList = async()=> {
    const response = await post.findAll({include: ['todo']});
    if(!response) throw new CustomError("Could not find any list item", 204);
    return response;
}

exports.createPost = async({data})=> {
    const {body, id} = data;
    const response = await post.create({body, todoId: id});
    if(!response) throw new CustomError("Could not create post", 204);
    return response;
}