const express = require("express");
const router = express.Router();
const pool = require("../db");


router.route("/students").post(async (req, res) => {
  const { course_id, section_id ,rows} = req.body;
  console.log(course_id, section_id,rows);

  try {
    for( const x of rows){
      x.credit=parseFloat(x.credit);
      x.reg_no=parseInt(x.reg_no);
      const insertData = await pool.query(
        `INSERT INTO course_enrollment (grade) VALUES ($1) 
        WHERE reg_no = $2 and course_id = $3 and section_id = $4`,
        [x.credit,x.reg_no,course_id,section_id]
      );
    }
    res.status(201).json({
      message: "update result successful"
    });
  } catch (err) {
    res.status(400).json({ error: err });
    console.log(err.message);
  }
});

router.route("/register_students").post(async (req, res) => {
  const { course_id, section_id } = req.body;
  console.log(course_id, section_id);

  try {
    const getAllRegisterStudents = await pool.query(
      `SELECT reg_no,grade FROM course_enrollment
            WHERE course_id = $1 and section_id = $2`,
      [course_id, section_id]
    );
    console.log(getAllRegisterStudents.rows);
    res.status(201).json({
      students: getAllRegisterStudents.rows,
    });
  } catch (err) {
    res.status(400).json({ error: err });
    console.log(err.message);
  }
});

module.exports = router;
