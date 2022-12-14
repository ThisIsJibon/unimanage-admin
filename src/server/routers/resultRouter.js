const express = require("express");
const router = express.Router();
const pool = require("../db");


router.route("/students").post(async (req, res) => {
  const { searchData,array }= req.body;
  console.log(req.body);
  console.log(array);

  try {
    let m = searchData.course_id.trim();
    let n = searchData.section_id.trim();
    for( let x of array){

      x.grade=parseFloat(x.grade);
      x.reg_no=parseInt(x.reg_no);
      const insertData = await pool.query(
        `UPDATE course_enrollment SET grade = $1 
        WHERE reg_no = $2 and course_id = $3 and section_id = $4`,
        [x.grade, x.reg_no, m, n]
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
