const {getCookBooks, getCookBook, getComments, getRecipes, getRecipe} = require("./Providers/GetProviders")
const {getUserForLogin, getUser} = require("./Providers/GetUserDataProviders")
const {likeCookBook, likeRecipe, visitItem} = require("./Providers/InteractionsProvider")
const {createUser, createCookBook, updateUser} = require("./Providers/UpdateProvider")
const {updateCookBook, updateRecipe, createRecipe, addComment} = require("./Providers/CreateProvider")

const providerWrapper = () => {
    let forExport = {}
    forExport.getUser = getUser
    forExport.addComment = addComment
    forExport.getCookBooks = getCookBooks
    forExport.getCookBook = getCookBook
    forExport.createRecipe = createRecipe
    forExport.getRecipes = getRecipes
    forExport.getComments = getComments
    forExport.getRecipe = getRecipe
    forExport.getUserForLogin = getUserForLogin
    forExport.createUser = createUser
    forExport.createCookBook = createCookBook
    forExport.likeCookBook = likeCookBook
    forExport.likeRecipe = likeRecipe
    forExport.visitItem = visitItem
    forExport.updateUser = updateUser
    forExport.updateRecipe = updateRecipe
    forExport.updateCookBook = updateCookBook

    return forExport
}




exports.providerWrapper = providerWrapper
