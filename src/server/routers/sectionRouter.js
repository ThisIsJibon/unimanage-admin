const express = require("express");
const router = express.Router();
const pool = require("../db");



router.route("/").post( async (req,res) => {
    let {course_id,section_id,year,phase,teacher_id,semester} = req.body;

    year =  parseInt(year);
    phase = parseInt(phase);
    semester = parseInt(semester)
    teacher_id = parseInt(teacher_id);
    
    try{
        const postSectionData = await pool.query(
            `INSERT INTO Section (section_id,course_id,teacher_id,semester,year,phase) VALUES ($1,$2,$3,$4,$5,$6)`,
            [section_id,course_id,teacher_id,semester,year,phase]
        );
        res.status(201).json({
            message: "Successful. Section created.",
        });
    }
    catch(err){
        res.status(400).json({error: err});
        console.log(err.message);
    }
});



module.exports = router;
