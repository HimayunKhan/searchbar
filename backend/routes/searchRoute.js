const express=require("express")
const app = require("../app")
const { searchProduct } = require("../controllers/searchController")

const router=express.Router()


router.route("/search/:key").get(searchProduct)
// router.get('/search/:key', searchProduct)

module.exports=router