const express = require("express");
const router = express.Router();
const pool = require("../db");



router.route("/").post( async (req,res) => {
    let {classroom_id,dept_id,room,building} = req.body;

    room =  parseInt(room);
    
    
    try{
        const postClassroomData = await pool.query(
            `INSERT INTO Classroom VALUES ($1,$2,$3,$4)`,
            [classroom_id,dept_id,room,building]
        );
        res.status(201).json({
            message: "Successful. Classroom created.",
        });
    }
    catch(err){
        res.status(400).json({error: err});
        console.log(err.message);
    }
});



module.exports = router;
