import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.css';

const Course = () => {


    const [courseData,setCourseData] = useState({
        course_id: "",
        dept_id: "",
        name: "",
        credit: "",
        type: "",
    });

    const handleTitleChange = (event) => {
      setCourseData({ ...courseData, name: event.target.value });
    };

    const handleCourseIdChange = (event) => {
      setCourseData({ ...courseData, course_id: event.target.value });
    };

    const handleDepartmentChange = (event) => {
        setCourseData({...courseData,dept_id: event.target.value});
    };

    const handleCourseTypeChange = (event) => {
      setCourseData({ ...courseData, type: event.target.value });
    };

    const handleCreditChange = (event) => {
      setCourseData({ ...courseData, credit: event.target.value });
    };

    const handleSubmitChange = async (event) =>{
        event.preventDefault();
        
        const body = courseData;

        console.log(body);

        try{

            const response = await fetch(
                `http://localhost:5000/department/courses`, {

                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body),

            });

            const data = await response.json();
            const {message} = data ;
            console.log(message);
            
            setCourseData({
                course_id: "",
                name: "",
                dept_id: "",
                type: "",
                credit: "",
            });

        }catch(err){
            console.log(err.message);
        }

    };
  return (
    <div class="p-5">
      <div className="my-5">
        <h5>Add Course</h5>
        <hr />
      </div>
      <Form onSubmit={handleSubmitChange}>
        <div class="row">
          <Form.Group className="mb-3" class="col-8" controlId="formBasic">
            <Form.Label>Course Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Course Title"
              value={courseData.name}
              onChange={handleTitleChange}
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" class="col-4" controlId="formBasic">
            <Form.Label>Course Code</Form.Label>
            <Form.Control
              type="text"
              placeholder="Course Code"
              value={courseData.course_id}
              onChange={handleCourseIdChange}
            />
          </Form.Group>
        </div>
        <div class="row">
          <Form.Group className="mb-3" class="col pt-2" controlId="formBasic">
            <Form.Label>Department</Form.Label>
            <Form.Select
              aria-label="Default select example"
              value={courseData.dept_id}
              onChange={handleDepartmentChange}
            >
              <option>Select Department</option>
              <option value="CSE">CSE</option>
              <option value="IPE">IPE</option>
              <option value="ECO">ECO</option>
              <option value="BBA">BBA</option>
              <option value="PHY">PHY</option>
              <option value="MAT">MAT</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" class="col  pt-2" controlId="formBasic">
            <Form.Label>Course Type</Form.Label>
            <Form.Select
              aria-label="Default select example"
              value={courseData.type}
              onChange={handleCourseTypeChange}
            >
              <option>Select Course Type</option>
              <option value="Theory">Theory</option>
              <option value="Lab">Lab</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" class="col  pt-2" controlId="formBasic">
            <Form.Label>Credit</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Credit"
              value={courseData.credit}
              onChange={handleCreditChange}
            />
          </Form.Group>
        </div>
        <div class="pt-3">
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </div>
      </Form>
      <hr />
    </div>
  );
}

export default Course;