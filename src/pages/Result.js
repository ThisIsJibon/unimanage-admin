import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.css';
  


function Results() {


  const handleClickChange = ()=>{

  }

  return (
    <div>
      <div class="p-5">
        <div className="my-5">
            <h5>Add Result Entry</h5>
            <hr />
          </div>
        <Form>
        <div class="row">
            <Form.Group className="mb-3" class="col"  controlId="formBasic">
                <Form.Label>Course Code</Form.Label>
                <Form.Control type="basic" placeholder="Enter Course Code" />
                <Form.Text className="text-muted">
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" class="col" controlId="formBasic">
                <Form.Label>Section ID</Form.Label>
                <Form.Control type="basic" placeholder="Enter Section ID" />
            </Form.Group>
        </div>
        <div class="row">
            <Form.Group className="mb-3" class="col  pt-2" controlId="formBasic">
                <Form.Label>Registration</Form.Label>
                <Form.Control type="number" placeholder="Enter Registration" />
            </Form.Group>
            <Form.Group className="mb-3" class="col  pt-2" controlId="formBasic">
                <Form.Label>Grade</Form.Label>
                <Form.Control type="basic" placeholder="Enter Grade" />
            </Form.Group>
        </div>
        <div  class="pt-3">
                <Button variant="primary" type="submit" onClick={handleClickChange}>
                    Submit
                </Button>
        </div>

        
        </Form>
        <hr />
    </div>
      
    </div>
  )
}

export default Results