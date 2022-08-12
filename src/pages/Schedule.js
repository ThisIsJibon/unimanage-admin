import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.css';

const Schedule = () => {
  const handleClickChange = () =>{

  }
return (
  <div class="p-5">
      <div className="my-5">
          <h5>Add Schedule</h5>
          <hr />
        </div>
      <Form>
      <div class="row">
          <Form.Group className="mb-3" class="col"  controlId="formBasic">
              <Form.Label>Date</Form.Label>
              <Form.Control type="basic" placeholder="Enter Date" />
              <Form.Text className="text-muted">
                must be in the form YYYY-MM-DD   e.g.   2022-12-21
              </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" class="col" controlId="formBasic">
              <Form.Label>Course ID</Form.Label>
              <Form.Control type="basic" placeholder="Enter Course ID" />
              <Form.Text className="text-muted">
                e.g.   CSE205
              </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" class="col" controlId="formBasic">
              <Form.Label>Section ID</Form.Label>
              <Form.Control type="basic" placeholder="Section ID" />
              <Form.Text className="text-muted">
                e.g.   2022-1
              </Form.Text>
          </Form.Group>
      </div>
      <div class="row" >
          <Form.Group className="mb-3" class="col pt-4" controlId="formBasic">
              <Form.Label>Classroom ID</Form.Label>
              <Form.Control type="basic" placeholder="Enter Classroom ID" />
              <Form.Text className="text-muted">
                e.g.   301-IICT
              </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" class="col pt-4" controlId="formBasic">
              <Form.Label>Start Time</Form.Label>
              <Form.Control type="basic" placeholder="Enter Start Time" />
              <Form.Text className="text-muted">
                must be in the 24H form HH:MM   e.g.   14:00
              </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" class="col pt-4" controlId="formBasic">
              <Form.Label>End Time</Form.Label>
              <Form.Control type="basic" placeholder="Enter End Time" />
              <Form.Text className="text-muted">
                must be in the 24H form HH:MM   e.g.   14:00
              </Form.Text>
          </Form.Group>
      </div>
      <div class=" pt-4">
        <Button variant="primary" type="submit" onClick={handleClickChange}>
            Submit
        </Button>
      </div>

      
      </Form>
      <hr />
  </div>
)
}

export default Schedule