import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.css';

const Classroom = () => {


    const [classroomData,setClassroomData] = useState({
        classroom_id: "",
        dept_id: "",
        room: "",
        building: "",
    });

    const handleClassroomIdChange = (event) => {
      setClassroomData({ ...classroomData, classroom_id: event.target.value });
    };

    const handleDepartmentChange = (event) => {
      setClassroomData({ ...classroomData, dept_id: event.target.value });
    };

    const handleRoomChange = (event) => {
      setClassroomData({...classroomData,room: event.target.value});
    };


    const handleBuildingChange = (event) => {
      setClassroomData({ ...classroomData, building: event.target.value });
    };

    const handleSubmitChange = async (event) =>{
        event.preventDefault();
        
        const body = classroomData;

        console.log(body);

        try{

            const response = await fetch(
                `http://localhost:5000/classroom`, {

                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body),

            });

            const data = await response.json();
            const {message} = data ;
            console.log(message);
            
            setClassroomData({
                classroom_id: "",
                room: "",
                dept_id: "",
                building: "",
            });

        }catch(err){
            console.log(err.message);
        }

    };
  return (
    <div class="p-5">
      <div className="my-5">
        <h5>Add Classroom</h5>
        <hr />
      </div>
      <Form onSubmit={handleSubmitChange}>
        <div class="row pb-3">
          <Form.Group className="mb-3" class="col" controlId="formBasic">
            <Form.Label>Classroom Building</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Classroom Building"
              value={classroomData.building}
              onChange={handleBuildingChange}
            />
            <Form.Text className="text-muted">e.g. IICT</Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" class="col" controlId="formBasic">
            <Form.Label>Classroom Number</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter Classroom Number"
              value={classroomData.room}
              onChange={handleRoomChange}
            />
            <Form.Text className="text-muted">e.g. 205</Form.Text>
          </Form.Group>
        </div>
        <div class="row pb-2">
          <Form.Group className="mb-3" class="col pt-3" controlId="formBasic">
            <Form.Label>Department ID</Form.Label>
            <Form.Select
              aria-label="Default select example"
              value={classroomData.dept_id}
              onChange={handleDepartmentChange}
            >
              <option>Select Department</option>
              <option value="CSE">CSE</option>
              <option value="IPE">IPE</option>
              <option value="ECO">ECO</option>
              <option value="BBA">BBA</option>
              <option value="PHY">PHY</option>
              <option value="MAT">MAT</option>
              <option value="CEE">CEE</option>
            </Form.Select>
            <Form.Text className="text-muted">e.g. CSE</Form.Text>
          </Form.Group>
          
          <Form.Group className="mb-3" class="col  pt-3" controlId="formBasic">
            <Form.Label>Classroom ID</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Classroom ID"
              value={classroomData.classroom_id}
              onChange={handleClassroomIdChange}
            />
            <Form.Text className="text-muted">must be in format Room-Building. e.g. 205-IICT</Form.Text>
          </Form.Group>
        </div>
        <div class="pt-5">
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </div>
      </Form>
      <hr />
    </div>
  );
}

export default Classroom;