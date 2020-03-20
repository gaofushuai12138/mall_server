const express     = require('express');
const router      = express.Router()
const Admin = require("../models/admin")


//管理员登录接口
router.post("/login",async (req,res)=>{
    let {username,password} = req.body;
    const doc = Admin.findOne({userName:username,password:password});
    try{
        if(doc){
            let { adminId,userName } = doc;
            res.cookie("adminId",adminId,{
                path:"/",
                maxAge:60 * 60 * 1000
            })
            res.json({
                 status:"200",
                 message:"登录成功!",
                 res:{
                     
                 }
            })
        }else{
            res.json({
                status:"500",
                message:"登录失败，用户不存在!",
                res:"failed"
            })
        }
    }catch(err){
        res.json({
            status:"20001",
            message:"登录失败!",
            res:"failed"
        })
    } 
})




module.exports = router;