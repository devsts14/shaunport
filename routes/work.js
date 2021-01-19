const express =require('express');
const router=express.Router()
const {createWork,upload,remove,getWork,mess}=require('../controllers/work')
const {authCheck,adminCheck} =require("../middlewares/auth")

router.post('/create-work',authCheck,adminCheck,createWork)
router.get('/get-work',getWork)
router.post('/post-mess',mess)

router.post('/uploadimages',authCheck,adminCheck,upload)
router.post('/removeimage',remove)

module.exports=router;