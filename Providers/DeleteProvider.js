const {COMMON} = require("../ConstantsProvider");
const {USER_FIELDS} = require("../ConstantsProvider");
const {RECIPE_FIELDS} = require("../ConstantsProvider");
const {COOKBOOK_FIELDS} = require("../ConstantsProvider");
const {Comments} = require("../models/modelsExporter");
const {StartProfileImage, StartProfileName, StartProfileSname} = require("../utils/DataConstants");
const {Users, CookBooks, Recipes} = require("../models/modelsExporter")

const deleteUser = () => {}
const blockUser = () => {}
const deleteCookBook = () => {}
const deleteRecipe = () => {}
const deleteComment = () => {}

module.exports = {deleteUser, blockUser, deleteCookBook, deleteRecipe, deleteComment}