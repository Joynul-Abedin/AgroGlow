const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    var data = {
        name: "Shokal",
        id: 16
    };  
    res.render('../views/home', data);
});

module.exports = router;