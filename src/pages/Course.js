import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.css';

const Course = () => {

    const handleClickChange = () =>{

    }
  return (
    <div >
        <div className="my-5">
            <h5>Add Course</h5>
            <hr />
          </div>
        <Form>
        <div class="row">
            <Form.Group className="mb-3" class="col-8"  controlId="formBasic">
                <Form.Label>Course Title</Form.Label>
                <Form.Control type="basic" placeholder="Enter Course Title" />
                <Form.Text className="text-muted">
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" class="col-4" controlId="formBasic">
                <Form.Label>Course Code</Form.Label>
                <Form.Control type="basic" placeholder="Course Code" />
            </Form.Group>
        </div>
        <div class="row">
            <Form.Group className="mb-3" class="col" controlId="formBasic">
                <Form.Label>Semester</Form.Label>
                <Form.Control type="number" placeholder="Enter Semester" />
            </Form.Group>
            <Form.Group className="mb-3" class="col" controlId="formBasic">
                <Form.Label>Semester</Form.Label>
                <Form.Control type="number" placeholder="Enter Semester" />
            </Form.Group>
            <Form.Group className="mb-3" class="col" controlId="formBasic">
                <Form.Label>Credit</Form.Label>
                <Form.Control type="basic" placeholder="Enter Credit" />
            </Form.Group>
        </div>
        
        <Button variant="primary" type="submit" onClick={handleClickChange}>
            Submit
        </Button>
        </Form>
        <hr />
    </div>
  )
}

export default Course