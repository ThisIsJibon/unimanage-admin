import React, {useState,useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.css';

const Department = () => {


    const [deptData,setDeptData] = useState({
        dept_id: "",
        name:"",
    });

    const handleDeptIdChange = (event) => {
      setDeptData({ ...deptData, dept_id: event.target.value });
    };

    const handleNameChange = (event) => {
      setDeptData({ ...deptData, name: event.target.value });
    };

 

    const handleSubmitChange = async (event) =>{
        event.preventDefault();
        
        const body = deptData;

        console.log(body);

        try{

            const response = await fetch(
                `http://localhost:5000/department`, {

                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body),

            });

            const data = await response.json();
            const {message} = data ;
            console.log(message);
            
            setDeptData({
                dept_id: "",
                name: "",
            });

        }catch(err){
            console.log(err.message);
        }

    };



  return (
    <div class="p-5">
      <div className="my-5">
          <h5>Add Department</h5>
          <hr />
        </div>
      <Form onSubmit={handleSubmitChange}>
      <div class="row">

          <Form.Group className="mb-3" class="col" controlId="formBasic">
              <Form.Label>Department ID</Form.Label>
              <Form.Control 
                type="basic" 
                placeholder="Enter Department ID"
                value={deptData.dept_id}
                onChange={handleDeptIdChange}/>
              <Form.Text className="text-muted">
                e.g.   ECO
              </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" class="col" controlId="formBasic">
              <Form.Label>Department Name</Form.Label>
              <Form.Control 
                type="basic" 
                placeholder="Enter Department Name" 
                value={deptData.name}
                onChange={handleNameChange}/>
              <Form.Text className="text-muted">
                e.g.   Economics
              </Form.Text>
          </Form.Group>
      </div>
      <div class=" pt-4">
        <Button variant="primary" type="submit">
            Submit
        </Button>
      </div>

      
      </Form>
      <hr />
  </div>
  )
}

export default Department