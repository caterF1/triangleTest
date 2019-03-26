var express = require("express");
var router = express.Router({mergeParams:true});

//==================
//triangulation ROUTES
//==================

//“/triangulations/equilateral”
router.get("/equilateral", function(req, res){
    res.render("triangulations/equilateral");
});


module.exports = router;