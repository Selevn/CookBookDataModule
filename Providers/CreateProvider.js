const {COMMON} = require("../ConstantsProvider");
const {USER_FIELDS} = require("../ConstantsProvider");
const {RECIPE_FIELDS} = require("../ConstantsProvider");
const {COOKBOOK_FIELDS} = require("../ConstantsProvider");
const {Comments} = require("../models/modelsExporter");
const {StartProfileImage, StartProfileName, StartProfileSname} = require("../utils/DataConstants");
const {Users, CookBooks, Recipes} = require("../models/modelsExporter")

createUser = async (user) => {
    if(!user)
        return false
    const newUser = {
        name: {first: StartProfileName, last: StartProfileSname},
        desc: "",
        image: StartProfileImage,
        _id: (await Users.countDocuments({})) + 1,
        ...user
    }
    return !!(await (new Users(newUser)).save());
}
createCookBook = async (inputCookBook) => {
    if(!inputCookBook)
        return false
    const cookBook = {
        ...inputCookBook,
        _id: (await CookBooks.countDocuments({})) + 1,
        views:0,
    }
    return !!(await(new CookBooks(cookBook)).save());
}
createRecipe = async (inputRecipe) => {
    if(!inputRecipe)
        return false
    const recipe = {
        ...inputRecipe,
        _id: (await Recipes.countDocuments({})) + 1,
        views:0,
    }
    return !!(await (new Recipes(recipe)).save());
}

addComment = async (prop) => {
    if(!prop)
        return false
    const {userId, type, itemId, comment} = prop
    try {
        const commentId = (await Comments.countDocuments({})) + 1;
        const newComment = {
            ...comment,
            author: userId,
            _id: commentId
        }
        const saveComment = (new Comments(newComment)).save();
        const updateUser = Users.updateOne(
            {_id: Number(userId)},
            {$push: {[USER_FIELDS.comments]: commentId}}
        )
        let updateItem;
        if (type === COMMON.RECIPE) {
            updateItem = Recipes.updateOne(
                {_id: Number(itemId)},
                {$push: {[RECIPE_FIELDS.commentsIds]: commentId}}
            )
        } else {
            updateItem = CookBooks.updateOne(
                {_id: Number(itemId)},
                {$push: {[COOKBOOK_FIELDS.commentsIds]: commentId}}
            )
        }
        const result = await Promise.all([saveComment, updateUser, updateItem])
        return Array.isArray(result);
    } catch (e) {
        return false;
    }
}

module.exports = {createUser, createCookBook, createRecipe, addComment}