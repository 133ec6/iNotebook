const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    obj ={
        a:"This",
        num:45
    }
    res.json(obj);
})

module.exports = router