const express = require("express");
const router = express.Router();
const pool = require("../db");
const { route } = require("./departmentRouter");



router.route("/post").post(async (req,res) => {
    const {date,course_id,section_id,classroom_id,start_time,end_time} = req.body ;
    console.log(req.body);

    try{

        const postScheduleData = await pool.query(
            `INSERT INTO time_slot (date,course_id,section_id,classroom_id,start_time,end_time)
            VALUES ($1,$2,$3,$4,$5,$6)`
            ,[date,course_id,section_id,classroom_id,start_time,end_time]
        );
        console.log("time slot update successful");
        res.status(201).json({
            message: "successful",
        });

    }catch(err){
        res.status(400).json({error: err});
        console.log(err.message);
    }

});



module.exports = router;
